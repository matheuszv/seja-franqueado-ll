import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const capitalLabels: Record<string, string> = {
  tem_total: "Já tem o valor total disponível",
  tem_metade: "Tem aproximadamente a metade (R$ ~25.000)",
  financiamento: "Precisa de financiamento / parcelamento",
  sem_capital: "Ainda não tem o valor no momento",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, city, capital, msg } = body as Record<string, string>;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !city?.trim() || !capital?.trim()) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  const leadEmail = process.env.LEAD_EMAIL;

  if (!leadEmail) {
    console.error("LEAD_EMAIL não configurado nas variáveis de ambiente.");
    return NextResponse.json(
      { error: "Erro de configuração do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
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
      subject: `Novo lead: ${name.trim()} — ${city.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#fafaf8;border-radius:12px;">
          <h2 style="font-size:1.4rem;color:#1a1712;margin-bottom:24px;border-bottom:2px solid #c9913a;padding-bottom:12px;">
            Novo lead de franquia — Lembre-Lembre
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;width:160px;">Nome</td><td style="padding:8px 0;font-weight:600;">${name.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">WhatsApp</td><td style="padding:8px 0;font-weight:600;">${phone.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">E-mail</td><td style="padding:8px 0;font-weight:600;">${email.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">Cidade / Estado</td><td style="padding:8px 0;font-weight:600;">${city.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">Capital</td><td style="padding:8px 0;font-weight:600;">${capitalLabels[capital] ?? capital}</td></tr>
            ${msg?.trim() ? `<tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;vertical-align:top;">Mensagem</td><td style="padding:8px 0;">${msg.trim()}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, name: name.trim() });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
