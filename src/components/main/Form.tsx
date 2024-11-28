import { useState } from "react";
import "./Form.css";
import axios from "axios";
export default function Form() {
  const [theName, setTheName] = useState("");
  const [nameTg, setNameTg] = useState("");
  const [messageUser, setMessageUser] = useState("");
  const submitMessage = () => {
    const TOKEN = "6278851300:AAHEwQBj6GQ34KS-vQ6_L5ej_g--UQO6N8A";
    const CHAT_ID = "-1001807655173";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let message = `<b>Заявка с сайта:</b>\n`;
    message += `<b>Имя: </b>${theName}\n`;
    message += `<b>Телега: </b>https://t.me/${nameTg}\n`;
    message += `<b>Сообщение: </b>${messageUser}\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log("finally");
        setTheName("");
        setNameTg("");
        setMessageUser("");
      });
  };
  return (
    <>
      <div className="form ">
        <div className="layout__title form__title">
          <span>Написать</span>
          <span className="dot">Мне</span>
        </div>
        <div className="form__inputs">
          <div className="form__contacts">
            <input
              className="form__name"
              placeholder="Ваше Имя"
              type="text"
              value={theName}
              onChange={(e) => setTheName(e.target.value)}
            />
            <input
              className="form__tg"
              placeholder="Ник в Telegram"
              type="text"
              value={nameTg}
              onChange={(e) => setNameTg(e.target.value)}
            />
          </div>
          <div className="form__text">
            <textarea
              className="form__message"
              placeholder="Ваше сообщение"
              value={messageUser}
              onChange={(e) => setMessageUser(e.target.value)}
            />
            <button className="form__btn" onClick={submitMessage}>
              Отправить
            </button>
          </div>
        </div>
        <div className="design_img">
          <img src="design/design_img/2.png" alt="" />
        </div>
      </div>
    </>
  );
}
