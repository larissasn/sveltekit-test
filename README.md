# 🔮 Prever Idade 

Uma aplicação moderna que prediz idade baseada no nome usando a serviço do Agify.io.

## 🚀 Como executar

### 1. Criar o projeto
```bash
# Comando OFICIAL do SvelteKit (2025)
npx sv create prever-idade
cd prever-idade
npm install
```

> ⚠️ **Importante:** O comando `npm create svelte` foi depreciado e agora redireciona para `npx sv create`

### 2. Arquivos

- `src/routes/+page.js` - Função load para API
- `src/routes/+page.svelte` - Página principal
- `src/routes/+layout.svelte` - Layout base
- `src/app.css` - Estilos globais
- `src/app.html` - HTML base

### 3. Executar em desenvolvimento
```bash
npm run dev
# ou
npm run dev -- --open
```

### 4. Configurar Git
```bash
git init
git add .
git commit -m "feat: Age Predictor app with SvelteKit"
```

## ✨ Funcionalidades

- ✅ **Input com debounce** (750ms) - consulta automática
- ✅ **URL com query string** - URLs compartilháveis (`?name=Larissa`)
- ✅ **Função load()** - requisições server-side/universal
- ✅ **CSS puro** - design moderno sem frameworks
- ✅ **HTML5 válido** - semântica correta
- ✅ **Responsivo** - funciona em mobile e desktop
- ✅ **Acessível** - foco visível e semântica adequada

## 🎨 Design Features

- **Gradiente moderno** - Background vibrante
- **Glassmorphism** - Efeito de vidro fosco
- **Animações suaves** - Transições e hover effects
- **Typography moderna** - Fonte system com fallbacks
- **Loading states** - Spinner durante carregamento
- **Empty states** - Orientação quando vazio

## 🔧 Arquitetura

### Função Load (`+page.js`)
- Consulta universal (server/client)
- Trata query params automaticamente
- Não consulta API se nome vazio
- Error handling silencioso

### Componente Principal (`+page.svelte`)
- Debounce no input (750ms)
- Atualização de URL automática
- Estados de loading/empty/result
- Acessibilidade completa

### Styling
- CSS puro sem pré-processadores
- Design system consistente
- Mobile-first responsive
- Performance otimizada

## 🌐 Deploy

### Vercel
```bash
npm i -D @sveltejs/adapter-vercel
# Configurar svelte.config.js
npm run build
```

### Netlify
```bash
npm i -D @sveltejs/adapter-netlify
# Configurar svelte.config.js
npm run build
```

### GitHub Pages
```bash
npm i -D @sveltejs/adapter-static
# Configurar para SPA mode
npm run build
```

## 📱 URLs de Exemplo

- `http://localhost:5173/` - Página inicial
- `http://localhost:5173/?name=Larissa` - Consulta específica
- `http://localhost:5173/?name=Maria` - Outro exemplo


**Desenvolvido por Larissa com ❤️ usando SvelteKit**