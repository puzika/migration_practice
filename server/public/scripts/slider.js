const Slide = (slide) => {
  const {
    title,
    rating,
    price,
    thumbnail
  } = slide;

  return `
    <article class="slide">
      <div class="slide__img-wrapper">
        <img class="slide__img" alt="${title}" src="${thumbnail}" />
      </div>
      <div class="slide__desc">
        <p class="slide__title">${title}</p>
        <p class="slide__rating">Score: ${rating}</p>
        <p class="slide__price">${price}</p>
      </div>
    </article>
  `;
}

const Slider = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=10&select=title,price,thumbnail,rating');
  const data = await response.json();

  if (!data) return `<p>Failed to fetch data</p>`;

  const { products } = data;
  const slides = products.map(slide => Slide(slide)).join('');

  return `
    <div class="slider">
      <button class="slider__btn slider__btn--left">&larr;</button>
      <div class="slides__wrapper">
        <div data-slides="${products.length}" class="slides">
          ${slides}
        </div>
      </div>
      <button class="slider__btn slider__btn--right">&rarr;</button>
    </div>
  `;
}

const handleBtnLeftClick = (sliderState) => {
  const { currSlide } = sliderState;
  const slides = document.querySelector('.slides');
  const slidesCnt = Number(slides.dataset.slides);
  const targetSlide = currSlide > 0 ? currSlide - 1 : slidesCnt - 4;

  slides.style.translate = `calc(-${targetSlide} * ((100% - 3 * 2rem) / 4 + 2rem)) 0`;
  sliderState.currSlide = targetSlide;
}

const handleBtnRightClick = (sliderState) => {
  const { currSlide } = sliderState;
  const slides = document.querySelector('.slides');
  const slidesCnt = Number(slides.dataset.slides);
  const targetSlide = currSlide < slidesCnt - 4 ? currSlide + 1 : 0;

  slides.style.translate = `calc(-${targetSlide} * ((100% - 3 * 2rem) / 4 + 2rem)) 0`;
  sliderState.currSlide = targetSlide;
}

const initSlider = async () => {
  const slider = await Slider();
  document.body.insertAdjacentHTML('beforeend', slider);

  const leftBtn = document.querySelector('.slider__btn--left');
  const rightBtn = document.querySelector('.slider__btn--right');
  const sliderState = { currSlide: 0 };

  leftBtn.addEventListener('click', () => handleBtnLeftClick(sliderState));
  rightBtn.addEventListener('click', () => handleBtnRightClick(sliderState));
}

initSlider();