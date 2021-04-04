import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Wait until view has initialised

  ngAfterViewInit(): void {
    // Get Elements
    const modalContainer = document.querySelector('.container') as HTMLElement;
    const inputSelector = (<HTMLInputElement>document.querySelector('.input'));
    const error = document.querySelector('.error-message') as HTMLElement;
    const message = document.querySelector('.message-container') as HTMLElement;

    // Check if popup is completed if not Call popup in 1 minute
    if (!sessionStorage.getItem('popup')) {
      setTimeout(callPopup, 6000);
    }

    // Activate popup
    function callPopup(): void {
      modalContainer.classList.add('active');
    }

    // Listen to clicks
    modalContainer.addEventListener('click', (event) => {

      let target = event.target as HTMLElement;

      // Close popup if close button or overlay is clicked

      if (target.classList.value === 'close-btn' || target.classList.value === 'overlay') closeModal();

      // Check if submit was clicked & if input is valid. if true display message

      if (target.classList.value === 'submit-btn' && inputSelector.value.match(/\w{3,}/gi)) {
        message.innerHTML = `<span>Thank you ${inputSelector.value} for entering our prize draw. Good luck!</span>`;
        message.classList.add('completed');
        closeModal();
        sessionStorage.setItem('popup', 'completed');
      } else {
        error.innerHTML = '*Please enter a valid name. A valid name must be at least 3 characters and contain only letters';
      }

    });

    // Close Modal
    function closeModal(): void {
      modalContainer.classList.remove('active');
    }
  }

}
