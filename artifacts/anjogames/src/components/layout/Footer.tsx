import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { CONFIG } from '@/data/content';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function Footer() {
  const year = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/images/angelGames_logo-03_1789946604574.png" 
                alt="AnjoGames Logo" 
                className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm text-balance">
              Associação sem fins lucrativos que transforma paixão por games em cidadania, cultura e oportunidades para jovens em todo o Brasil. Registrada desde 2014.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-bold text-foreground text-lg">Links Úteis</h4>
            <nav className="flex flex-col gap-3">
              <a href="#projetos" onClick={(e) => handleScrollTo(e, '#projetos')} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center w-max">
                Projetos
              </a>
              <a href="#transparencia" onClick={(e) => handleScrollTo(e, '#transparencia')} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center w-max">
                Transparência
              </a>
              <a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center w-max">
                Dúvidas Frequentes
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-bold text-foreground text-lg">Contato</h4>
            <nav className="flex flex-col gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 w-max">
                    WhatsApp <ArrowUpRight className="h-3 w-3" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">WhatsApp</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground">Canal de contato em atualização. Retorne em breve.</p>
                  </div>
                </DialogContent>
              </Dialog>
              <a href={`mailto:${CONFIG.email}`} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 w-max">
                {CONFIG.email} <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href={CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 w-max">
                Instagram <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 w-max">
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} ANJOGAMES. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="cursor-help" title="Em breve">Política de Privacidade</span>
            <span className="text-border">|</span>
            <span className="cursor-help" title="Sede em Taguatinga/DF">Taguatinga / DF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
