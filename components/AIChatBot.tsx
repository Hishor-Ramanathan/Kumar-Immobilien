import React, { useState, useRef, useEffect } from 'react';
import { generateRealEstateResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Icons } from '../constants';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Guten Tag! Willkommen bei Kumar Immobilien. Wie kann ich Ihnen heute helfen?', timestamp: Date.now() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Prepare simple history for context (last 4 messages)
      const historyStrings = messages.slice(-4).map(m => `${m.role === 'user' ? 'Kunde' : 'Assistent'}: ${m.text}`);
      const responseText = await generateRealEstateResponse(userMsg.text, historyStrings);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Entschuldigung, etwas ist schief gelaufen.', timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-dark text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Icons.Bot />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Assistent</h3>
                <p className="text-xs text-brand-light opacity-90">Online</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white hover:bg-white/10 p-1 rounded">
              <Icons.X />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-dark text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Frage stellen..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-light"
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputText.trim()}
              className="bg-brand-dark text-white p-2.5 rounded-full hover:bg-brand-light transition-colors disabled:opacity-50"
            >
              <Icons.Send />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="group flex items-center gap-3 bg-brand-dark hover:bg-brand-light text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className={`${isOpen ? 'hidden' : 'hidden md:block'} font-medium`}>Fragen? Chatten Sie mit uns!</span>
        <div className="relative">
          {isOpen ? <Icons.X /> : <Icons.Bot />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

export default AIChatBot;
