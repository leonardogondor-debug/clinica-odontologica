"use client";
/**
 * CONSENTIMENTO (LGPD)
 * Mostra o aviso de cookies e, somente se o visitante aceitar,
 * carrega Google Tag Manager, GA4 e Meta Pixel.
 * A escolha fica salva no navegador (localStorage).
 */
import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import styles from "./Consentimento.module.css";

const GTM = process.env.NEXT_PUBLIC_GTM_ID;
const GA4 = process.env.NEXT_PUBLIC_GA4_ID;
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CHAVE = "consentimento-cookies";

export default function Consentimento() {
  // null = ainda não decidiu | "sim" | "nao"
  const [escolha, setEscolha] = useState<"sim" | "nao" | null>(null);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo === "sim" || salvo === "nao") setEscolha(salvo);
    } catch {}
    setPronto(true);
  }, []);

  function decidir(valor: "sim" | "nao") {
    try { localStorage.setItem(CHAVE, valor); } catch {}
    setEscolha(valor);
  }

  return (
    <>
      {/* Scripts de rastreamento: só após aceite */}
      {escolha === "sim" && (
        <>
          {GTM && (
            <Script id="gtm" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM}');
            `}</Script>
          )}
          {GA4 && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} strategy="afterInteractive" />
              <Script id="ga4" strategy="afterInteractive">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA4}');
              `}</Script>
            </>
          )}
          {PIXEL && (
            <Script id="meta-pixel" strategy="afterInteractive">{`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${PIXEL}');fbq('track','PageView');
            `}</Script>
          )}
        </>
      )}

      {/* Aviso de cookies */}
      {pronto && escolha === null && (
        <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
          <p>
            Usamos cookies para medir o desempenho do site e melhorar sua experiência. Saiba mais na{" "}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
          </p>
          <div className={styles.acoes}>
            <button className={styles.recusar} onClick={() => decidir("nao")}>Recusar</button>
            <button className={styles.aceitar} onClick={() => decidir("sim")}>Aceitar</button>
          </div>
        </div>
      )}
    </>
  );
}
