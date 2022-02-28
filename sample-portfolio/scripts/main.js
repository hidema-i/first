document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper");
  //2秒スライド
  // hero.start({ delay: 2000 });
  hero.start();

  // setTimeout(() => {
  //   hero.stop();
  // }, 5000);
});
