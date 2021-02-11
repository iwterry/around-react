import React from 'react';

function PopupWithForm(props) {
  const { name, title, children, isOpen, onClose } = props;

  return (
    <div className={`overlay ${isOpen ? 'overlay_opened' : ''}`}>
      <div className="overlay__wrapper">
        <button
          type="button"
          aria-label="Close"
          className={`overlay__close-btn overlay__close-btn_type_${name}`}
          onClick={onClose}
        >
        </button>
        <form name={name} className={`project-form project-form_type_${name}`} noValidate> 
          <h3 className={`project-form__title project-form__title_type_${name}`}>
            {title}
          </h3>
          {children}
          <button type="submit" className={`project-form__submit-btn project-form__submit-btn_type_${name}`}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;