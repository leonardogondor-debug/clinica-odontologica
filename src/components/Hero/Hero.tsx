/**
 * HERO (topo da página)
 * Título de impacto, breve apresentação, botão de WhatsApp e imagem profissional.
 * Para usar uma foto real: coloque o arquivo em /public/images/hero.jpg e troque
 * o bloco "placeholder" por:
 *   <Image src="/images/hero.jpg" alt="Equipe da clínica" width={560} height={640} priority />
 */
import { clinica } from "@/data/clinica";
import { linkWhatsapp } from "@/lib/whatsapp";
import LinkRastreado from "@/components/LinkRastreado/LinkRastreado";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grade}`}>
        <div className={styles.texto}>
          <p className={styles.selo}>Odontologia com acolhimento</p>
          <h1>Cuide do seu sorriso com atenção e segurança</h1>
          <p className={styles.apresentacao}>
            {clinica.descricao} Agende uma avaliação e conheça as opções indicadas para o seu caso.
          </p>

          <div className={styles.botoes}>
            <LinkRastreado href={linkWhatsapp()} evento="whatsapp_click" local="hero" className="btn btnWhats">
              Agendar pelo WhatsApp
            </LinkRastreado>
            <a href="#tratamentos" className="btn btnContorno">Ver tratamentos</a>
          </div>

          {/* Aviso exigido pelas boas práticas de publicidade odontológica */}
          <p className={styles.aviso}>
            Os resultados variam de pessoa para pessoa. Todo tratamento depende de avaliação clínica individual.
          </p>
        </div>

        {/* Placeholder da imagem — trocar por foto real da clínica/equipe */}
        <div className={styles.imagem} role="img" aria-label="Ilustração de atendimento odontológico">
          <span aria-hidden="true">🦷</span>
        </div>
      </div>
    </section>
  );
}
