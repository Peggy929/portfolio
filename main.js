function smoothScale() {
  // full-bg-hero
  const hero = document.querySelector('.full-bg-hero,.full-bg-heroOri');
  if (hero) {
    const rect = hero.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let percent = 1;
    if(rect.top < windowHeight && rect.bottom > 0) {
      percent = 1 + Math.min(0.25, (windowHeight - rect.top) / windowHeight * 0.25);
    }
    hero.style.backgroundSize = (percent * 100) + '%';
  }

  // case-hero img
  const caseHeroImg = document.querySelector('.case-hero img');
  if (caseHeroImg) {
    const rect = caseHeroImg.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let scale = 1;
    if(rect.top < windowHeight && rect.bottom > 0) {
      scale = 1 + Math.min(0.25, (windowHeight - rect.top) / windowHeight * 0.25);
    }
    caseHeroImg.style.transform = `scale(${scale})`;
  }

  requestAnimationFrame(smoothScale);
}
smoothScale();