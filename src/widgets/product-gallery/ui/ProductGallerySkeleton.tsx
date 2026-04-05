import clsx from 'clsx';
import styles from './ProductGallery.module.css';

export const ProductGallerySkeleton = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides__wrapper}>
        <div className={styles.slides}>
          <div className={clsx(styles.slide, styles.skeleton)}></div>
          <div className={clsx(styles.slide, styles.skeleton)}></div>
          <div className={clsx(styles.slide, styles.skeleton)}></div>
          <div className={clsx(styles.slide, styles.skeleton)}></div>
        </div>
      </div>
    </div>
  )
}
