import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Minimize2 } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={toggleChat}
            size="lg"
            className="rounded-full w-16 h-16 bg-gradient-tech hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          <div className="bg-background border border-border rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-tech text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-sm">Asistente IA</h3>
                  <p className="text-xs text-blue-100">¿En qué podemos ayudarte?</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={minimizeChat}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <div className="h-[calc(600px-80px)]">
                <iframe
                  src="https://app.n8n-tech.cloud/webhook/80032670-58d5-4d08-a1cf-4d1c7aaeca75/chat"
                  className="w-full h-full border-0"
                  title="Chat Assistant"
                  allow="microphone; camera"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;