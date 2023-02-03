export function pageLoadContact() {
  const content = document.getElementById('content');

  content.replaceChildren();

  const homeHeading = document.createElement('h1');
  homeHeading.textContent = 'Welcome to La Festa de Tori!';
  homeHeading.classList.add('home-heading');
  content.appendChild(homeHeading);

  const imageBg = document.createElement('img');
  imageBg.src = '../src/images/bull.png';
  imageBg.classList.add('image-bg');
  content.appendChild(imageBg);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  content.appendChild(btnContainer);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.classList.add('home-btn');
  homeBtn.type = 'button';
  btnContainer.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.classList.add('menu-btn');
  menuBtn.type = 'button';
  btnContainer.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.classList.add('contact-btn');
  contactBtn.type = 'button';
  btnContainer.appendChild(contactBtn);

  const contactHead = document.createElement('h2');
  contactHead.textContent = 'A word from the owner';
  contactHead.classList.add('contact-head');
  content.appendChild(contactHead);

  const contactBlurb = document.createElement('p');
  contactBlurb.textContent =
    'La Festa de Tori is all about pushing the limits of Italian cuisine and we strive to reach greater heights with flavors of our dishes. We consider all guests family and welcome them to try every menu item and eat to their hearts content!';
  contactBlurb.classList.add('contact-blurb');
  content.appendChild(contactBlurb);

  const contactInfo = document.createElement('p');
  contactInfo.textContent =
    'You can reach us at 777-777-7777 or email us at tori@festa.com for more information.';
  contactInfo.classList.add('contact-info');
  content.appendChild(contactInfo);
}
