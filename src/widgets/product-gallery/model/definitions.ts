import z from "zod";

const productGalleryItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  rating: z.number(),
  price: z.number(),
  thumbnail: z.string(),
});

export const productGallerySchema = z.object({
  products: z.array(productGalleryItemSchema),
});

export type ProductGalleryItem = z.infer<typeof productGalleryItemSchema>;
export type ProductGallery = z.infer<typeof productGallerySchema>["products"];