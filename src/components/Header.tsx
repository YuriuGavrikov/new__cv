import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="container sticky">
        <header className="header">
          <div className="header__logo dot">Юрий</div>
          <nav className="nav">
            <div className="nav__item">
              <a href="">Навыки</a>
            </div>
            <div className="nav__item">
              <a href="">Портфолио</a>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
