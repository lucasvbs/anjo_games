import { motion } from 'framer-motion';
import { Target, CheckCircle2, ShieldCheck, Trophy, HeartHandshake, Zap } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden" id="sobre">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-balance">
              Enquanto muita gente ainda pergunta se e-sport é "coisa séria"...
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
              A ANJOGAMES já responde isso desde 2014: com campeonatos, festivais e projetos sociais registrados, organizados e prestando contas de verdade. Não é só torneio. <strong className="text-foreground font-semibold">É formação, inclusão e novas oportunidades para quem mais precisa — usando o jogo como ponte, não como fuga.</strong>
            </p>
          </motion.div>
        </div>

        {/* The Pain */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-primary font-mono text-sm uppercase tracking-wider font-bold">O Problema</span>
              <h3 className="text-3xl md:text-4xl font-black mt-2 mb-6">Muita gente quer apoiar, mas trava antes de agir.</h3>
            </div>
            
            <ul className="space-y-6">
              {[
                "Você já doou pra alguma causa e nunca soube pra onde foi o dinheiro?",
                "Sua empresa quer se aproximar do público jovem, mas não sabe como fazer isso sem parecer oportunista?",
                "Acha que e-sport é só hobby e não enxerga a transformação social real?",
                "Quer ser voluntário, mas tem medo de virar só um nome numa planilha abandonada?",
                "Você joga, mas nunca teve uma porta de entrada pra competir de forma séria?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                  <div className="mt-1 bg-background p-2 rounded-full border border-border shrink-0">
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="/images/evento-0.jpg" 
                alt="Impacto Social" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-md border border-border p-6 rounded-2xl">
                <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  O Modelo AnjoGames
                </h4>
                <p className="text-sm text-muted-foreground">
                  Cada campeonato ou festival é desenhado para gerar impacto social mensurável — direitos humanos, cidadania, cultura, saúde, educação e oportunidades.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Apoio que vira realidade</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nossa estrutura formal garante que toda contribuição se transforme em oportunidades concretas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={<Zap className="h-6 w-6" />}
              title="Ação, não só intenção"
              description="Seu apoio financeiro vira campeonato, festival ou projeto de verdade — não fica parado numa conta bancária."
            />
            <BenefitCard 
              icon={<Trophy className="h-6 w-6" />}
              title="Posicionamento autêntico"
              description="Sua marca aparece exatamente onde o público jovem e gamer já está prestando atenção, com legitimidade."
            />
            <BenefitCard 
              icon={<HeartHandshake className="h-6 w-6" />}
              title="Voluntariado com propósito"
              description="Seu tempo vira oportunidade real na vida de um jovem — não é apenas uma tarde 'de boa ação'."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border p-8 rounded-3xl hover-lift"
    >
      <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
