const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// ----------- Navigation ---------------

const links = document.querySelectorAll('.container header nav a');
const nav = document.querySelector('.container header nav');

for (let i = 0; i < links.length; i ++) {
  links[i].textContent = Object.values(siteContent.nav)[i];
}

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]) // Example: Update the img src for the logo

const link = document.createElement('a');
link.href = '#';
link.textContent = 'Home';
nav.prepend(link);

const login = link.cloneNode();
login.textContent = 'Login';
nav.appendChild(login);

document.querySelectorAll('.container header nav a').forEach(el => el.style = 'color: green');

// --------------------------------------
// -------------- CTA -------------------

const cta = siteContent.cta.h1.split(' ');
document.querySelector('.cta-text h1').innerHTML = `${cta[0]}<br> ${cta[1]}<br> ${cta[2]}`;

document.querySelector('.cta-text button').textContent = siteContent.cta.button;

document.getElementById('cta-img').src = siteContent.cta["img-src"];

// --------------------------------------
// ---------- Main Content --------------

const mainTitle = [];
const mainText = [];

Object.entries(siteContent["main-content"]).forEach((el) => {
  if (el[0].includes('-h4')) mainTitle.push(el[1])
  if (el[0].includes('-content')) mainText.push(el[1]);
});

for (let i = 0; i < mainTitle.length; i ++) {
  document.querySelectorAll('.main-content .text-content h4')[i].textContent = mainTitle[i];
}

for (let i = 0; i < mainText.length; i ++) {
  document.querySelectorAll('.main-content .text-content p')[i].textContent = mainText[i];
}

document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];

// --------------------------------------
// ------------- Contact ----------------

document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];
document.querySelectorAll('.contact p')[1].textContent = siteContent.contact.phone;
document.querySelectorAll('.contact p')[2].textContent = siteContent.contact.email;
document.querySelectorAll('.contact p')[0].innerHTML = `${siteContent.contact.address.slice(0,18)}<br>${siteContent.contact.address.slice(18)}`;

// --------------------------------------
// -------------- Footer ----------------

document.querySelector('footer p').textContent = siteContent.footer.copyright;



