export default class Popup {
  constructor(template, destination) {
  
    this.block = document.createElement('div');
    this.block.classList.add('popup');
    this.block.append(template.content.cloneNode('true'));
    destination.append(this.block);

    this.close = this.close.bind(this);
    this.closeBtn = this.block.querySelector('.popup__close');
    this.closeBtn.addEventListener('click', this.close);

  }

  close (event) {
    event.target.closest('.popup').classList.remove('popup_is-opened');
  }

  open (event) {
    this.block.classList.add('popup_is-opened');
  }

  buttonRender(element, result) {
    if (result) {  
      element.removeAttribute('disabled');
      element.classList.remove('popup__button_disabled');
    } else {
      element.setAttribute('disabled', true);
      element.classList.add('popup__button_disabled');
    }
  }

  alertRender(element, message) {
    if (message) {
      element.textContent = message;
      element.style.visibility = 'visible';
    } else element.style.visibility = 'hidden';
  }
}