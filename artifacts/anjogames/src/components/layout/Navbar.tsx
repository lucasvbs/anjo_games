import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/data/content';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const PORTAL_URL = 'https://portalanjogames.bubbleapps.io/version-test';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projetos', href: '#projetos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Transparência', href: '#transparencia' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <img 
            src="/images/angelGames_logo-03_1789946604574.png" 
            alt="AnjoGames Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Portal Online em uma nova aba"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Portal Online <ArrowUpRight className="h-4 w-4" />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full font-bold px-6">
                Fale conosco <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-card border-border">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">Fale Conosco</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-muted-foreground">Canal de contato em atualização. Retorne em breve para falar com nossa equipe.</p>
              </div>
              <Button disabled className="w-full font-bold bg-primary/50 text-primary-foreground opacity-100 cursor-not-allowed">
                Em atualização
              </Button>
            </DialogContent>
          </Dialog>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card/95 backdrop-blur-xl border-l-border flex flex-col justify-between pt-16">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleScrollTo(e, link.href);
                      // the Sheet will close automatically on most implementations, or we rely on user scroll
                    }}
                    className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Portal Online em uma nova aba"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/60 px-5 py-3 text-lg font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Portal Online <ArrowUpRight className="h-5 w-5" />
                </a>
              </nav>
              <div className="pb-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full rounded-full font-bold">
                      Fale conosco <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif">Fale Conosco</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-muted-foreground">Canal de contato em atualização. Retorne em breve para falar com nossa equipe.</p>
                    </div>
                    <Button disabled className="w-full font-bold bg-primary/50 text-primary-foreground opacity-100 cursor-not-allowed">
                      Em atualização
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
