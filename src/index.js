import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  const href = this.getAttribute('href');
  if (href === '#' || href === '#!' || href.length < 2) return;

  const el = document.getElementById(decodeURIComponent(href.slice(1)));
  if (el) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(el).offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();
