const Home = (() => {
  const pageHome = () => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('home-main');

    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = 'Hi! Welcome to our Restaurant. We serve:' 

    const h1 = document.createElement('h1');
    h1.innerHTML = ' <span>Breakfast</span> <br/> <span>Lunch</span> <br/> <span>Dinner</span>';

    const button = document.createElement('button');
    button.setAttribute('id', 'menu-btn');
    button.classList.add('menu-btn');
    button.innerText = 'See our menu';

    div.appendChild(h2);
    div.appendChild(h1);
    div.appendChild(button);

    main.appendChild(div);

    content.appendChild(main);
  };

  const pageHomeActive = () => {
    const liHome = document.getElementById('home');
    liHome.classList.add('active');
  };

  return { pageHome, pageHomeActive };
})();

export default Home;