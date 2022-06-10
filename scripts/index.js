const popupProfile = document.querySelector('.popup_type_profile');
const popupNewPic = document.querySelector('.popup_type_new-pic');
const popupText = document.querySelector('.popup__input_field_text');
const popupActivity = document.querySelector('.popup__input_field_activity');

// функция открытия попапа
function addOpenedPopup(element) {
    element.classList.add('popup_opened');
}
// открытие формы с параметрами профиля
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => addOpenedPopup(popupProfile));
 
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
    const profileName = document.querySelector('.profile__name');
    const profileActivity = document.querySelector('.profile__activity');
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
const element = document.querySelector('.element');
const newPicInputName = document.querySelector('.popup__input_field_place-name');
const newPicInputPic = document.querySelector('.popup__input_field_pic-url');
  
function createCard(element) {
  const initialCardsTemplate = document.querySelector('.elements__template').content;
  const initialCardsElement = initialCardsTemplate.querySelector('.element').cloneNode(true);

  initialCardsElement.querySelector('.element__place').textContent = element.name;
  initialCardsElement.querySelector('.element__image').src = element.link;

  cards.prepend(initialCardsElement);
  
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
  const card = document.querySelector('.popup__image').closest('.popup__container_type_new-pic');
  const title = card.querySelector('.popup__image-text');

  document.querySelector('.popup__image').src = initialCardsElement.querySelector('.element__image').src;
  title.textContent = initialCardsElement.querySelector('.element__place').textContent;
}

const popupOpenPic = document.querySelector('.popup_type_open-pic');

initialCardsElement.querySelector('.element__image').addEventListener('click', () => {
addOpenedPopup(popupOpenPic);
openImage();
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
  createCard(cardInfo);
  removeOpenedPopup(popupNewPic);
  }

const formNewPic = document.querySelector('.popup__form_type_new-pic');
formNewPic.addEventListener('submit', addCard);