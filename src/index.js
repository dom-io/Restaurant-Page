import { initialPageLoadHome } from './home';
import { pageLoadMenu } from './menu';
import { pageLoadContact } from './contact';

initialPageLoadHome();

const tabSwitch = (function () {
  const hBtn = document.querySelector('.home-btn');
  hBtn.addEventListener('click', initialPageLoadHome);

  const mBtn = document.querySelector('.menu-btn');
  mBtn.addEventListener('click', pageLoadMenu);

  const cBtn = document.querySelector('.contact-btn');
  cBtn.addEventListener('click', pageLoadContact);
})();
