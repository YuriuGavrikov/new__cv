import "./Hello.css";
export default function Hello() {
  return (
    <>
      <div className="hello">
        <div className="hello__img">
          <img className="img" src="/img/hello.JPG" alt="" />
        </div>
        <div className="hello__content">
          <div className="hello__title dot">Юрий Гавриков</div>
          <div className="hello__desc">
            Я Frontend developer из Санкт-Петербурга. В настоящее время я изучаю
            веб технологии и разрабатываю свои проекты. Хочу найти работу и
            повысить свои навыки веб-разработчика.
          </div>
        </div>
      </div>
    </>
  );
}
