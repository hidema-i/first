document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this.sides = document.querySelectorAll(".side");
    this._observers = [];
    this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    Pace.on("done", this._paceDone.bind(this));
    // this._scrollInit();
  }
  _paceDone() {
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    //画面に入ったらinviewというクラスを付与
    if (inview) {
      el.classList.add("inview");
      //抜けたら削除する
    } else {
      el.classList.remove("inview");
    }
  }

  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove("triggered");
      //抜けたら削除する
    } else {
      this.header.classList.add("triggered");
    }
  }

  _sideAnimation(el, inview) {
    if (inview) {
      this.sides.forEach((side) => side.classList.add("inview"));
      //抜けたら削除する
    } else {
      this.sides.forEach((side) => side.classList.remove("inview"));
    }
  }

  _textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
      //抜けたら削除する
    } else {
      this.hero.stop();
    }
  }

  _destroyObservers() {
    this.observers.forEach((object) => {
      object.destroy();
    });
  }

  destroy() {
    this._destroyObservers();
  }

  _scrollInit() {
    this.observers = new ScrollObserver(
      ".nav-trigger",
      this._navAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
    this.observers = new ScrollObserver(".appearance", this._inviewAnimation);
    this.observers = new ScrollObserver(
      ".tween-animate-title",
      this._textAnimation
    );
    this.observers = new ScrollObserver(
      ".swiper-container",
      this._toggleSlideAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(
      "#main-content",
      this._sideAnimation.bind(this),
      { once: false, rootMargin: "-300px 0px" }
    );
  }
}
