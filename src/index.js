import Nav from './modules/nav';
import Menu from './modules/menu';
import Contact from './modules/contact';


const clearContent = () => {
  const content = document.getElementById('content');
  const listItems = document.querySelectorAll('header li');

  content.removeChild(content.lastChild);
  listItems.forEach(listItem => listItem.classList.remove('active'));
};

const displayMenu = () => {
  clearContent();
  Menu.seeMenu();
  Menu.seeMenuActive();
};

const displayContact = () => {
  clearContent();
  Contact.setContact();
  Contact.setContactActive();
};

document.addEventListener('DOMContentLoaded', () => {
  Nav.navMenu();

  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  menu.addEventListener('click', displayMenu);
  contact.addEventListener('click', displayContact);
});