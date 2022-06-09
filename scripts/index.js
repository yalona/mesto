let popup = document.querySelectorAll('.popup');
let popupProfile = document.querySelector('.popup_type_profile');
let popupNewPic = document.querySelector('.popup_type_new-pic');
let popupText = document.querySelector('.popup__input_field_text');
let popupActivity = document.querySelector('.popup__input_field_activity');

// функция открытия попапа
function popupOpenedAdd(element) {
    element.classList.add('popup_opened');
}
// открытие формы с параметрами профиля
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => popupOpenedAdd(popupProfile));
 
// Удаление класса из попапа для закрытия
function popupOpenedRemove(element) {
    element.classList.remove('popup_opened');  
}

// Закрытие попапа профиль по крестику
let closeButton = document.querySelectorAll('.popup__close-button');
closeButton.forEach(function (btn) {
  btn.addEventListener('click', (popup) => {
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

//  Массив картинок
 let initialCards = [
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

// Добавление карточек при загрузке из массива
const elements = document.querySelector('.elements');
const element = document.querySelector('.element');
const newPicInputName = document.querySelector('.popup__input_field_place-name');
const newPicInputPic = document.querySelector('.popup__input_field_pic-url');
  
function createCard(element) {
  const initialCardsTemplate = document.querySelector('.elements__template').content;
  const initialCardsElement = initialCardsTemplate.querySelector('.element').cloneNode(true);

  initialCardsElement.querySelector('.element__place').textContent = element.name;
  initialCardsElement.querySelector('.element__image').src = element.link;

  elements.prepend(initialCardsElement);
  
 // Кнопка лайка
initialCardsElement.querySelector('.element__like')
.addEventListener('click', function(evt) {
  evt.target.classList.toggle('element__like_active');
});

 // кнопка удаления карточки
initialCardsElement.querySelector('.element__trash')
.addEventListener('click', function(evt){
evt.target.parentElement.remove();
})

// открытие попапа с картинкой
function openImage(){
  const card = document.querySelector('.popup__image').closest('.popup__container_type_newPic');
  const title = card.querySelector('.popup__image-text');

  document.querySelector('.popup__image').src = initialCardsElement.querySelector('.element__image').src;
  title.textContent = initialCardsElement.querySelector('.element__place').textContent;
}

const popupOpenPic = document.querySelector('.popup_type_open-pic');

initialCardsElement.querySelector('.element__image').addEventListener('click', () => {
popupOpenedAdd(popupOpenPic);
openImage();
});

// Закрытие попапа с картинкой
closeButton.forEach(function (btn) {
  btn.addEventListener('click', () => {
  popupOpenedRemove(popupOpenPic);
  });
 });
}

initialCards.forEach(createCard);

// Добавление данных из инпутов в карточку
 function addCard(evt) {
  evt.preventDefault();
  const cardInfo = {
  name: newPicInputName.value,
  link: newPicInputPic.value,
  };
  evt.target.reset(); 
  initialCardsElement = createCard(cardInfo);
  popupOpenedRemove(popupNewPic);
  }

const formNewPic = document.querySelector('.popup__form_type_new-pic');
formNewPic.addEventListener('submit', addCard);

// Закрытие попапа новых карточек по крестику
  closeButton.forEach(function (btn) {
  btn.addEventListener('click', () => {
  popupOpenedRemove(popupNewPic);
})
 });
