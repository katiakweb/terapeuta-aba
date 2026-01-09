import { Brain, Users, ClipboardCheck, School } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Terapia ABA Individual",
    description:
      "Sessões personalizadas focadas nas necessidades específicas de cada criança, promovendo desenvolvimento comportamental e cognitivo.",
  },
  {
    icon: Users,
    title: "Orientação Parental",
    description:
      "Capacitação para pais e cuidadores aplicarem estratégias terapêuticas no dia a dia, fortalecendo o vínculo familiar.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Comportamental",
    description:
      "Avaliação completa para identificar habilidades, desafios e criar um plano de intervenção individualizado.",
  },
  {
    icon: School,
    title: "Suporte Escolar",
    description:
      "Orientação para escolas e educadores sobre inclusão e estratégias para apoiar alunos neurodivergentes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Como posso <span className="gradient-text">ajudar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofereço diferentes modalidades de atendimento para atender às necessidades 
            de cada família e criança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-lg gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
