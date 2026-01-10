import { Heart, Award, Users } from "lucide-react";
import terapeutaImg from "@/public/kelk.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
              {/* Placeholder for therapist photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foto da terapeuta
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/20 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Sobre mim
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Olá, me chamo <span className="gradient-text">Kelen Korndörfer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou terapeuta ABA especializada em crianças neurodivergentes, incluindo autismo, 
              TDAH e outras condições do neurodesenvolvimento. Minha missão é criar um ambiente 
              acolhedor onde cada criança possa desenvolver suas habilidades de forma respeitosa 
              e individualizada.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Acredito que cada criança é única e merece um plano terapêutico personalizado 
              que respeite suas necessidades, interesses e forma de aprender. Trabalho em 
              parceria com as famílias para garantir que os benefícios da terapia se estendam 
              ao dia a dia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Base científica</div>
                <div className="text-xs text-muted-foreground">Análise do Comportamento</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Cuidado individual</div>
                <div className="text-xs text-muted-foreground">Cada criança é única</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Trabalho em parceria</div>
                <div className="text-xs text-muted-foreground">Família e terapeuta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
