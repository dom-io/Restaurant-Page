export function initialPageLoadHome() {
  const content = document.querySelector('#content');

  content.replaceChildren();

  const homeHeading = document.createElement('h1');
  homeHeading.textContent = 'Welcome to La Festa de Tori!';
  homeHeading.classList.add('home-heading');
  content.appendChild(homeHeading);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  content.appendChild(imgContainer);

  const imageBg = document.createElement('img');
  imageBg.src = '../src/images/bull.png';
  imageBg.classList.add('image-bg');
  imgContainer.appendChild(imageBg);

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

  const homeBlurb = document.createElement('p');
  homeBlurb.textContent =
    'La Festa de Tori, also known as The Feast of the Bull, will satiate your appetite with meals guaranteed to make you as powerful as the mighty bull!';
  homeBlurb.classList.add('home-blurb');
  content.appendChild(homeBlurb);

  const homeBlurbName = document.createElement('p');
  homeBlurbName.textContent = '- The Maester of Bulls';
  homeBlurbName.classList.add('home-blurb-name');
  content.appendChild(homeBlurbName);

  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = 'Hours';
  hoursTitle.classList.add('hours-title');
  content.appendChild(hoursTitle);

  const hoursArr = [
    'Sunday: 8am - 8pm',
    'Monday: 7am - 7pm',
    'Tuesday: 7am - 7pm',
    'Wednesday: 7am - 7pm',
    'Thursday: 7am - 9pm',
    'Friday: 10am - 9pm',
    'Saturday: 10am - 9pm',
  ];

  function makeUl() {
    const hoursList = document.createElement('ul');
    for (let i = 0; i < hoursArr.length; i++) {
      const hours = document.createElement('li');
      hours.classList.add('hours');
      hours.appendChild(document.createTextNode(hoursArr[i]));
      hoursList.appendChild(hours);
    }
    return content.appendChild(hoursList);
  }
  makeUl();

  const locationTitle = document.createElement('h3');
  locationTitle.textContent = 'Location';
  locationTitle.classList.add('location-title');
  content.appendChild(locationTitle);

  const location = document.createElement('p');
  location.textContent = '77 Corsa del Toro, Sicily, Italy';
  location.classList.add('location');
  content.appendChild(location);
}
