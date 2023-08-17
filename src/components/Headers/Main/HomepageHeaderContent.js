import "./HomepageHeaderContent.css";
import ukraine1 from "../../../images/ukraine 1.png";
import ukraine2 from "../../../images/ukraine (1) 1.png";

function HomepageHeaderContent() {
  return (
    <div className="HomepageHeaderContent">
      <div class="head_text">
        <h2>Ласкаво просимо в CinUA!</h2>
        <ul>
          <li>Більше 1000 фільмів в високій якості</li>
          <li>Велика аудиторія</li>
          <li>Найновіші світові хіти українською мовою</li>
          <li>Жодного фільму з росії</li>
        </ul>
        <p>Слава Україні</p>
      </div>
      <div class="images">
        <img id="ua_logo_1" src={ukraine1} alt="" />
        <img id="ua_logo_2" src={ukraine2} alt="" />
      </div>
    </div>
  );
}

export default HomepageHeaderContent;
