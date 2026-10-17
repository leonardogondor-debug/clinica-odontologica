/**
 * HEADER
 * Barra fixa no topo: nome da clínica, links de navegação (desktop)
 * e botão de agendamento pelo WhatsApp.
 */
import { clinica } from "@/data/clinica";
import { linkWhatsapp } from "@/lib/whatsapp";
import LinkRastreado from "@/components/LinkRastreado/LinkRastreado";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.barra}`}>
        <a href="#inicio" className={styles.logo}>
          <span aria-hidden="true">🦷</span> {clinica.nome}
        </a>

        {/* Menu aparece apenas em telas maiores */}
        <nav className={styles.menu} aria-label="Principal">
          <a href="#tratamentos">Tratamentos</a>
          <a href="#sobre">A clínica</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>

        <LinkRastreado
          href={linkWhatsapp()}
          evento="whatsapp_click"
          local="header"
          className={`btn btnWhats ${styles.cta}`}
        >
          Agendar
        </LinkRastreado>
      </div>
    </header>
  );
}
