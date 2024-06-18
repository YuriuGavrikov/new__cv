import "./Form.css";
export default function Form() {
  return (
    <>
      <div className="form ">
        <div className="layout__title form__title">
          <span>Написать</span>
          <span className="dot">Мне</span>
        </div>
        <div className="form__inputs">
          <div className="form__contacts">
            <input className="form__name" placeholder="Ваше Имя" type="text" />
            <input
              className="form__tg"
              placeholder="Ник в Telegram"
              type="text"
            />
          </div>
          <div className="form__text">
            <textarea className="form__message" placeholder="Ваше сообщение" />
            <button className="form__btn">Отправить</button>
          </div>
        </div>
        <div className="design_img">
          <img src="design/design_img/2.png" alt="" />
        </div>
      </div>
    </>
  );
}
