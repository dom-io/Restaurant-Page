(()=>{"use strict";function t(){const t=document.querySelector("#content");t.replaceChildren();const e=document.createElement("h1");e.textContent="Welcome to La Festa de Tori!",e.classList.add("home-heading"),t.appendChild(e);const n=document.createElement("div");n.classList.add("img-container"),t.appendChild(n);const a=document.createElement("img");a.src="../src/images/bull.png",a.classList.add("image-bg"),n.appendChild(a);const c=document.createElement("div");c.classList.add("btn-container"),t.appendChild(c);const d=document.createElement("button");d.textContent="Home",d.classList.add("home-btn"),d.type="button",c.appendChild(d);const s=document.createElement("button");s.textContent="Menu",s.classList.add("menu-btn"),s.type="button",c.appendChild(s);const o=document.createElement("button");o.textContent="Contact",o.classList.add("contact-btn"),o.type="button",c.appendChild(o);const i=document.createElement("p");i.textContent="La Festa de Tori, also known as The Feast of the Bull, will satiate your appetite with meals guaranteed to make you as powerful as the mighty bull!",i.classList.add("home-blurb"),t.appendChild(i);const l=document.createElement("p");l.textContent="- The Maester of Bulls",l.classList.add("home-blurb-name"),t.appendChild(l);const m=document.createElement("h2");m.textContent="Hours",m.classList.add("hours-title"),t.appendChild(m);const r=["Sunday: 8am - 8pm","Monday: 7am - 7pm","Tuesday: 7am - 7pm","Wednesday: 7am - 7pm","Thursday: 7am - 9pm","Friday: 10am - 9pm","Saturday: 10am - 9pm"];!function(){const e=document.createElement("ul");for(let t=0;t<r.length;t++){const n=document.createElement("li");n.classList.add("hours"),n.appendChild(document.createTextNode(r[t])),e.appendChild(n)}t.appendChild(e)}();const p=document.createElement("h3");p.textContent="Location",p.classList.add("location-title"),t.appendChild(p);const u=document.createElement("p");u.textContent="77 Corsa del Toro, Sicily, Italy",u.classList.add("location"),t.appendChild(u)}function e(){const t=document.querySelector("#content");t.replaceChildren();const e=document.createElement("h1");e.textContent="Welcome to La Festa de Tori!",e.classList.add("home-heading"),t.appendChild(e);const n=document.createElement("img");n.src="../src/images/bull.png",n.classList.add("image-bg"),t.appendChild(n);const a=document.createElement("div");a.classList.add("btn-container"),t.appendChild(a);const c=document.createElement("button");c.textContent="Home",c.classList.add("home-btn"),c.type="button",a.appendChild(c);const d=document.createElement("button");d.textContent="Menu",d.classList.add("menu-btn"),d.type="button",a.appendChild(d);const s=document.createElement("button");s.textContent="Contact",s.classList.add("contact-btn"),s.type="button",a.appendChild(s);const o=document.createElement("div");o.classList.add("menu-container"),t.appendChild(o);const i=document.createElement("div");i.classList.add("menu-container"),t.appendChild(i);const l=document.createElement("div");l.classList.add("menu-container"),t.appendChild(l);const m=["Ricotta and Roasted Tomato Bruschetta with Pancetta","Roasted Eggplant Caponata","Focaccia col Formaggio"],r=["Gnocchi","Lasagne","Polenta"],p=["Chocolate and Pistachio Biscotti","Tiramisu"],u=["Appetizers","Main Dishes","Desserts"],h=["../src/images/Bruschetta.png","../src/images/Caponata.png","../src/images/Focaccia.png"],C=["../src/images/Gnocchi.png","../src/images/Lasagne.png","../src/images/Polenta.png"],g=["../src/images/Biscotti.png","../src/images/Tiramisu.png"];!function(){const t=document.createElement("ul");t.textContent=u[0],t.classList.add("apps-list");for(let e=0;e<m.length;e++){const n=document.createElement("li");n.classList.add("apps"),n.appendChild(document.createTextNode(m[e]));const a=document.createElement("img");a.classList.add("app-img"),a.src=h[e],t.appendChild(n),t.appendChild(a)}o.appendChild(t)}(),function(){const t=document.createElement("ul");t.textContent=u[1],t.classList.add("mains-list");for(let e=0;e<r.length;e++){const n=document.createElement("li");n.classList.add("mains"),n.appendChild(document.createTextNode(r[e]));const a=document.createElement("img");a.classList.add("main-img"),a.src=C[e],t.appendChild(n),t.appendChild(a)}i.appendChild(t)}(),function(){const t=document.createElement("ul");t.textContent=u[2],t.classList.add("desserts-list");for(let e=0;e<p.length;e++){const n=document.createElement("li");n.classList.add("desserts"),n.appendChild(document.createTextNode(p[e]));const a=document.createElement("img");a.classList.add("dessert-img"),a.src=g[e],t.appendChild(n),t.appendChild(a)}l.appendChild(t)}()}function n(){const t=document.getElementById("content");t.replaceChildren();const e=document.createElement("h1");e.textContent="Welcome to La Festa de Tori!",e.classList.add("home-heading"),t.appendChild(e);const n=document.createElement("img");n.src="../src/images/bull.png",n.classList.add("image-bg"),t.appendChild(n);const a=document.createElement("div");a.classList.add("btn-container"),t.appendChild(a);const c=document.createElement("button");c.textContent="Home",c.classList.add("home-btn"),c.type="button",a.appendChild(c);const d=document.createElement("button");d.textContent="Menu",d.classList.add("menu-btn"),d.type="button",a.appendChild(d);const s=document.createElement("button");s.textContent="Contact",s.classList.add("contact-btn"),s.type="button",a.appendChild(s);const o=document.createElement("h2");o.textContent="A word from the owner",o.classList.add("contact-head"),t.appendChild(o);const i=document.createElement("p");i.textContent="La Festa de Tori is all about pushing the limits of Italian cuisine and we strive to reach greater heights with flavors of our dishes. We consider all guests family and welcome them to try every menu item and eat to their hearts content!",i.classList.add("contact-blurb"),t.appendChild(i);const l=document.createElement("p");l.textContent="You can reach us at 777-777-7777 or email us at tori@festa.com for more information.",l.classList.add("contact-info"),t.appendChild(l)}t(),document.querySelector(".home-btn").addEventListener("click",t),document.querySelector(".menu-btn").addEventListener("click",e),document.querySelector(".contact-btn").addEventListener("click",n)})();