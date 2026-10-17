# Landing Page — Clínica Odontológica

Landing page em **Next.js (App Router) + TypeScript + CSS Modules**, focada em
agendamentos pelo WhatsApp, rápida, responsiva (mobile first) e com SEO básico.

## Estrutura de pastas

```
src/
├── app/                      # Páginas e configuração global
│   ├── layout.tsx            # SEO, JSON-LD e consentimento de cookies
│   ├── page.tsx              # Monta as seções da home
│   ├── globals.css           # Cores, reset e botões
│   ├── sitemap.ts / robots.ts
│   ├── api/contato/route.ts  # Recebe o formulário e envia ao webhook
│   └── politica-de-privacidade/
├── components/               # Cada seção: pasta → .tsx + .module.css
│   ├── Header/  Hero/  Tratamentos/  Sobre/  Diferenciais/
│   ├── ComoFunciona/  Faq/  Contato/  Footer/
│   ├── WhatsAppFlutuante/    # Botão fixo com mensagem automática
│   ├── LinkRastreado/        # Link que registra conversão
│   └── Consentimento/        # Aviso de cookies + GTM/GA4/Pixel (LGPD)
├── data/clinica.ts           # ✏️ TODOS os textos e dados editáveis
└── lib/                      # tracking.ts e whatsapp.ts
```

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção
```

## Como editar (sem mexer em código)

Abra `src/data/clinica.ts` e troque tudo que está marcado com `// TROCAR`:
nome, WhatsApp, telefone, endereço, CRO, profissionais, tratamentos, FAQ e link do Google Maps.
Cores ficam em `src/app/globals.css` (variáveis `--azul`, `--verde`).

Imagens: coloque em `public/images/` e use o componente `<Image>` do Next
(otimiza automaticamente). O Hero tem instrução no comentário do arquivo.

## Rastreamento e conversões

Preencha no `.env.local`: `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.
Os scripts só carregam **após o aceite de cookies**. Eventos enviados:

| Evento           | Quando dispara                      | Meta Pixel |
|------------------|-------------------------------------|------------|
| `whatsapp_click` | Qualquer botão/ícone de WhatsApp    | Contact    |
| `phone_click`    | Clique em "Ligar"                   | Contact    |
| `generate_lead`  | Formulário enviado com sucesso      | Lead       |

No GTM, crie gatilhos de "Evento personalizado" com esses nomes e marque-os como
conversões no GA4 e no Google Ads. Teste com o *Tag Assistant* e o *Meta Pixel Helper*.

## Formulário → e-mail ou planilha

Defina `FORM_WEBHOOK_URL` com um destino que receba JSON, por exemplo:
- **Formspree / Make / Zapier** → envia por e-mail;
- **Google Apps Script** publicado como Web App → grava em Google Planilhas.

Campos enviados: `nome, telefone, interesse, mensagem, consentimentoLgpd, enviadoEm, origem`.

## Publicação, domínio e SSL

Recomendado: **Vercel** (SSL automático e CDN).
1. Suba o projeto no GitHub e importe na Vercel.
2. Em *Settings → Environment Variables*, cadastre as variáveis do `.env.example`.
3. Em *Domains*, adicione o domínio e aponte o DNS conforme as instruções (registro A/CNAME).
4. Atualize `NEXT_PUBLIC_SITE_URL` com o domínio final e faça novo deploy.

## Checklist antes de publicar

- [ ] Trocar todos os dados marcados com `// TROCAR` e conferir os CROs
- [ ] Substituir os emojis/placeholder por fotos reais (com autorização de uso de imagem)
- [ ] Revisar a Política de Privacidade com advogado/DPO
- [ ] Conferir textos com as normas de publicidade do CFO (sem promessa de resultado,
      sem "antes e depois", sem preços/promoções, sem superlativos)
- [ ] Cadastrar o domínio no Google Search Console e enviar `/sitemap.xml`
- [ ] Rodar Lighthouse (meta: 90+ em Performance e SEO no celular)
