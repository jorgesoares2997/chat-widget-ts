import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Message {
  id: number;
  text: string;
  timestamp: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Variantes para animação da caixa de chat
  const chatBoxVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
  };

  // Variantes para animação do botão (pulsar)
  const buttonVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Variantes para mensagens (fade-in)
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  // Scroll para a última mensagem sempre que messages mudar
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
        variants={chatBoxVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 w-80 h-[400px] bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.8)] overflow-hidden border border-purple-500/30"
      >
        {isOpen && (
          <>
            <div className="bg-purple-700 text-white p-3 flex justify-between items-center border-b border-purple-500/50">
              <h3 className="text-lg font-semibold text-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                Fenix
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-purple-300 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="flex-1 p-4 text-white bg-opacity-80 bg-purple-900/20 overflow-y-auto h-[calc(100%-120px)]">
              {messages.length === 0 ? (
                <p className="text-purple-200">
                  Digite uma mensagem para começar!
                </p>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                    transition={{ duration: 0.2 }}
                    className="mb-2 p-2 bg-purple-700/30 rounded-md border border-purple-500/20"
                  >
                    <p className="text-purple-100">{msg.text}</p>
                    <span className="text-xs text-purple-300">
                      {msg.timestamp}
                    </span>
                  </motion.div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-purple-800/50 border-t border-purple-500/50"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="w-full p-2 rounded-md bg-purple-900/70 border border-purple-500/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </form>
          </>
        )}
      </motion.div>
      <motion.button
        variants={buttonVariants}
        animate="animate"
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(139, 92, 246, 1)" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-full bg-purple-200 text-white flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300   overflow-hidden "
      >
        <img
          src="https://port-bu.s3.eu-north-1.amazonaws.com/fenix-chat.png"
          alt="Fenix"
          className="w-full h-full object-cover"
        />
      </motion.button>
    </div>
  );
};

export default ChatWidget;
