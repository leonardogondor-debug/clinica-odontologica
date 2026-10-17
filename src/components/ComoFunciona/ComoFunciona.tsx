/**
 * COMO FUNCIONA
 * Etapas numeradas do primeiro contato até a consulta. Dados em src/data/clinica.ts (etapas).
 */
import { etapas } from "@/data/clinica";
import { linkWhatsapp } from "@/lib/whatsapp";
import LinkRastreado from "@/components/LinkRastreado/LinkRastreado";
import styles from "./ComoFunciona.module.css";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="secao secaoAlt">
      <div className="container">
        <h2 className="secaoTitulo">Como funciona o atendimento</h2>
        <p className="secaoSub">Do primeiro contato à consulta, em poucos passos.</p>

        <ol className={styles.passos}>
          {etapas.map((e, i) => (
            <li key={e.titulo} className={styles.passo}>
              <span className={styles.numero}>{i + 1}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>

        <div className={styles.cta}>
          <LinkRastreado href={linkWhatsapp()} evento="whatsapp_click" local="como-funciona" className="btn btnWhats">
            Começar pelo WhatsApp
          </LinkRastreado>
        </div>
      </div>
    </section>
  );
}
