const popupProfile = document.querySelector('.popup_type_profile');
const popupNewPic = document.querySelector('.popup_type_new-pic');
const popupText = document.querySelector('.popup__input_field_text');
const popupActivity = document.querySelector('.popup__input_field_activity');

// функция открытия попапа
function addOpenedPopup(element) {
    element.classList.add('popup_opened');
}
// открытие формы с параметрами профиля
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

// заполнение полей из value попапа редактирования при загрузке
profileName.textContent = popupText.value;
profileActivity.textContent = popupActivity.value;

const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => {
addOpenedPopup(popupProfile);
});

function removeOpenedPopup(element) {
  element.classList.remove('popup_opened');
}
 
// Закрытие попапа по крестику
const closeButtons = document.querySelectorAll('.popup__close-button');
function closePopupClick() {
closeButtons.forEach((btn) => {
btn.addEventListener('click', (evt)=> {
  evt.target.closest('.popup').classList.remove('popup_opened');
})
})
}

closePopupClick();

// функция сохранения параметров из формы в профиль
const formProfile = document.querySelector('.popup__form_type_profile');
function addProfileSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupText.value;
    profileActivity.textContent = popupActivity.value;
    removeOpenedPopup(popupProfile);
}
formProfile.addEventListener('submit', addProfileSubmitHandler);

// открытие формы добавления картинок
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', () => addOpenedPopup(popupNewPic));

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

// Добавление карточек при загрузке из массива
const cards = document.querySelector('.elements');
const newPicInputName = document.querySelector('.popup__input_field_place-name');
const newPicInputPic = document.querySelector('.popup__input_field_pic-url');
const initialCardsTemplate = document.querySelector('.elements__template').content;
const initialCardsElement = initialCardsTemplate.querySelector('.element');

function createCard(element) {
  const card = initialCardsElement.cloneNode(true);

  card.querySelector('.element__place').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__image').alt = element.name;
  
// Кнопка лайка
card.querySelector('.element__like')
.addEventListener('click', function(evt) {
  evt.target.classList.toggle('element__like_active');
});

// кнопка удаления карточки
card.querySelector('.element__trash')
.addEventListener('click', function(evt){
evt.target.parentElement.remove();
});
return card;
};

// вставка карточки
initialCards.forEach((element) => {
  const card = createCard(element);
  cards.prepend(card);
});

// Добавление данных из инпутов в карточку
function addCard(evt) {
  evt.preventDefault();
  const cardInfo = {
  name: newPicInputName.value,
  link: newPicInputPic.value,
  };
  evt.target.reset(); 
  createCard(cardInfo);
  removeOpenedPopup(popupNewPic);
};

const formNewPic = document.querySelector('.popup__form_type_new-pic');
formNewPic.addEventListener('submit', addCard);

// открытие попапа с картинкой
const popupOpenPic = document.querySelector('.popup_type_open-pic');
const elementImages = document.querySelectorAll('.element__image');
const popupImage= document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-text');

elementImages.forEach((img)=> {
  img.addEventListener('click', (evt)=> {
  openImage(evt);  
})
})

function openImage(evt) {
const image = evt.target;
const card = image.closest('.element');
const title = card.querySelector('.element__place');

popupImage.src = image.src;
popupTitle.textContent = title.textContent;

addOpenedPopup(popupOpenPic);
}