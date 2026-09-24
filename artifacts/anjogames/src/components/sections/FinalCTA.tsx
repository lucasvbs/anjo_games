import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/data/content';
import { Heart, Briefcase, Users, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Dynamic background element */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black rounded-full mix-blend-overlay blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Cada projeto só existe porque alguém decidiu apoiar antes de acontecer.
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
              A AnjoGames não promete "mudar o mundo" — ela mostra, projeto por projeto, que e-sport forma cidadão. Você pode ser a pessoa que faz a próxima edição sair do papel hoje.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            <ContactDialog 
              trigger={
                <Button size="lg" variant="secondary" className="w-full h-16 text-base font-bold rounded-2xl group border-2 border-transparent hover:border-black/10">
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Quero apoiar
                </Button>
              }
              title="Apoie os Projetos"
              description="Vamos conversar sobre como sua doação pode impulsionar as próximas iniciativas."
            />
            
            <ContactDialog 
              trigger={
                <Button size="lg" variant="secondary" className="w-full h-16 text-base font-bold rounded-2xl group border-2 border-transparent hover:border-black/10">
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Levar minha marca
                </Button>
              }
              title="Patrocínio PJ"
              description="Apoie com sua empresa e receba o Mídia Kit dos nossos projetos."
            />
            
            <ContactDialog 
              trigger={
                <Button size="lg" variant="secondary" className="w-full h-16 text-base font-bold rounded-2xl group border-2 border-transparent hover:border-black/10">
                  <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Ser voluntário
                </Button>
              }
              title="Voluntariado"
              description="Ofereça seu tempo e habilidades. Precisamos de pessoas engajadas."
            />
            
            <ContactDialog 
              trigger={
                <Button size="lg" className="w-full h-16 text-base font-bold rounded-2xl bg-black text-white hover:bg-black/80 group">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Falar por e-mail
                </Button>
              }
              title="Fale com a Equipe"
              description="Tire suas dúvidas diretamente com quem faz os projetos acontecerem."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactDialog({ 
  trigger, 
  title, 
  description
}: { 
  trigger: React.ReactNode, 
  title: string, 
  description: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card text-card-foreground border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{title}</DialogTitle>
          <DialogDescription className="text-base mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-6 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Fale diretamente com nossa equipe pelo e-mail {CONFIG.email}.
          </p>
          <Button asChild size="lg" className="w-full font-bold h-14">
            <a href={`mailto:${CONFIG.email}`}>Enviar e-mail</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
