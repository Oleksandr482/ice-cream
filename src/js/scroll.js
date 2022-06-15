const refs = {
    body: document.querySelector('body'),
    menu: document.querySelector('.mob-menu'),
    smoothLinks: document.querySelectorAll('a[href^="#"]'),
  };
  for (let smoothLink of refs.smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      if (window.screen.width <= 768) {
        refs.body.classList.toggle('no-scroll');
        refs.menu.classList.toggle('visually-hidden');
      }
    });
  }