"use client";
/**
 * LINK RASTREADO
 * Link comum (WhatsApp ou telefone) que, ao ser clicado, registra a conversão
 * no GTM/GA4/Meta Pixel. Usado em todos os botões de contato do site.
 */
import { trackEvent, type EventoConversao } from "@/lib/tracking";

type Props = {
  href: string;
  evento: Extract<EventoConversao, "whatsapp_click" | "phone_click">;
  local: string; // onde o botão está (hero, header, rodapé...) — útil nos relatórios
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function LinkRastreado({ href, evento, local, className, children, ariaLabel }: Props) {
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => trackEvent(evento, { local })}
    >
      {children}
    </a>
  );
}
