"use client";
/**
 * CONTATO
 * Formulário simples (nome, telefone, interesse, mensagem) + canais diretos
 * (WhatsApp, telefone e endereço). O formulário envia para /api/contato,
 * que repassa para e-mail/planilha via webhook. Inclui consentimento LGPD
 * e campo "armadilha" (honeypot) contra robôs de spam.
 */
import { useState } from "react";
import Link from "next/link";
import { clinica, tratamentos } from "@/data/clinica";
import { linkWhatsapp } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import LinkRastreado from "@/components/LinkRastreado/LinkRastreado";
import styles from "./Contato.module.css";

type Status = "parado" | "enviando" | "ok" | "erro";

export default function Contato() {
  const [status, setStatus] = useState<Status>("parado");

  async function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("enviando");

    const dados = Object.fromEntries(new FormData(form).entries());
    try {
      const resp = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resp.ok) throw new Error("falha");
      setStatus("ok");
      form.reset();
      trackEvent("generate_lead", { local: "formulario" }); // conversão do formulário
    } catch {
      setStatus("erro");
    }
  }

  return (
    <section id="contato" className="secao secaoAlt">
      <div className="container">
        <h2 className="secaoTitulo">Agende sua avaliação</h2>
        <p className="secaoSub">Fale conosco pelo canal que preferir. Respondemos o mais breve possível.</p>

        <div className={styles.grade}>
          {/* Formulário */}
          <form className={styles.form} onSubmit={aoEnviar}>
            <label>
              Nome
              <input name="nome" required minLength={2} autoComplete="name" />
            </label>
            <label>
              WhatsApp ou telefone
              <input name="telefone" required type="tel" autoComplete="tel" placeholder="(51) 90000-0000" />
            </label>
            <label>
              Tenho interesse em
              <select name="interesse" defaultValue="Avaliação geral">
                <option>Avaliação geral</option>
                {tratamentos.map((t) => <option key={t.titulo}>{t.titulo}</option>)}
              </select>
            </label>
            <label>
              Mensagem (opcional)
              <textarea name="mensagem" rows={3} />
            </label>

            {/* Honeypot: invisível para pessoas; robôs costumam preencher */}
            <input name="website" tabIndex={-1} autoComplete="off" className={styles.armadilha} aria-hidden="true" />

            <label className={styles.consentimento}>
              <input type="checkbox" name="lgpd" required />
              <span>
                Concordo com o uso dos meus dados para contato, conforme a{" "}
                <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
              </span>
            </label>

            <button className="btn btnWhats" type="submit" disabled={status === "enviando"}>
              {status === "enviando" ? "Enviando..." : "Enviar"}
            </button>

            {status === "ok" && <p className={styles.sucesso} role="status">Recebemos sua mensagem! Entraremos em contato em breve.</p>}
            {status === "erro" && <p className={styles.erro} role="alert">Não foi possível enviar agora. Tente pelo WhatsApp.</p>}
          </form>

          {/* Canais diretos */}
          <div className={styles.canais}>
            <LinkRastreado href={linkWhatsapp()} evento="whatsapp_click" local="contato" className="btn btnWhats">
              Chamar no WhatsApp
            </LinkRastreado>
            <LinkRastreado
              href={`tel:${clinica.telefoneLink}`}
              evento="phone_click"
              local="contato"
              className="btn btnContorno"
            >
              Ligar {clinica.telefoneExibicao}
            </LinkRastreado>
            <address className={styles.endereco}>
              <strong>Endereço</strong>
              <br />{clinica.endereco}
              <br /><strong>Horário</strong>
              <br />{clinica.horario}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
