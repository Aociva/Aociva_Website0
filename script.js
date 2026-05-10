const heroArt = document.querySelector(".hero-art");
const heroVeil = document.querySelector(".hero-veil");
const brand = document.querySelector(".brand-lockup");

function updateHeroFade() {
  const progress = Math.min(window.scrollY / (window.innerHeight * 0.92), 1);
  const fade = 1 - progress;

  if (heroArt) {
    heroArt.style.opacity = String(Math.max(0, fade));
    heroArt.style.filter = `saturate(${0.62 - progress * 0.2}) contrast(${1.18 - progress * 0.1}) brightness(${0.72 + progress * 0.36}) blur(${progress * 10}px)`;
    heroArt.style.transform = `scale(${1.04 + progress * 0.04}) translateY(${progress * -18}px)`;
  }

  if (heroVeil) {
    heroVeil.style.opacity = String(0.9 - progress * 0.28);
  }

  if (brand) {
    brand.style.transform = `translateY(${progress * -28}px)`;
    brand.style.opacity = String(1 - progress * 0.7);
  }
}

updateHeroFade();
window.addEventListener("scroll", updateHeroFade, { passive: true });
