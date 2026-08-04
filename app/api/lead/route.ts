import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

// Variáveis de ambiente necessárias no servidor (nunca commitar no repositório):
//   META_PIXEL_ID    — ID do Pixel Meta (Site-LL)
//   META_CAPI_TOKEN  — token de acesso da Conversions API, enviado por canal separado

const capitalLabels: Record<string, string> = {
  tem_total: "Já tem o valor total disponível",
  tem_metade: "Tem aproximadamente a metade (R$ ~25.000)",
  financiamento: "Precisa de financiamento / parcelamento",
  sem_capital: "Ainda não tem o valor no momento",
};

// --- Normalização + hash SHA-256 (exigência da Meta para user_data) ---
const sha256 = (v: string) => crypto.createHash("sha256").update(v).digest("hex");

const hashField = (v?: string | null) =>
  v && v.trim() ? [sha256(v.trim().toLowerCase())] : undefined;

// Telefone BR: apenas dígitos, com DDI 55 na frente
const hashPhone = (v?: string | null) => {
  if (!v) return undefined;
  let d = v.replace(/\D/g, "");
  if (!d) return undefined;
  if (!d.startsWith("55")) d = "55" + d;
  return [sha256(d)];
};

async function sendToConversionsApi(req: NextRequest, body: Record<string, string>) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;

  if (!pixelId || !token) {
    console.error("META_PIXEL_ID ou META_CAPI_TOKEN não configurados — evento CAPI não enviado.");
    return;
  }

  const cookies = req.headers.get("cookie") ?? "";
  const fbp = /_fbp=([^;]+)/.exec(cookies)?.[1];
  const fbc = /_fbc=([^;]+)/.exec(cookies)?.[1];

  // Separar nome/sobrenome do campo "nome completo"
  const partes = (body.name ?? "").trim().split(/\s+/);
  const firstName = partes[0];
  const lastName = partes.length > 1 ? partes[partes.length - 1] : undefined;

  // "Cidade / Estado" → tentar separar por "/", "-" ou ","
  const [cidade, estado] = (body.city ?? "").split(/[/\-,]/).map((s) => s.trim());

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id, // MESMO id do browser (deduplicação)
        event_source_url: body.page_url ?? "https://seja.franquialembrelembre.com.br/",
        action_source: "website",
        user_data: {
          em: hashField(body.email),
          ph: hashPhone(body.phone),
          fn: hashField(firstName),
          ln: hashField(lastName),
          ct: hashField(cidade?.replace(/\s/g, "")),
          st: hashField(estado),
          country: [sha256("br")],
          client_ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
          client_user_agent: req.headers.get("user-agent") ?? undefined,
          fbp: fbp || undefined,
          fbc: fbc || undefined,
        },
        custom_data: {
          content_name: "Formulario Franquia LP",
          situacao_investimento: body.capital ?? undefined,
          profissao: body.profession ?? undefined,
        },
      },
    ],
    // Descomentar apenas durante os testes de validação com a equipe de tráfego:
    // test_event_code: "TESTXXXXX",
  };

  try {
    const r = await fetch(
      `https://graph.facebook.com/v23.0/${pixelId}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!r.ok) console.error("CAPI error:", await r.text());
  } catch (e) {
    // Falha na CAPI NÃO deve derrubar o envio do lead.
    console.error("CAPI request failed:", e);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, city, profession, capital, msg } = body as Record<string, string>;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !city?.trim() || !profession?.trim() || !capital?.trim()) {
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
      subject: `Seja um Franqueado: ${name.trim()} — ${city.trim()}`,
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
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">Profissão</td><td style="padding:8px 0;font-weight:600;">${profession.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;">Capital</td><td style="padding:8px 0;font-weight:600;">${capitalLabels[capital] ?? capital}</td></tr>
            ${msg?.trim() ? `<tr><td style="padding:8px 0;color:#6b6560;font-size:.85rem;vertical-align:top;">Mensagem</td><td style="padding:8px 0;">${msg.trim()}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    await sendToConversionsApi(req, body as Record<string, string>);

    return NextResponse.json({ success: true, name: name.trim() });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
