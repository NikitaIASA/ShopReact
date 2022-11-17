import axios from "../../axios";
import React from "react";

const PopUp = ({popup, setPopup, user, setUser}) => {

  const popupCloseHandler = (e) => {
    if (e.target.classList.contains('overlay')) {
      setPopup(false); 
    }
  }

  const signInHandler = (e) => {
    console.log(e.target)
  }

  const signUpHandler = (e) => {
    axios.post('/users', {
      email: e.target[0].value,
      name: e.target[1].value,
      password: e.target[2].value
    }).then((res) => {
      setUser(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setPopup(false);
      e.target[0].value = '';
      e.target[1].value = ''
      e.target[2].value = ''
    }).catch(err => alert(err));
  }
  
  const [status, setStatus] = React.useState("signin");
  return (
    <div onClick={(e) => popupCloseHandler(e)} className={`overlay ${popup && 'overlay_active'}` }>
      <div className="popup">
        <form onSubmit={(e) => {
          e.preventDefault();
          if (status === 'signin') {
            signInHandler(e);
          }
          else {
            signUpHandler(e);
          }
        }} className="popup__form">
          <div className="popup__form-top">
            <h2 onClick={() => setStatus('signin')} className={`popup__title ${status === 'signin' && 'popup__title_active'}`}>Войти</h2>
            <h2  onClick={() => setStatus('signup')} className={`popup__title ${status === 'signup' && 'popup__title_active'}`}>Регистрация</h2>
          </div>
          <input placeholder="Введите Email" className='popup__input' type="email" />
          {status === "signup" && <input placeholder="Введите Имя" className='popup__input' type="text" />}
          <input placeholder="Введите пароль" className='popup__input' type="password"/>
          <button className="popup__btn" type="submit"> {status === 'signin' ? 'Войти' : 'Регистрация'}</button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
