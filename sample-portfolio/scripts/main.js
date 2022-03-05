document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  hero.start();

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".tween-animate-title", cb);

  const _inviewAnimation = function (el, inview) {
    //画面に入ったらinviewというクラスを付与
    if (inview) {
      el.classList.add("inview");
      //抜けたら削除する
    } else {
      el.classList.remove("inview");
    }
  };

  const so2 = new ScrollObserver(".cover-slide", _inviewAnimation);
});
