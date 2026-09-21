import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/data/content';
import { Heart, Briefcase, Users, ArrowRight, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 md:bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.15)_0%,transparent_70%)] z-10" />
        <img 
          src="/images/evento-11.jpg" 
          alt="Evento AnjoGames" 
          className="w-full h-full object-cover object-center mix-blend-overlay"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div variants={item} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Associação registrada desde 2014 • Prestação de contas pública
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 text-balance leading-[1.1]">
            Aqui, o e-sport também <span className="text-primary italic pr-2">forma cidadãos</span>.
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl text-balance">
            A ANJOGAMES é uma associação sem fins lucrativos que transforma paixão por games em cidadania, cultura, renda e oportunidade para jovens em todo o Brasil.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Apoiar */}
            <ContactDialog 
              trigger={
                <Button size="lg" className="w-full sm:w-auto rounded-full font-bold text-base h-14 px-8 group">
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Quero apoiar
                </Button>
              }
              title="Faça parte da mudança"
              description="Sua contribuição financeira vira campeonato, festival e projeto de verdade. Não fica parada numa conta."
              actionText="Falar sobre doação no WhatsApp"
              whatsappMessage="Olá! Gostaria de entender como posso apoiar financeiramente os projetos da AnjoGames."
            />

            {/* Patrocinar */}
            <ContactDialog 
              trigger={
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full font-bold text-base h-14 px-8 bg-background/50 backdrop-blur-sm hover:bg-white hover:text-black border-border group transition-all">
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Quero patrocinar
                </Button>
              }
              title="Leve sua marca para este universo"
              description="Associe sua empresa a projetos reais e de impacto. Temos pacotes de cotas para eventos como o Capital Game Show 2026."
              actionText="Solicitar Mídia Kit"
              whatsappMessage="Olá! Tenho interesse em patrocinar os eventos da AnjoGames e gostaria de receber o Mídia Kit."
            />

            {/* Voluntariado */}
            <ContactDialog 
              trigger={
                <Button variant="ghost" size="lg" className="w-full sm:w-auto rounded-full font-bold text-base h-14 px-8 hover:bg-secondary group transition-all">
                  <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Ser voluntário
                </Button>
              }
              title="Coloque a mão na massa"
              description="Seu tempo vira oportunidade real na vida de um jovem. Buscamos perfis de todas as áreas, não precisa ser gamer."
              actionText="Quero me cadastrar"
              whatsappMessage="Olá! Gostaria de saber mais sobre como posso atuar como voluntário na AnjoGames."
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Descubra</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}

function ContactDialog({ 
  trigger, 
  title, 
  description, 
  actionText, 
  whatsappMessage 
}: { 
  trigger: React.ReactNode, 
  title: string, 
  description: string, 
  actionText: string,
  whatsappMessage: string
}) {
  const wpUrl = `${CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{title}</DialogTitle>
          <DialogDescription className="text-base mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-6 flex flex-col gap-4">
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <Info className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>Canal de contato em atualização. Retorne em breve para falar com nossa equipe.</span>
            </p>
          </div>
          <Button disabled size="lg" className="w-full font-bold h-14 bg-primary/50 text-primary-foreground opacity-100 cursor-not-allowed">
            Em atualização
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
