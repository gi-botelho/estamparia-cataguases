# Estamparia Cataguases - Protótipo de Site

Projeto React com Vite, Tailwind CSS e Framer Motion para apresentação da Estamparia Cataguases.

## 🚀 Como Rodar no Windows

### Pré-requisitos
- **Node.js** (versão 16+) - Baixe em https://nodejs.org/
- **npm** ou **pnpm** (gerenciador de pacotes)

### Passo 1: Instalar Node.js
1. Acesse https://nodejs.org/
2. Baixe a versão LTS (recomendado)
3. Execute o instalador e siga as instruções
4. Abra o Prompt de Comando e verifique:
   ```bash
   node --version
   npm --version
   ```

### Passo 2: Instalar pnpm (opcional, mas recomendado)
```bash
npm install -g pnpm
```

### Passo 3: Instalar Dependências
Abra o Prompt de Comando na pasta do projeto e execute:
```bash
pnpm install
```

Ou se preferir usar npm:
```bash
npm install
```

### Passo 4: Rodar o Servidor de Desenvolvimento
```bash
pnpm dev
```

Ou com npm:
```bash
npm run dev
```

O servidor iniciará em `http://localhost:5173/` (ou outra porta se 5173 estiver ocupada).

### Passo 5: Abrir no Navegador
Copie o endereço exibido no terminal (ex: http://localhost:5173/) e abra no seu navegador.

## 📦 Estrutura do Projeto

```
estamparia-web/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navegação fixa
│   │   ├── Hero.jsx          # Hero section com parallax
│   │   ├── Portfolio.jsx     # Portfólio interativo
│   │   ├── Services.jsx      # Serviços com cards
│   │   └── Footer.jsx        # Rodapé
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Entrada da aplicação
│   └── index.css             # Estilos globais
├── public/
│   └── images/               # Imagens do site
├── package.json              # Dependências
├── vite.config.js            # Configuração Vite
└── tailwind.config.js        # Configuração Tailwind
```

## 🎨 Características

- ✨ **Parallax Dinâmico** - Efeito de profundidade ao rolar
- 🎯 **Portfólio Interativo** - Cards com hover effects
- 🛠️ **Serviços** - Apresentação elegante dos serviços
- 📱 **Responsivo** - Funciona em mobile, tablet e desktop
- ⚡ **Animações Suaves** - Framer Motion para transições fluidas
- 🎨 **Design Moderno** - Tailwind CSS com customizações

## 🔧 Comandos Disponíveis

```bash
# Rodar servidor de desenvolvimento
pnpm dev

# Fazer build para produção
pnpm build

# Visualizar build de produção
pnpm preview

# Verificar tipos TypeScript
pnpm check
```

## 📝 Notas

- O projeto usa **Vite** para desenvolvimento rápido
- **Framer Motion** para animações avançadas
- **Tailwind CSS 4** para estilização
- Componentes modulares e reutilizáveis

## 🤝 Suporte

Se encontrar problemas ao rodar:

1. Verifique se Node.js está instalado: `node --version`
2. Delete a pasta `node_modules` e execute `pnpm install` novamente
3. Limpe o cache: `pnpm store prune`
4. Reinicie o servidor: `pnpm dev`

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato.

---

**Desenvolvido com ❤️ para Estamparia Cataguases**
