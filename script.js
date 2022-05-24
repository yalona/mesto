let form = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function () {
form.classList.add('popup_opened');
});
 
let closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', function () {
form.classList.remove('popup_opened');  
});

let submitButton = document.querySelector('.popup__submit-button');
submitButton.addEventListener('click', function () {
form.classList.remove('popup_opened');  
});

let popupText = document.querySelector('.popup__text');
let popupActivity = document.querySelector('.popup__activity');
function formSubmitHandler(evt) {
evt.preventDefault();
document.querySelector('.profile__name').textContent = popupText.value;
document.querySelector('.profile__activity').textContent = popupActivity.value;
};
form.addEventListener('submit', formSubmitHandler);

