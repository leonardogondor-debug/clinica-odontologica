/**
 * RASTREAMENTO DE CONVERSÕES
 * Envia eventos para o Google Tag Manager (dataLayer), GA4 (gtag) e Meta Pixel (fbq).
 * Os scripts só existem na página depois que o visitante aceita os cookies (LGPD),
 * então, sem consentimento, nenhuma função abaixo faz nada.
 *
 * Eventos usados no site:
 *  - whatsapp_click  → clique em qualquer botão de WhatsApp
 *  - phone_click     → clique no telefone
 *  - generate_lead   → envio do formulário com sucesso
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type EventoConversao = "whatsapp_click" | "phone_click" | "generate_lead";

// Equivalência com os eventos padrão do Meta Pixel
const eventoMeta: Record<EventoConversao, string> = {
  whatsapp_click: "Contact",
  phone_click: "Contact",
  generate_lead: "Lead",
};

export function trackEvent(
  evento: EventoConversao,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({ event: evento, ...params });
  window.gtag?.("event", evento, params);
  window.fbq?.("track", eventoMeta[evento], params);
}
