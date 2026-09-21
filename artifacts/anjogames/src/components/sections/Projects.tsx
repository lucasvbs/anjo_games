import { motion } from 'framer-motion';
import { PROJECTS, type Project } from '@/data/content';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  return (
    <section className="py-24 bg-card border-y border-border" id="projetos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-sm uppercase tracking-wider font-bold">Na Prática</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6">Projetos que transformam.</h2>
            <p className="text-lg text-muted-foreground">
              Você entra pra história de projetos reais, não só assiste de fora. Conheça as iniciativas que seu apoio torna possível.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-background rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.image} 
          alt="Registro do acervo AnjoGames" 
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              project.isLogo ? 'object-contain p-4 bg-background' : 'object-cover'
            }`}
        />
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm hover:bg-background/90 text-foreground font-medium">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground flex-grow mb-6">
          {project.description}
        </p>

        <ProjectDetailsDialog project={project} />
      </div>
    </motion.div>
  );
}

function ProjectDetailsDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full rounded-xl justify-between group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
          Ver detalhes <ExternalLink className="h-4 w-4 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden gap-0">
        <div className="h-64 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img
            src={project.image}
            alt="Registro do acervo AnjoGames"
            className={`w-full h-full ${
              project.isLogo ? 'object-contain p-6 bg-background' : 'object-cover'
            }`}
          />
          <Badge className="absolute top-6 left-6 z-20 bg-primary text-primary-foreground pointer-events-none">
            {project.tags[0]}
          </Badge>
        </div>
        
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-black mb-2">{project.title}</DialogTitle>
            <DialogDescription className="text-base text-foreground/80 leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              Transparência do Projeto
            </h4>
            
            {project.documentUrl ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Acesse os documentos de prestação de contas, termos de fomento ou relatórios de impacto deste projeto.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="gap-2">
                        <Eye className="h-4 w-4" /> Visualizar Documento
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl h-[90vh] p-1 bg-black/90 border-border flex items-center justify-center">
                      <DialogTitle className="sr-only">Visualização do documento de {project.title}</DialogTitle>
                      <div className="relative w-full h-full flex flex-col">
                        <div className="flex justify-end p-4 absolute top-0 right-0 z-50">
                          {/* Close button is provided by DialogContent, we just need the image area */}
                        </div>
                        <div className="flex-1 overflow-auto flex items-center justify-center p-4">
                          <img 
                            src={project.documentUrl} 
                            alt={`Documento de Transparência - ${project.title}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-4 bg-background/80 backdrop-blur-sm border-t border-border flex justify-between items-center">
                          <span className="text-sm font-medium">Documento Oficial</span>
                          <Button asChild size="sm">
                            <a href={project.documentUrl} download target="_blank" rel="noreferrer">
                              <Download className="h-4 w-4 mr-2" /> Baixar
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button asChild variant="outline" className="gap-2">
                    <a href={project.documentUrl} download target="_blank" rel="noreferrer">
                      <Download className="h-4 w-4" /> Baixar PDF/Imagem
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground text-sm">
                  Documento ainda não disponibilizado.
                </p>
                <p className="text-xs text-muted-foreground/60 mt-2">
                  (Disponibilização conforme Art. 29 do estatuto)
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
