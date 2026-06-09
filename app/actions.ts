"use server";

import nodemailer from "nodemailer";

export type FormState = {
  status: "idle" | "success" | "error";
  name?: string;
  message?: string;
};

export async function submitLead(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const city = (formData.get("city") as string)?.trim();
  const capital = (formData.get("capital") as string)?.trim();
  const msg = (formData.get("msg") as string)?.trim();

  if (!name || !phone || !email || !city || !capital) {
    return { status: "error", message: "Preencha todos os campos obrigatórios." };
  }

  const capitalLabels: Record<string, string> = {
    tem_total: "Já tem o valor total disponível",
    tem_metade: "Tem aproximadamente a metade (R$ ~25.000)",
    financiamento: "Precisa de financiamento / parcelamento",
    sem_capital: "Ainda não tem o valor no momento",
  };

  const leadEmail = process.env.LEAD_EMAIL;

  if (!leadEmail) {
    console.error("LEAD_EMAIL não configurado nas variáveis de ambiente.");
    return {
      status: "error",
      message: "Erro de configuração do servidor. Tente novamente mais tarde.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Lembre-Lembre Franquia" <${process.env.SMTP_USER}>`,
      to: leadEmail,
      subject: `Novo lead: ${name} — ${city}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#fafaf8;border-radius:12px;">
          <h2 style="font-size:1.4rem;color:#1a1712;margin-bottom:24px;border-bottom:2px solid #c9913a;padding-bottom:12px;">
            Novo lead de franquia — Lembre-Lembre
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;width:160px;">Nome</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">WhatsApp</td><td style="padding:8px 0;font-weight:600;">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">E-mail</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">Cidade / Estado</td><td style="padding:8px 0;font-weight:600;">${city}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">Capital</td><td style="padding:8px 0;font-weight:600;">${capitalLabels[capital] ?? capital}</td></tr>
            ${msg ? `<tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;vertical-align:top;">Mensagem</td><td style="padding:8px 0;">${msg}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return { status: "success", name };
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return {
      status: "error",
      message: "Não foi possível enviar sua mensagem. Tente novamente.",
    };
  }
}
