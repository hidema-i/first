class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      //hoverの時グローブアイコン
      grabCursor: true,
      effect: "coverflow",
      //sliderを中央揃い
      centeredSlides: true,
      //Viewに何枚表示するか
      slidedPerView: 1,
      //transisonの速さ
      speed: 1000,
      //1024pxを超えた場合は2になる
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
    });
  }
  //4秒後に自動でスライド
  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
