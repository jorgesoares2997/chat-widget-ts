# Fenix Chat Widget

Bem-vindo ao Fenix Chat Widget, um chat flutuante com tema neon roxo e animações futuristas, construído com React, TypeScript, Tailwind CSS e Framer Motion. Este widget pode ser incorporado em qualquer site via script e permite que os usuários enviem mensagens com scroll automático.

## Funcionalidades

Botão flutuante com ícone de fênix que pulsa e cresce ao passar o mouse.

Caixa de chat com animações suaves de entrada/saída.

Campo de entrada para enviar mensagens.

Histórico de mensagens com scroll automático para a
última mensagem.

Estilo neon roxo inspirado em cyberpunk.

## Pré-requisitos

Node.js (versão LTS recomendada, ex.: v20.x)
npm (versão 10.x ou superior)
Uma conta na Vercel para hospedagem (opcional, para deploy online)

## Instalação e Configuração

### 1. Clonar o Repositório

`git clone <URL_DO_REPOSITORIO>`
`cd chat-widget-ts`

### 2. Instalar Dependências

`npm install`

### 3. Rodar em Desenvolvimento

`npm run dev`

Abra http://localhost:5173 no navegador para ver o widget funcionando localmente.

### 4. Gerar o Build

Para criar o arquivo JavaScript incorporável:

`npm run build`

O arquivo dist/chat-widget.js será gerado na pasta dist.

## Hospedagem na Vercel

Para disponibilizar o widget online como um script remoto:

- Criar um Projeto para o Script:
- Crie uma nova pasta (ex.: fenix-script).
- Copie o dist/chat-widget.js para essa pasta.
- Adicione um arquivo vercel.json:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "chat-widget.js",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/chat-widget.js"
    }
  ]
}
```

## Deploy na Vercel:

vercel

Após o deploy, você receberá uma URL (ex.: https://fenix-script.vercel.app/chat-widget.js).

## Incorporando em Outro Site

Para adicionar o "Fenix" a um site (como um projeto Next.js):

Adicione o Script:

Use a tag <script> com a URL do deploy:

```html
<script src="https://fenix-script.vercel.app/chat-widget.js" defer></script>
```

Em um projeto Next.js, use o componente <Script>:

```tsx
import Script from "next/script";

<Script
  src="https://fenix-script.vercel.app/chat-widget.js"
  strategy="afterInteractive"
/>;
```

## Onde Colocar:

Para aparecer em todas as páginas no Next.js, coloque no app/layout.tsx dentro do <body>:

```tsx
<body>
  <Script
    src="https://fenix-script.vercel.app/chat-widget.js"
    strategy="afterInteractive"
  />
  {children}
</body>
```

### Para uma página específica, adicione no componente da página.

## Teste:

O botão da fênix aparecerá no canto inferior direito. Clique para abrir o chat.

- Estrutura do Projeto:

src/ChatWidget.tsx: Componente principal do chat.
src/main.tsx: Ponto de entrada que injeta o widget no DOM.
src/index.css: Estilos globais com Tailwind.
vite.config.ts: Configuração do Vite para build IIFE.
tailwind.config.js: Configuração do Tailwind com cores e sombras personalizadas.

## Personalização

### Cores:

Edite as classes Tailwind em ChatWidget.tsx ou ajuste o tailwind.config.js.

### Ícone:

Substitua a URL da imagem em <img src="https://port-bu.s3.eu-north-1.amazonaws.com/fenix-chat.png" />
por outra.

## Posição:

Altere bottom-5 right-5 para outra posição (ex.: top-5 left-5).

## Resolução de Problemas

### Widget Não Aparece:

Verifique o console do navegador por erros.
Confirme que a URL do script está acessível e retorna o código JS.

Aumente o z-index em ChatWidget.tsx para z-[9999] se houver sobreposição.
Erro de Carregamento:
Use onLoad no <Script> para debug:

```tsx
<Script
  src="..."
  strategy="afterInteractive"
  onLoad={() => console.log("Carregado!")}
/>
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias!
