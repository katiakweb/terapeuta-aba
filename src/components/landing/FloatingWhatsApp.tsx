import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551996433090?text=Olá! Gostaria de saber mais sobre a terapia ABA.";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse-gentle" />
      <span className="font-medium hidden sm:inline"></span>
    </a>
  );
};

export default FloatingWhatsApp;
