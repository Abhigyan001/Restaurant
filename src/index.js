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

const displayHome = () => {
  clearContent();
  Home.pageHome();
  Home.pageHomeActive();
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.addEventListener('click', displayMenu);
};

const displayMenu = () => {
  clearContent();
  Menu.seeMenu();
  Menu.seeMenuActive();
};

const displayContact = () => {
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

  logo.addEventListener('click', displayHome);
  home.addEventListener('click', displayHome);
  menu.addEventListener('click', displayMenu);
  contact.addEventListener('click', displayContact);
  menuBtn.addEventListener('click', displayMenu);
});