import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="footer__github">
            <a
              className="link_hover"
              href="https://github.com/YuriuGavrikov"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="footer__year">2024</div>
        </footer>
      </div>
    </>
  );
}
