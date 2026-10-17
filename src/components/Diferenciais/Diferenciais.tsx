/**
 * DIFERENCIAIS
 * Quatro blocos curtos: atendimento humanizado, tecnologia, conforto e qualidade.
 */
import { diferenciais } from "@/data/clinica";
import styles from "./Diferenciais.module.css";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="secao">
      <div className="container">
        <h2 className="secaoTitulo">Por que escolher nossa clínica</h2>
        <p className="secaoSub">Cuidado com a sua saúde bucal começa por um bom atendimento.</p>

        <ul className={styles.lista}>
          {diferenciais.map((d) => (
            <li key={d.titulo} className={styles.item}>
              <span className={styles.icone} aria-hidden="true">{d.icone}</span>
              <div>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
