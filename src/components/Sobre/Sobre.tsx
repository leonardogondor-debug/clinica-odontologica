/**
 * SOBRE A CLÍNICA
 * Estrutura, equipe e profissionais responsáveis com número do CRO
 * (exigência da publicidade odontológica). Dados em src/data/clinica.ts.
 */
import { sobre, clinica } from "@/data/clinica";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className="secao secaoAlt">
      <div className="container">
        <h2 className="secaoTitulo">{sobre.titulo}</h2>
        {sobre.textos.map((p) => (
          <p key={p} className={styles.paragrafo}>{p}</p>
        ))}

        <h3 className={styles.subtitulo}>Nossa equipe</h3>
        <div className={styles.equipe}>
          {sobre.equipe.map((m, i) => (
            <article key={i} className={styles.membro}>
              {/* Trocar o emoji por foto do profissional (Image) quando disponível */}
              <div className={styles.foto} aria-hidden="true">👩‍⚕️</div>
              <h4>{m.nome}</h4>
              <p>{m.funcao}</p>
              <p className={styles.cro}>{m.cro}</p>
            </article>
          ))}
        </div>

        <p className={styles.responsavel}>
          Responsável técnico: {clinica.responsavelTecnico} — {clinica.croResponsavel}
        </p>
      </div>
    </section>
  );
}
