/**
 * TRATAMENTOS
 * Cards com os serviços. Os itens vêm de src/data/clinica.ts (lista "tratamentos").
 * Textos sem promessa de resultado, conforme normas do CFO.
 */
import { tratamentos } from "@/data/clinica";
import { linkWhatsapp } from "@/lib/whatsapp";
import LinkRastreado from "@/components/LinkRastreado/LinkRastreado";
import styles from "./Tratamentos.module.css";

export default function Tratamentos() {
  return (
    <section id="tratamentos" className="secao">
      <div className="container">
        <h2 className="secaoTitulo">Nossos tratamentos</h2>
        <p className="secaoSub">
          Conheça algumas áreas de atendimento. A indicação de cada procedimento é feita pelo
          cirurgião-dentista após a avaliação.
        </p>

        <div className={styles.grade}>
          {tratamentos.map((t) => (
            <article key={t.titulo} className={styles.card}>
              <span className={styles.icone} aria-hidden="true">{t.icone}</span>
              <h3>{t.titulo}</h3>
              <p>{t.texto}</p>
              <LinkRastreado
                href={linkWhatsapp(`Olá! Gostaria de saber mais sobre ${t.titulo.toLowerCase()}.`)}
                evento="whatsapp_click"
                local={`tratamento-${t.titulo}`}
                className={styles.link}
              >
                Falar sobre este tratamento →
              </LinkRastreado>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
