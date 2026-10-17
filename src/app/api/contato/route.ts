/**
 * API DO FORMULÁRIO (POST /api/contato)
 * Valida os dados, bloqueia spam (honeypot) e repassa o contato para o
 * webhook configurado em FORM_WEBHOOK_URL (e-mail ou planilha Google).
 */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let dados: Record<string, unknown>;
  try {
    dados = await req.json();
  } catch {
    return NextResponse.json({ erro: "Dados inválidos" }, { status: 400 });
  }

  // Honeypot preenchido = robô. Responde "ok" sem enviar nada.
  if (dados.website) return NextResponse.json({ ok: true });

  const nome = String(dados.nome ?? "").trim().slice(0, 120);
  const telefone = String(dados.telefone ?? "").trim().slice(0, 30);
  const interesse = String(dados.interesse ?? "").trim().slice(0, 80);
  const mensagem = String(dados.mensagem ?? "").trim().slice(0, 1000);
  const lgpd = Boolean(dados.lgpd);

  if (nome.length < 2 || telefone.replace(/\D/g, "").length < 10 || !lgpd) {
    return NextResponse.json({ erro: "Preencha os campos obrigatórios" }, { status: 422 });
  }

  const webhook = process.env.FORM_WEBHOOK_URL;
  if (!webhook) {
    console.error("FORM_WEBHOOK_URL não configurada");
    return NextResponse.json({ erro: "Envio indisponível" }, { status: 503 });
  }

  try {
    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome, telefone, interesse, mensagem,
        consentimentoLgpd: true,
        enviadoEm: new Date().toISOString(),
        origem: "landing-page",
      }),
    });
    if (!resp.ok) throw new Error(`webhook ${resp.status}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Falha ao enviar contato", e);
    return NextResponse.json({ erro: "Falha no envio" }, { status: 502 });
  }
}
