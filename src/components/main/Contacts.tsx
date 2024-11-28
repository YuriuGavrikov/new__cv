import "./Contacts.css";
export default function Contacts() {
  return (
    <>
      <section className="contacts ">
        <div className="layout__title dot">Контакты</div>
        <div className="contacts__items">
          <div className="contacts__item">
            Телефон:{" "}
            <a className="link_hover" href="tel:+79819583833">
              +7(981)9583833
            </a>
          </div>
          <div className="contacts__item">
            Телеграм:{" "}
            <a
              className="link_hover"
              href="https://t.me/yuriu_gavrikov"
              target="_blank"
            >
              @yuriu_gavrikov
            </a>
          </div>
          <div className="contacts__item">Адрес: Санкт-Петербург, Россия</div>
        </div>

        <div className="design_img">
          <img src="design/design_img/4.png" alt="" />
        </div>
      </section>
    </>
  );
}
