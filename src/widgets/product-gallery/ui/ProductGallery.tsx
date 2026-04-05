import { getGalleryProducts } from "../api/gallery";
import { Suspense } from "react";
import { ProductGallerySkeleton } from "./ProductGallerySkeleton";
import { ProductGallerySlider } from "./ProductGallerySlider";

export const ProductGalleryContent = async () => {
  const galleryProducts = await getGalleryProducts();

  return (
    galleryProducts.status === 'failed' ? (
      <i style={{ color: "red" }}>{ galleryProducts.message }</i>
    ) : (
      <ProductGallerySlider products={galleryProducts.result} />
    )
  )
}

export const ProductGallery = async () => {
  return (
    <Suspense fallback={<ProductGallerySkeleton />}>
      <ProductGalleryContent />
    </Suspense>
  )
}