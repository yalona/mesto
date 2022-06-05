let popupProfile = document.querySelector('.popup_type_profile');
let popupNewPic = document.querySelector('.popup_type_new-pic');
let popupText = document.querySelector('.popup__input_field_text');
let popupActivity = document.querySelector('.popup__input_field_activity');

// функция открытия попапа
function popupOpenedAdd(element) {
    element.classList.add('popup_opened');
    popupText.value = document.querySelector('.profile__name').textContent;
    popupActivity.value = document.querySelector('.profile__activity').textContent;
}
// открытие формы с параметрами профиля
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => popupOpenedAdd(popupProfile));
 
// Удаление класса из попапа для закрытия
function popupOpenedRemove(element) {
    element.classList.remove('popup_opened');  
}

// Закрытие попапа
let closeButton = document.querySelectorAll('.popup__close-button');
closeButton.forEach(function (btn) {
    btn.addEventListener('click', () => {
    popupOpenedRemove(popupProfile);
})
 });
// функция сохранения параметров из формы в профиль
let FormProfile = document.querySelector('.popup__form_type_profile');
function formSubmitHandler(evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileActivity = document.querySelector('.profile__activity');
    profileName.textContent = popupText.value;
    profileActivity.textContent = popupActivity.value;
    popupOpenedRemove(popupProfile);
}
FormProfile.addEventListener('submit', formSubmitHandler);

// открытие формы добавления картинок
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', () => popupOpenedAdd(popupNewPic));

// Закрытие попапа
closeButton.forEach(function (btn) {
    btn.addEventListener('click', () => {
    popupOpenedRemove(popupNewPic);
})
 });