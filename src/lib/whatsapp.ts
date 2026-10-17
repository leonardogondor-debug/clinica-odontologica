/**
 * Monta o link do WhatsApp com mensagem automática já preenchida.
 * Exemplo: https://wa.me/5551999999999?text=Ol%C3%A1...
 */
import { clinica } from "@/data/clinica";

export function linkWhatsapp(mensagem: string = clinica.mensagemWhatsapp) {
  return `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
