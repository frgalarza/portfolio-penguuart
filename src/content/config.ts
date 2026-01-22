import { defineCollection, z } from 'astro:content';

const comisiones = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    cliente: z.string(),
    // Definimos que puede haber múltiples imágenes (estáticas o gifs)
    emotes: z.array(z.object({
      archivo: image(), // Esto permite que Astro optimice la imagen
      animado: z.boolean().default(false),
      nombre: z.string().optional()
    })),
    destacada: image(), // La imagen que se verá en la grilla principal
  }),
});

export const collections = { comisiones };