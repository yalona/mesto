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

//  Массив картинок
 const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const elements = document.querySelector('.elements');
const image = document.querySelector('.element__image');
const text = document.querySelector('.element__place');
const template = document.querySelector('.element__template');

// Добавление карточек при загрузке из массива
initialCards.forEach(function(item){
  const initialCardsElement = template.content.cloneNode(true);
  console.log(initialCardsElement);
 
  initialCardsElement.querySelector('.element__place').textContent = item.name;
  initialCardsElement.querySelector('.element__image').src = item.link;

  elements.prepend(initialCardsElement);
})
