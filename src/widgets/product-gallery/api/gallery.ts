import { productGallerySchema, type ProductGallery } from "../model/definitions"
import { type RequestResult } from "../../../shared/model/definitions";

export const getGalleryProducts = async (): Promise<RequestResult<ProductGallery>> => {
  const response = await fetch('https://dummyjson.com/products?limit=10&select=title,price,thumbnail,rating');

  if (!response.ok) return { 
    status: 'failed', 
    message: `Request failed with status code: ${response.status}` 
  };

  const data = await response.json();
  const validatedData = productGallerySchema.safeParse(data);

  if (!validatedData.success) return {
    status: 'failed',
    message: "Response structure mismatch",
  }

  return {
    status: 'success',
    result: validatedData.data.products,
  }
}