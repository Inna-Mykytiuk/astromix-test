document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelector('.btn-close');
  const cardContent = document.querySelector('.card-content');
  const buttons = document.querySelectorAll('.button-block .btn-icon');

  buttons[3].classList.add('active');
  cardContent.classList.add('js-grid');
  buttons[1].classList.add('disabled');
  buttons[2].classList.add('disabled');

  btnOpen.addEventListener('click', () => {
    header.classList.add('is-open');
  });

  btnClose.addEventListener('click', () => {
    header.classList.remove('is-open');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      header.classList.remove('is-open');
    }
  });

  const navLinks = document.querySelectorAll('.nav-item a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('is-open');
    });
  });


  buttons.forEach(button => {
    button.addEventListener('click', () => {

      buttons.forEach(btn => btn.classList.remove('active'));

      button.classList.add('active');

      if (button === buttons[0] || button === buttons[3]) {
        cardContent.classList.remove('js-list');
        cardContent.classList.add('js-grid');
        buttons[1].classList.add('disabled');
        buttons[2].classList.add('disabled');
        buttons[0].classList.remove('disabled');
        buttons[3].classList.remove('disabled');
      } else if (button === buttons[1] || button === buttons[2]) {
        cardContent.classList.remove('js-grid');
        cardContent.classList.add('js-list');
        buttons[0].classList.add('disabled');
        buttons[3].classList.add('disabled');
        buttons[1].classList.remove('disabled');
        buttons[2].classList.remove('disabled');
      }
    });
  });
});

