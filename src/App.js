import React, { useState, useEffect, useRef } from "react";
import { knowledge } from "./knowledgeBase.js";
import "./App.css";

// Ícone do Avatar do Bot (Componente SVG)
const BotAvatar = () => (
  <div className="avatar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 12c.83 0 1.5-.67 1.5-1.5S9.33 9 8.5 9 7 9.67 7 10.5 7.67 12 8.5 12zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 9 15.5 9s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-4.03 3.47c.59.59 1.54.59 2.12 0l.71-.71c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-.71.71c-.2.2-.51.2-.71 0l-.71-.71c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l.71.71z" />
    </svg>
  </div>
);

// Componente para cada mensagem na conversa
const Message = ({ text, sender }) => (
  <div className={`message-wrapper ${sender}`}>
    {sender === "bot" && <BotAvatar />}
    <div className={`message ${sender}`}>
      <div className="message-bubble">{text}</div>
    </div>
  </div>
);

function App() {
  const [messages, setMessages] = useState([
    { text: "Meu nome é Maria. Como posso te ajudar hoje?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Sua chave de API do Gemini
  const GEMINI_API_KEY = "AIzaSyBljn7WmxQMwtzTy3lWVx1UIkq1J-WhBEU";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "" || isLoading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    // --- CRIAÇÃO DO PROMPT AUMENTADO ---
    const prompt = `Com base EXCLUSIVAMENTE no seguinte texto, responda à pergunta do usuário. Se a resposta não estiver no texto, diga "Não encontrei essa informação na minha base de conhecimento.". Inicie a resposta sem informar que a resposta foi baseada na base de conhecimento.

    --- Base de Conhecimento ---
    ${knowledge}
    -----------------------------

    Pergunta do Usuário: "${currentInput}"
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }], // <-- USAMOS O NOVO PROMPT
            // ... (generationConfig pode continuar aqui)
          }),
        }
      );

      if (!response.ok) {
        // ... (resto do tratamento de erro continua igual)
        const errorData = await response.json();
        throw new Error(
          errorData?.error?.message || "Falha na resposta da API."
        );
      }

      const data = await response.json();
      const botResponse = data.candidates[0]?.content?.parts[0]?.text;

      if (!botResponse) {
        throw new Error("Formato de resposta inesperado da API.");
      }

      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Erro ao chamar a API do Gemini:", error);
      const errorMessage = {
        text: `Desculpe, ocorreu um erro: ${error.message}.`,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Chatbot com IA</h2>
        <span>
          Envie sua dúvida e seja respondido na hora! Estamos online 24/7!
        </span>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        {isLoading && (
          <div className="message-wrapper bot">
            <BotAvatar />
            <div className="message bot">
              <div className="message-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
