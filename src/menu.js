export function pageLoadMenu() {
  const content = document.querySelector('#content');

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

  const menuContainer1 = document.createElement('div');
  menuContainer1.classList.add('menu-container');
  content.appendChild(menuContainer1);

  const menuContainer2 = document.createElement('div');
  menuContainer2.classList.add('menu-container');
  content.appendChild(menuContainer2);

  const menuContainer3 = document.createElement('div');
  menuContainer3.classList.add('menu-container');
  content.appendChild(menuContainer3);

  //TO DO: Refactor all arrays into objects

  const appsTitleArr = [
    'Ricotta and Roasted Tomato Bruschetta with Pancetta',
    'Roasted Eggplant Caponata',
    'Focaccia col Formaggio',
  ];
  const mainsTitleArr = ['Gnocchi', 'Lasagne', 'Polenta'];
  const dessertTitleArr = ['Chocolate and Pistachio Biscotti', 'Tiramisu'];
  const menuTitleArr = ['Appetizers', 'Main Dishes', 'Desserts'];
  const appImgArr = [
    '../src/images/Bruschetta.png',
    '../src/images/Caponata.png',
    '../src/images/Focaccia.png',
  ];
  const mainImgArr = [
    '../src/images/Gnocchi.png',
    '../src/images/Lasagne.png',
    '../src/images/Polenta.png',
  ];
  const dessertImgArr = [
    '../src/images/Biscotti.png',
    '../src/images/Tiramisu.png',
  ];

  function makeApps() {
    const appsList = document.createElement('ul');
    appsList.textContent = menuTitleArr[0];
    appsList.classList.add('apps-list');
    for (let i = 0; i < appsTitleArr.length; i++) {
      const apps = document.createElement('li');
      apps.classList.add('apps');
      apps.appendChild(document.createTextNode(appsTitleArr[i]));
      const appImg = document.createElement('img');
      appImg.classList.add('app-img');
      appImg.src = appImgArr[i];
      appsList.appendChild(apps);
      appsList.appendChild(appImg);
    }
    return menuContainer1.appendChild(appsList);
  }

  function makeMains() {
    const mainsList = document.createElement('ul');
    mainsList.textContent = menuTitleArr[1];
    mainsList.classList.add('mains-list');
    for (let o = 0; o < mainsTitleArr.length; o++) {
      const mains = document.createElement('li');
      mains.classList.add('mains');
      mains.appendChild(document.createTextNode(mainsTitleArr[o]));
      const mainImg = document.createElement('img');
      mainImg.classList.add('main-img');
      mainImg.src = mainImgArr[o];
      mainsList.appendChild(mains);
      mainsList.appendChild(mainImg);
    }
    return menuContainer2.appendChild(mainsList);
  }

  function makeDesserts() {
    const dessertList = document.createElement('ul');
    dessertList.textContent = menuTitleArr[2];
    dessertList.classList.add('desserts-list');
    for (let p = 0; p < dessertTitleArr.length; p++) {
      const desserts = document.createElement('li');
      desserts.classList.add('desserts');
      desserts.appendChild(document.createTextNode(dessertTitleArr[p]));
      const dessertImg = document.createElement('img');
      dessertImg.classList.add('dessert-img');
      dessertImg.src = dessertImgArr[p];
      dessertList.appendChild(desserts);
      dessertList.appendChild(dessertImg);
    }
    return menuContainer3.appendChild(dessertList);
  }

  makeApps();
  makeMains();
  makeDesserts();
}
