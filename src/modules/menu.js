const Menu = (() => {
  const menuList = [
    {
      title: 'Breakfast',
      items: ['Cold Cereal', 'Cottage Cheese', 'Oatmeal', 'Brocolli Rabe', 'Luger Burger'],
    },
    {
      title: 'Lunch',
      items: ['Chicken Briyani', 'Rice Bowl', 'Chicken Grilled', 'Crispy Salad', 'The Lola Burger'],
    },
    {
      title: 'Dinner',
      items: ['Panner Thali', 'Chicken Fried Rice', 'Chappati & Naan', 'Masala Butter Paneer', 'Chicken Tikka'],
    },
  ];

  const addSection = menu => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.innerText = menu.title;

    const ul = document.createElement('ul');

    menu.items.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      ul.appendChild(li);
    });

    section.appendChild(h2);
    section.appendChild(ul);

    return section;
  };

  const setMenu = () => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('menu-main');

    menuList.forEach(menu => {
      const section = addSection(menu);
      main.appendChild(section);
    });

    content.appendChild(main);
  };

  const setMenuActive = () => {
    const liMenu = document.getElementById('menu');
    liMenu.classList.add('active');
  };

  return { setMenu, setMenuActive };
})();

export default Menu;