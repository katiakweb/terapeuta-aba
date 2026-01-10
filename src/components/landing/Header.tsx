import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551996433090?text=Olá! Gostaria de saber mais sobre a terapia ABA.";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-favicon flex items-center justify-center">
              <span className="text-white font-bold text-sm">♾️</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              EduNeuroLab
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </a>
          </nav>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Contato</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
      <!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://matomo.oguru.dev/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
    </header>
  );
};

export default Header;
