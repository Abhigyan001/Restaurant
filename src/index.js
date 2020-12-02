import Nav from './modules/nav';
import Menu from './modules/menu';
import Contact from './modules/contact';
import Home from './modules/home';


const clearContent = () => {
  const content = document.getElementById('content');
  const listItems = document.querySelectorAll('header li');
  content.removeChild(content.lastChild);
  listItems.forEach(listItem => listItem.classList.remove('active'));
};

const showMenu = () => {
  clearContent();
  Menu.seeMenu();
  Menu.seeMenuActive();
};

const showHome = () => {
  clearContent();
  Home.pageHome();
  Home.pageHomeActive();
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.addEventListener('click', showMenu);
};

const showContact = () => {
  clearContent();
  Contact.showContact();
  Contact.showContactActive();
};

document.addEventListener('DOMContentLoaded', () => {
  Nav.navMenu();
  Home.pageHome();
  Home.pageHomeActive();
  const logo = document.getElementById('logo');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const menuBtn = document.getElementById('menu-btn');
  logo.addEventListener('click', showHome);
  home.addEventListener('click', showHome);
  menu.addEventListener('click', showMenu);
  contact.addEventListener('click', showContact);
  menuBtn.addEventListener('click', showMenu);
});