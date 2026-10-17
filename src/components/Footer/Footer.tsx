/**
 * RODAPÉ
 * Google Maps, redes sociais, informações profissionais (CRO) e Política de Privacidade.
 */
import Link from "next/link";
import { clinica } from "@/data/clinica";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grade}`}>
        <div>
          <h2 className={styles.nome}>{clinica.nome}</h2>
          <p>{clinica.endereco}</p>
          <p>{clinica.telefoneExibicao} • {clinica.email}</p>
          <p>{clinica.horario}</p>

          <p className={styles.cro}>
            Responsável técnico: {clinica.responsavelTecnico} — {clinica.croResponsavel}
            <br />Registro da clínica: {clinica.croClinica}
          </p>

          <div className={styles.redes}>
            <a href={clinica.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={clinica.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </div>
        </div>

        {/* Mapa carregado só quando chega perto da tela (loading="lazy") para não pesar */}
        <iframe
          className={styles.mapa}
          title={`Localização da ${clinica.nome} no Google Maps`}
          src={clinica.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} {clinica.nome}. Todos os direitos reservados.
        Os resultados dos tratamentos variam de pessoa para pessoa.
      </p>
    </footer>
  );
}
