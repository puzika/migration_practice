'use client';

import { useState } from 'react';
import { ProductGallerySlide } from './ProductGalleryItem';
import { type ProductGallery } from '../model/definitions';
import styles from './ProductGallery.module.css';
import clsx from 'clsx';

type ProductGallerySliderProps = {
  products: ProductGallery,
}

export const ProductGallerySlider = ({ products }: ProductGallerySliderProps) => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const slidesCnt = products.length;

  const handleClickLeft = () => {
    const targetSlide = currSlide > 0 ? currSlide - 1 : slidesCnt - 4;
    setCurrSlide(targetSlide);
  }

  const handleClickRight = () => {
    const targetSlide = currSlide < slidesCnt - 4 ? currSlide + 1 : 0;
    setCurrSlide(targetSlide);
  }

  return (
    <div className={styles.slider}>
      <button onClick={handleClickLeft} className={clsx(styles.slider__btn, styles.slider__btnLeft)}>&larr;</button>
      <div className={styles.slides__wrapper}>
        <div style={{ translate: `calc(-${currSlide} * ((100% - 3 * 2rem) / 4 + 2rem)) 0`}} className={styles.slides}>
          {
            products.map(p => (
              <ProductGallerySlide key={p.id} product={p} />
            ))
          }
        </div>
      </div>
      <button onClick={handleClickRight} className={clsx(styles.slider__btn, styles.slider__btnRight)}>&rarr;</button>
    </div>
  )
}