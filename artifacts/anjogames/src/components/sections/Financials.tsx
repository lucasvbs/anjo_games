import { motion } from 'framer-motion';
import { Search, FileCheck2, Scale, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/data/content';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function Financials() {
  const projectsWithDocs = PROJECTS.filter(p => p.documentUrl);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="transparencia">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-mono text-sm uppercase tracking-wider font-bold">Prestação de Contas</span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6">A regra do jogo é clareza.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Todo recurso recebido volta para o objeto social. Nossa associação civil (registrada desde 2014) não distribui excedentes entre associados ou diretores, conforme estatuto público.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-foreground/90 bg-secondary/30 p-3 rounded-xl border border-border/50">
                  <FileCheck2 className="h-5 w-5 text-primary shrink-0" />
                  <span>Prestação de contas anual (Art. 29 do estatuto)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground/90 bg-secondary/30 p-3 rounded-xl border border-border/50">
                  <Scale className="h-5 w-5 text-primary shrink-0" />
                  <span>Normas contábeis formais e certidões negativas</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground/90 bg-secondary/30 p-3 rounded-xl border border-border/50">
                  <Search className="h-5 w-5 text-primary shrink-0" />
                  <span>Parcerias formalizadas por termo de convênio ou contrato</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <FileCheck2 className="h-5 w-5 text-primary" /> Painel de Transparência
              </h3>
              
              <div className="space-y-8">
                {/* Available docs */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">Documentos Disponíveis</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectsWithDocs.map(project => (
                      <Dialog key={project.id}>
                        <DialogTrigger asChild>
                          <button className="text-left group flex items-start gap-4 p-4 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors">
                            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <Search className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                            </div>
                            <div>
                              <h5 className="font-bold group-hover:text-primary transition-colors">{project.title}</h5>
                              <p className="text-xs text-muted-foreground mt-1">Termo de Fomento / Transparência</p>
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl h-[90vh] p-1 bg-black/90 border-border flex items-center justify-center">
                          <DialogTitle className="sr-only">Documento de transparência de {project.title}</DialogTitle>
                          <div className="relative w-full h-full flex flex-col">
                            <div className="flex-1 overflow-auto flex items-center justify-center p-4">
                              <img 
                                src={project.documentUrl} 
                                alt={`Documento de Transparência - ${project.title}`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <div className="p-4 bg-background/80 backdrop-blur-sm border-t border-border flex justify-between items-center">
                              <span className="text-sm font-medium">{project.title} - Documento Oficial</span>
                              <Button asChild size="sm">
                                <a href={project.documentUrl} download target="_blank" rel="noreferrer">
                                  Baixar Arquivo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
