import "./Skills.css";
export default function Skills() {
  return (
    <>
      <section className="skills">
        <div className="skills__hello">
          <div className="layout__title dot">Навыки</div>
          <div className="skills__hello__desc">
            Меня вдохновляет создание полезных и качественных продуктов с
            людьми, которые так же, как и я, увлечены созданием чего-то
            потрясающего.
          </div>
        </div>

        <div className="skills__items">
          <div className="skills__item">
            <div className="skills__item__title">Frontend Development</div>
            <div className="skills__item__desc">
              <p>HTML, CSS, Javascript</p>
              <p>React ( React Router / Redux / React Hooks / Webpack )</p>
              <p>Vue ( Vue Router / Pinia / Vite )</p>
              <p>Bootstrap, Tailwind, Material UI, LESS, SASS</p>
            </div>
          </div>
          <div className="skills__item">
            <div className="skills__item__title">Backend Development</div>
            <div className="skills__item__desc">
              Javascript, Node.js, Express.js, Nginx, Socket.IO
            </div>
          </div>
        </div>
        <div className="design_img">
          <img src="design/design_img/1.png" alt="" />
        </div>
      </section>
    </>
  );
}
