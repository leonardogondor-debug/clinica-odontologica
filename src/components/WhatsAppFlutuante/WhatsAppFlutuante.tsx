/**
 * BOTÃO FLUTUANTE DE WHATSAPP
 * Fica fixo no canto da tela em toda a página, com mensagem automática.
 */
import { linkWhatsapp } from "@/lib/whatsapp";
import LinkRastreado from "@/components/LinkRastreado/LinkRastreado";
import styles from "./WhatsAppFlutuante.module.css";

export default function WhatsAppFlutuante() {
  return (
    <LinkRastreado
      href={linkWhatsapp()}
      evento="whatsapp_click"
      local="botao-flutuante"
      className={styles.botao}
      ariaLabel="Agendar pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.5 1.8 6.4L3 29l7.3-2.1c1.8 1 3.8 1.5 5.7 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.3 1.2 1.2-4.2-.3-.4a10 10 0 0 1-1.5-5.3C5.7 9.9 10.4 5.3 16 5.3s10.3 4.6 10.3 10.2S21.700 25.700 16 25.700zm5.700-7.600c-.3-.2-1.800-.9-2.100-1-.3-.1-.5-.2-.7.2-.2.300-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.300-.5-2.500-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.5-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.400 4.700 3.200 1.300 3.200.9 3.800.8.600-.1 1.800-.7 2.100-1.500.3-.7.300-1.300.2-1.500-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </LinkRastreado>
  );
}
