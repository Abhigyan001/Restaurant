const Contact = (() => {
  const addForm = () => {
    const form = document.createElement('form');

    const h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';

    const nameField = document.createElement('div');
    nameField.innerHTML = `
      <label for="name">Your Name</label>
      <input type="text" name="name" id="name" required />
    `;

    const emailField = document.createElement('div');
    emailField.innerHTML = `
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
    `;

    const titleField = document.createElement('div');
    titleField.innerHTML = `
      <label for="title">Title</label>
      <input type="text" name="title" id="title" required />
    `;

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.innerText = 'Message';

    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'message');
    textarea.setAttribute('id', 'message');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('required', 'true');

    const formBtn = document.createElement('button');
    formBtn.classList.add('form-btn');
    formBtn.innerText = 'Send';

    form.appendChild(h1);
    form.appendChild(nameField);
    form.appendChild(emailField);
    form.appendChild(titleField);
    form.appendChild(messageLabel);
    form.appendChild(textarea);
    form.appendChild(formBtn);

    return form;
  };

  const addInfoSection = () => {
    const section = document.createElement('section');
    section.classList.add('info-section');

    const openingHoursInfo = document.createElement('div');
    openingHoursInfo.innerHTML = `
      <i class="fas fa-door-open fa-2x"></i>
      <h3>Opening Hours</h3>
      <p>From 10:00am - 9:00pm</p>
    `;

    const phoneInfo = document.createElement('div');
    phoneInfo.innerHTML = `
      <i class="fas fa-phone-volume fa-2x"></i>
      <h3>Phone</h3>
      <p>+91-9923675211</p>
    `;

    const emailInfo = document.createElement('div');
    emailInfo.innerHTML = `
      <i class="fas fa-envelope-open-text fa-2x"></i>
      <h3>Email</h3>
      <p>support@ghyrestaurant.com</p>
    `;

    const locationInfo = document.createElement('div');
    locationInfo.innerHTML = `
      <i class="fas fa-map-marked-alt fa-2x"></i>
      <h3>Location</h3>
      <p>GS Road, Guwahati</p>
    `;

    section.appendChild(openingHoursInfo);
    section.appendChild(phoneInfo);
    section.appendChild(emailInfo);
    section.appendChild(locationInfo);

    return section;
  };

  const showContact = () => {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    main.classList.add('contact-main');
    const form = addForm();
    const section = addInfoSection();
    main.appendChild(form);
    main.appendChild(section);
    content.appendChild(main);
  };

  const showContactActive = () => {
    const liContact = document.getElementById('contact');
    liContact.classList.add('active');
  };

  return { showContact, showContactActive };
})();

export default Contact;