Chatbot Moderno com React e Google Gemini API
Este projeto consiste em um chatbot com interface moderna, construído com React.js e integrado à API do Google Gemini. O chatbot é capaz de responder a perguntas com base em uma base de conhecimento local, tornando-o um assistente especialista no conteúdo fornecido.
![alt text](URL_DA_SUA_IMAGEM_AQUI)

(Dica: Tire um print da tela do seu chatbot funcionando, adicione ao seu repositório e substitua a URL acima pelo caminho da imagem)
✨ Funcionalidades
Interface Moderna: Design limpo e responsivo, inspirado em aplicações de chat contemporâneas.
Integração com IA: Conectado diretamente à poderosa API do Google Gemini para geração de respostas.
Base de Conhecimento Local (RAG Simples): As respostas são baseadas em um conjunto de documentos fornecidos localmente (knowledgeBase.js), garantindo que o chatbot seja um especialista no seu conteúdo.
Feedback Visual: Inclui um indicador de "digitando" enquanto a resposta da API está sendo processada.
Scroll Automático: A janela de chat rola automaticamente para a mensagem mais recente.
🚀 Tecnologias Utilizadas
Frontend:
React.js
JavaScript (ES6+)
CSS3 para estilização
API:
Google Gemini API
⚙️ Configuração e Instalação
Siga os passos abaixo para rodar o projeto em sua máquina local.
Pré-requisitos
Node.js (versão 14 ou superior)
npm ou yarn
Uma chave de API do Google Gemini (você pode obter uma no Google AI Studio)
Passos
Clone o repositório:
code
Bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
Navegue até a pasta do projeto:
code
Bash
cd nome-do-repositorio
Instale as dependências:
code
Bash
npm install
Configure a Chave de API:
Abra o arquivo src/App.js.
Localize a constante GEMINI_API_KEY.
Substitua "SUA_CHAVE_API_AQUI" pela sua chave de API real do Google Gemini.
code
JavaScript
// Dentro de src/App.js
const GEMINI_API_KEY = "AIzaSy...SuaChaveCompletaAqui";
IMPORTANTE: Por segurança, não suba sua chave de API para repositórios públicos. Para projetos em produção, o ideal é usar variáveis de ambiente.
Adicione sua Base de Conhecimento:
Abra o arquivo src/knowledgeBase.js.
Substitua o conteúdo de exemplo pela sua própria base de conhecimento em texto. Este será o "cérebro" do seu chatbot.
Inicie a aplicação:
code
Bash
npm start
A aplicação será aberta automaticamente no seu navegador no endereço http://localhost:3000.
🧠 Como Funciona a Base de Conhecimento
Este projeto utiliza uma abordagem simples de RAG (Retrieval-Augmented Generation).
O conteúdo completo do arquivo src/knowledgeBase.js é carregado.
Quando o usuário envia uma pergunta, em vez de enviá-la diretamente para o Gemini, nós criamos um "prompt" aprimorado.
Este prompt instrui o Gemini a responder à pergunta do usuário usando exclusivamente o texto da base de conhecimento que fornecemos junto com a pergunta.
Isso garante que as respostas sejam factuais e limitadas ao escopo do seu conteúdo, transformando o chatbot em um especialista no assunto.
🔮 Próximos Passos (Evolução do Projeto)
A arquitetura atual é excelente para protótipos e bases de conhecimento pequenas. O próximo passo para escalar este projeto seria implementar uma arquitetura RAG completa com um backend, que envolve:
Indexação de Documentos: Quebrar os documentos em pedaços (chunks).
Embeddings: Gerar vetores de embeddings para cada pedaço.
Banco de Dados Vetorial: Armazenar os chunks e seus vetores para permitir buscas de similaridade semântica.
Backend: Um servidor para gerenciar as buscas na base vetorial e se comunicar com a API do Gemini de forma segura.
📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
