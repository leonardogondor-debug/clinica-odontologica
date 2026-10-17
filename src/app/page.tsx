/**
 * PÁGINA INICIAL — apenas monta as seções na ordem do briefing.
 * Para reordenar ou remover uma seção, mude as linhas abaixo.
 */
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Tratamentos from "@/components/Tratamentos/Tratamentos";
import Sobre from "@/components/Sobre/Sobre";
import Diferenciais from "@/components/Diferenciais/Diferenciais";
import ComoFunciona from "@/components/ComoFunciona/ComoFunciona";
import Faq from "@/components/Faq/Faq";
import Contato from "@/components/Contato/Contato";
import Footer from "@/components/Footer/Footer";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante/WhatsAppFlutuante";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tratamentos />
        <Sobre />
        <Diferenciais />
        <ComoFunciona />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
