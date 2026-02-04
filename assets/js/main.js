(function(){
  const btn = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-navlinks]');
  const actions = document.querySelector('[data-actions]');
  if(btn && nav){
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      if(actions) actions.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }
})();
