let form = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupText = document.querySelector('.popup__input_text');
let popupActivity = document.querySelector('.popup__input_activity');

function popupOpenedAdd() {
    form.classList.add('popup_opened');
     popupText.value = document.querySelector('.profile__name').textContent;
     popupActivity.value = document.querySelector('.profile__activity').textContent;
    }
editButton.addEventListener('click', popupOpenedAdd);
 
function popupOpenedRemove() {
    form.classList.remove('popup_opened');  
    }
let closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', popupOpenedRemove);

function formSubmitHandler(evt) {
evt.preventDefault();
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
profileName.textContent = popupText.value;
profileActivity.textContent = popupActivity.value;
};
let FormProfile = document.querySelector('.popup__form_profile');
FormProfile.addEventListener('submit', formSubmitHandler);
FormProfile.addEventListener('submit', popupOpenedRemove);

