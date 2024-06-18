import "./Contacts.css";
export default function Contacts() {
  return (
    <>
      <div className="contacts ">
        <div className="layout__title dot">Контакты</div>
        <div className="contacts__items">
          <div className="contacts__item">Телефон: +7(981)9583833</div>
          <div className="contacts__item">Телеграм: @yuriu_gavrikov</div>
          <div className="contacts__item">Адрес: Санкт-Петербург, Россия</div>
        </div>

        <div className="design_img">
          <img src="/design/design_img/4.png" alt="" />
        </div>
      </div>
    </>
  );
}
