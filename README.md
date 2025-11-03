Chatbot Moderno com React e API do Gemini
=========================================

Este projeto é um chatbot com uma interface moderna e limpa, construído com **React** (utilizando JavaScript) e integrado diretamente com a **API do Gemini do Google**. O chatbot é capaz de manter conversas e responder a perguntas com base em uma base de conhecimento local, fornecida através de um arquivo de texto simples.

<img width="655" height="749" alt="image" src="https://github.com/user-attachments/assets/d7200a44-4ebe-4dfe-964a-773db6a0dc50" />

Ele foi totalmente feito com ajuda de IA. Sendo pequenos ajustes realizados manualmente.

✨ Features
----------

*   **Interface Moderna:** Design limpo, profissional e responsivo, inspirado em aplicações de chat contemporâneas.
    
*   **Integração com IA:** Conectado diretamente à API do Gemini (gemini-pro) para geração de respostas inteligentes.
    
*   **Base de Conhecimento Local (RAG Simples):** O chatbot utiliza uma técnica de Geração Aumentada por Recuperação (RAG) simplificada, onde um contexto de um arquivo local (knowledgeBase.js) é injetado no prompt para forçar a IA a responder com base em informações específicas.
    
*   **Componentes em JavaScript:** Todo o código foi escrito em JavaScript (JSX) sem a necessidade de TypeScript.
    
*   **Feedback Visual:** Inclui um indicador de "digitando" para melhorar a experiência do usuário enquanto a API processa a resposta.
    

🚀 Tecnologias Utilizadas
-------------------------

*   [**React**](https://www.google.com/url?sa=E&q=https://react.dev/) - Biblioteca para construção da interface de usuário.
    
*   [**Node.js**](https://www.google.com/url?sa=E&q=https://nodejs.org/) - Ambiente de execução para o projeto.
    
*   [**Google Gemini API**](https://www.google.com/url?sa=E&q=https://ai.google.dev/) - Modelo de linguagem para a inteligência do chatbot.
    
*   **CSS** - Estilização customizada para o visual do chatbot.
    

⚙️ Como Funciona a Base de Conhecimento
---------------------------------------

Para garantir que o chatbot responda com base em informações específicas, utilizamos uma abordagem de _prompt engineering_:

1.  **Contexto Centralizado:** Todo o conhecimento relevante é armazenado como uma única string de texto no arquivo src/knowledgeBase.js.
    
2.  **Construção do Prompt:** Quando um usuário envia uma mensagem, em vez de enviar apenas a pergunta para a API, nós construímos um _prompt aumentado_.
    
3.  codeCode"Com base EXCLUSIVAMENTE no seguinte texto, responda à pergunta do usuário. Se a resposta não estiver no texto, diga 'Não encontrei essa informação na minha base de conhecimento.'--- Base de Conhecimento ---\[CONTEÚDO DO ARQUIVO KNOWLEDGEBASE.JS É INSERIDO AQUI\]-----------------------------Pergunta do Usuário: '\[PERGUNTA ORIGINAL DO USUÁRIO\]'"
    
4.  **Resposta Focada:** Esta técnica força o Gemini a priorizar o contexto fornecido, resultando em respostas mais precisas e evitando que ele "invente" informações.
    

🏁 Instalação e Execução
------------------------

Siga os passos abaixo para executar o projeto em sua máquina local.

### Pré-requisitos

*   [Node.js](https://www.google.com/url?sa=E&q=https://nodejs.org/en) (versão 18 ou superior)
    
*   npm ou yarn
    

### Passos

1.  Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
    
2.  Navegue até o diretório do projeto:

cd nome-do-repositorio
    
3. Instale as dependências:

   npm install
    
4.  Configure a Chave de API do Gemini:
    
    *   Abra o arquivo src/App.js.
        
    *   Encontre a linha que contém a constante GEMINI\_API\_KEY.
        
    *   Substitua "SUA\_CHAVE\_API\_AQUI" pela sua chave de API real do Google AI Studio.
  
      // Dentro de src/App.js
const GEMINI_API_KEY = "AIzaSy...SUA_CHAVE_AQUI"; // <-- COLOQUE SUA CHAVE AQUI
```    **⚠️ Importante:** Nunca suba sua chave de API para um repositório público. Se você planeja tornar este projeto público, use variáveis de ambiente (`.env`) para proteger sua chave.
        
5.  **Adicione sua Base de Conhecimento:**
    
    *   Abra o arquivo src/knowledgeBase.js.
        
    *   Substitua o conteúdo de exemplo pelo seu próprio texto.
        
6.  Inicie a aplicação

npm start
    

A aplicação será aberta automaticamente no seu navegador no endereço http://localhost:3000.

📂 Estrutura do Projeto
-----------------------

meu-chatbot/
├── public/
│   └── index.html
├── src/
│   ├── App.css           # Estilos principais do chatbot
│   ├── App.js            # Componente principal com toda a lógica
│   ├── index.js          # Ponto de entrada da aplicação React
│   └── knowledgeBase.js  # Arquivo com a base de conhecimento
├── package.json
└── README.md

🤝 Contribuição
---------------

Pull requests são bem-vindos. Para mudanças importantes, por favor, abra uma _issue_ primeiro para discutir o que você gostaria de mudar.

