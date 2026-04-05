import type { ProductGalleryItem } from "../model/definitions"
import styles from './ProductGallery.module.css';

export const ProductGallerySlide = ({ product }: { product: ProductGalleryItem }) => {
  const {
    title,
    rating,
    price,
    thumbnail
  } = product;

  return (
    <article className={styles.slide}>
      <div className={styles.slide__imgWrapper}>
        <img className={styles.slide__img} alt={title} src={thumbnail} />
      </div>
      <div className={styles.slide__desc}>
        <p className={styles.slide__title}>{title}</p>
        <p className={styles.slide__rating}>Score: {rating}</p>
        <p className={styles.slide__price}>{price}</p>
      </div>
    </article>
  )
}