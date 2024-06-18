import "./Education.css";
export default function Education() {
  return (
    <>
      <div className="education">
        <div className="education__hello">
          <div className="layout__title dot">Образование</div>
          <div className="education__hello__desc">
            Всю свою жизнь я руководствовался твердой верой в то, что
            образование важно. Я стараюсь узнавать что-то новое каждый день.
          </div>
        </div>

        <div className="education__items">
          <div className="education__item">
            <div className="education__item__title">Frontend разработчик</div>
            <div className="education__item__desc">
              <p>2020-2021</p>
              <p>LoftSchool - Школа онлайн обучения IT профессиям</p>
            </div>
          </div>
          <div className="education__item">
            <div className="education__item__title">JS: React</div>
            <div className="education__item__desc">
              <p>2021-2022</p>
              <p>Хекслет — онлайн-школа программирования</p>
            </div>
          </div>
          <div className="education__item">
            <div className="education__item__title">
              Современный JavaScript + Vue
            </div>
            <div className="education__item__desc">
              <p>2022-2023</p>
              <p>www.udemy.com</p>
            </div>
          </div>
        </div>
        <div className="design_img">
          <img src="design/design_img/3.png" alt="" />
        </div>
      </div>
    </>
  );
}
