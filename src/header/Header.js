import "./Header.css";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="logo" />
        <div className="header__logo-text">
          <span>Agency</span> Creative
        </div>
      </div>
      <div className="header__hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
