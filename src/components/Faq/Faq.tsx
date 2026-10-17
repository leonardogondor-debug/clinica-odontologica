/**
 * PERGUNTAS FREQUENTES
 * Usa <details>/<summary> nativos: acessível, sem JavaScript e bom para SEO.
 * Também envia as perguntas como dados estruturados (FAQPage) para o Google.
 */
import { faqs } from "@/data/clinica";
import styles from "./Faq.module.css";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <section id="faq" className="secao">
      <div className="container">
        <h2 className="secaoTitulo">Perguntas frequentes</h2>
        <p className="secaoSub">Tire suas principais dúvidas sobre agendamentos e tratamentos.</p>

        <div className={styles.lista}>
          {faqs.map((f) => (
            <details key={f.pergunta} className={styles.item}>
              <summary>{f.pergunta}</summary>
              <p>{f.resposta}</p>
            </details>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  );
}
