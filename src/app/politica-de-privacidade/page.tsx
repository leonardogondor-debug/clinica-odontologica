/**
 * POLÍTICA DE PRIVACIDADE (/politica-de-privacidade)
 * Modelo base para a LGPD. IMPORTANTE: revise com um advogado/DPO antes de publicar.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { clinica } from "@/data/clinica";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${clinica.nome}`,
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidade() {
  return (
    <main className={styles.pagina}>
      <div className="container">
        <Link href="/" className={styles.voltar}>← Voltar ao site</Link>
        <h1>Política de Privacidade</h1>
        <p className={styles.data}>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <h2>1. Quem somos</h2>
        <p>
          {clinica.nome} é a controladora dos dados pessoais coletados neste site. Contato do
          encarregado de dados: {clinica.email}.
        </p>

        <h2>2. Dados que coletamos</h2>
        <p>
          Nome, telefone, interesse de atendimento e mensagem enviados no formulário ou por WhatsApp;
          e dados de navegação (páginas visitadas, dispositivo, origem do acesso) por meio de cookies,
          somente se você aceitar.
        </p>

        <h2>3. Para que usamos</h2>
        <p>
          Responder seu contato, agendar avaliações e medir o desempenho das nossas campanhas e do site.
          A base legal é o seu consentimento e, quando aplicável, a execução de procedimentos preliminares
          a um atendimento.
        </p>

        <h2>4. Cookies e ferramentas de terceiros</h2>
        <p>
          Utilizamos Google Tag Manager, Google Analytics 4 e Meta Pixel, que só são ativados após o aceite
          no aviso de cookies. Você pode recusar sem prejuízo ao uso do site.
        </p>

        <h2>5. Compartilhamento</h2>
        <p>
          Os dados podem ser tratados por provedores que nos ajudam a operar o site (hospedagem, e-mail,
          planilhas e ferramentas de análise). Não vendemos seus dados.
        </p>

        <h2>6. Por quanto tempo guardamos</h2>
        <p>
          Pelo tempo necessário para atender ao seu contato e cumprir obrigações legais, ou até que você
          peça a exclusão.
        </p>

        <h2>7. Seus direitos</h2>
        <p>
          Conforme a LGPD (Lei nº 13.709/2018), você pode solicitar confirmação de tratamento, acesso,
          correção, anonimização, portabilidade, exclusão dos dados e revogação do consentimento, pelo
          e-mail {clinica.email}.
        </p>

        <h2>8. Alterações</h2>
        <p>Esta política pode ser atualizada. A data da última revisão fica no topo da página.</p>
      </div>
    </main>
  );
}
