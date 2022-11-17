import React from "react";
import { Link } from "react-router-dom";
import PopUp from "../../components/PopUp/PopUp";

const Header = ({user, setUser}) => {
  const [popup, setPopup] = React.useState(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__left">
            <h1 className="header__title">
              <Link to="'/">SHOP</Link>
            </h1>
            <Link className="header__link" to="#">
              Для описания
            </Link>
          </div>
          <div className="header__right">
            {
              user.email ? <p>{user.name}</p> : <p onClick={() => setPopup(true)} className="header__login">Войти - Регистрация</p>
            }
            <button type={"button"} className="header__btn">
              Подать объявление
            </button>
          </div>
        </nav>
      </div>
      {popup && <PopUp popup={popup} setPopup={setPopup} user={user} setUser={setUser} />}
    </header>
  );
};

export default Header;
