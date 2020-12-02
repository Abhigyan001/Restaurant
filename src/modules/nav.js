const Nav = (() => {
  const navMenu = () => {
    const content = document.getElementById('content');

    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const span = document.createElement('span');
    span.classList.add('logo');
    span.setAttribute('id', 'logo');
    span.innerText = 'Guwahati Restaurant';

    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const liMenu = document.createElement('li');
    const liContact = document.createElement('li');
    liHome.setAttribute('id', 'home');
    liMenu.setAttribute('id', 'menu');
    liContact.setAttribute('id', 'contact');
    liHome.innerText = 'home';
    liMenu.innerText = 'menu';
    liContact.innerText = 'contact us';

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);

    nav.appendChild(span);
    nav.appendChild(ul);

    header.appendChild(nav);

    content.appendChild(header);
  };

  return { navMenu };
})();

export default Nav;