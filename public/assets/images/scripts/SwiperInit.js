import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const initSwiper = () => {
  new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 2 },
      1170: { slidesPerView: 3 }
    }
  });
};
