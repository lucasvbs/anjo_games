import { useState } from 'react';
import { motion } from 'framer-motion';
import { Images } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

const GALLERY_IMAGES = Array.from({ length: 28 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `/images/gallery/${number}.jpg`;
});

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="border-y border-border bg-card py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <span className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-primary">
            <Images className="h-4 w-4" /> Acervo AnjoGames
          </span>
          <h2 className="mt-2 mb-6 text-3xl font-black md:text-5xl">
            Momentos que ficam.
          </h2>
          <p className="text-lg text-muted-foreground">
            Registros dos encontros, festivais e campeonatos que movimentam nossa comunidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.3) }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
              aria-label={`Ampliar foto ${index + 1}`}
            >
              <img
                src={image}
                alt={`Registro fotográfico AnjoGames ${index + 1}`}
                loading={index < 8 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent className="max-w-6xl border-border bg-black/95 p-2 sm:p-3">
          <DialogTitle className="sr-only">Visualização da galeria AnjoGames</DialogTitle>
          {selectedImage && (
            <div className="flex max-h-[82vh] items-center justify-center">
              <img
                src={selectedImage}
                alt="Registro fotográfico ampliado da AnjoGames"
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}