import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import horizontalLogo from '@/assets/canta-cerrado-horizontal.svg';
import verticalLogo from '@/assets/canta-cerrado-vertical.svg';

const links = [
  {
    label: 'EDITAL DE CHAMAMENTO PÚBLICO Nº 01/2026',
    href: 'https://drive.google.com/file/d/1FgpjbJpKM5q77WankGEFuuI5oYfxHZYb/view',
  },
  {
    label: 'Formulário de inscrição de expositores',
    href: 'https://forms.gle/nMYo9mogUmE91it36',
  },
];

export function CantaCerrado() {
  return (
    <section
      aria-labelledby="canta-cerrado-heading"
      className="border-y border-border bg-card/40 py-16 md:py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-background/80 px-4 py-8 shadow-xl shadow-black/20 sm:px-8 md:px-12 md:py-12">
          <h2 id="canta-cerrado-heading" className="sr-only">
            Canta Cerrado
          </h2>

          <picture className="mx-auto mb-8 block w-full">
            <source media="(max-width: 639px)" srcSet={verticalLogo} />
            <img
              src={horizontalLogo}
              alt="Logo do projeto Canta Cerrado"
              className="mx-auto block h-64 w-full max-w-[760px] object-contain sm:h-auto sm:max-h-72"
              loading="lazy"
              decoding="async"
            />
          </picture>

          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Button
                key={link.href}
                asChild
                variant="outline"
                size="lg"
                className="h-auto min-h-16 w-full justify-between gap-3 whitespace-normal rounded-xl border-primary/40 bg-background/50 px-5 py-4 text-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <span className="whitespace-normal text-left leading-snug">
                    {link.label}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    focusable="false"
                    className="h-4 w-4 shrink-0"
                  />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}