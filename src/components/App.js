import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import { logErrors } from '../utils/utils.js';

import defaultAvatar from '../images/profile-avatar.jpg';

function App() {
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ]  = React.useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState({ _id: null, link: '#',  name: '' });
  const [ currentUser, setCurrentUser ] = React.useState({
    name: 'Jacques Cousteau',
    about: 'Explorer',
    avatar: defaultAvatar,
    _id: null
  });

  React.useEffect(() => {
    api.getUserProfile()
      .then(({ _id, name, about, avatar }) => setCurrentUser({ _id, name, about, avatar }))
      .catch(logErrors);
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardId, cardName, cardLink) {
    setSelectedCard({
      _id: cardId,
      name: cardName, 
      link: cardLink
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, _id: null });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick} 
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <PopupWithForm name="profile-edit" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="project-form__field-wrapper project-form__field-wrapper_form_profile-edit">
            <input 
              type="text"
              aria-label="Name"
              name="profileName"
              id="profile-name-input"
              className="project-form__input project-form__input_type_profile-edit-field"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />
            <p className="project-form__input-error project-form__input-error_field_profile-name-input"></p>
          </div>
          <div className="project-form__field-wrapper project-form__field-wrapper_form_profile-edit">
            <input
              type="text"
              aria-label="About me"
              name="aboutMe"
              id="profile-about-me-input"
              className="project-form__input project-form__input_type_profile-edit-field"
              placeholder="About me"
              minLength="2"
              maxLength="200"
              required
            />
            <p className="project-form__input-error project-form__input-error_field_profile-about-me-input"></p>
          </div>
        </PopupWithForm>

        <PopupWithForm name="location-create" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="project-form__field-wrapper project-form__field-wrapper_form_location-create">
            <input 
              type="text"
              aria-label="Title"
              name="locationTitle"
              id="location-title-input"
              className="project-form__input project-form__input_type_location-create-field"
              placeholder="Title"
              minLength="2"
              maxLength="30"
              required
            />
            <p className="project-form__input-error project-form__input-error_field_location-title-input"></p>
          </div>
          <div className="project-form__field-wrapper project-form__field-wrapper_form_location-create">
            <input
              type="url"
              aria-label="Image link"
              name="imageLink"
              id="location-image-link-input"
              className="project-form__input project-form__input_type_location-create-field"
              placeholder="Image link"
              required
            />
            <p className="project-form__input-error project-form__input-error_field_location-image-link-input"></p>
          </div>
        </PopupWithForm>

        <PopupWithForm name="confirmation-prompt" title="Are you sure?">
          <input type="hidden" name="id" className="project-form__input project-form__input_hidden" />
        </PopupWithForm>

        <PopupWithForm name="profile-img-change" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="project-form__field-wrapper project-form__field-wrapper_form_profile-img-change">
            <input
              type="url"
              aria-label="Avatar link"
              name="avatarLink"
              id="profile-image-link-input"
              className="project-form__input project-form__input_type_profile-img-change-field"
              placeholder="Avatar link"
              required
            />
            <p className="project-form__input-error project-form__input-error_field_profile-image-link-input"></p>
          </div>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
