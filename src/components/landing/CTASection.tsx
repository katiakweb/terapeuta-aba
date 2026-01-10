import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551996433090?text=Olá! Gostaria de saber mais sobre a terapia ABA.";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl" />

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Infinity symbol */}
          <div className="mb-8 opacity-80">
            <svg width="60" height="30" viewBox="0 0 120 60" className="mx-auto">
              <path
                d="M30 30c0-16.569 13.431-25 30-25s30 8.431 30 25-13.431 25-30 25-30-8.431-30-25zm30-25c-16.569 0-30 8.431-30 25s13.431 25 30 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Vamos conversar sobre o desenvolvimento do seu filho?
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Estou aqui para ajudar. Entre em contato para uma conversa inicial 
            sem compromisso e tire todas as suas dúvidas.
          </p>

          {/* Main CTA */}
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-10"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Fale Comigo no WhatsApp
            </a>
          </Button>

          {/* Alternative contact */}
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>(51) 99643-3090</span>
            </a>
            <a
              href="mailto:contato@terapeutaaba.com.br"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span>kelen.eduneurolab@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
