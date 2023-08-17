import "./Soon.css";
import poster1 from "../../images/image 3.png";
import poster2 from "../../images/image 4.png";
import poster3 from "../../images/image 5.png";

function Soon() {
  return (
    <div className="Soon">
      <p id="soonP">Скоро</p>
      <div class="soon-items">
        <div class="soon-item">
          <img class="soon_img" src={poster1} alt="" />
          <div class="soon_text">
            <p class="soon_text_item">Чорний Адам</p>
            <p class="soon_bottom_text">20 жовтня</p>
          </div>
        </div>
        <div class="soon-item">
          <img class="soon_img" src={poster2} alt="" />
          <div class="soon_text">
            <p class="soon_text_item">Хелловін. Кінець</p>
            <p class="soon_bottom_text">13 жовтня</p>
          </div>
        </div>
        <div class="soon-item">
          <img class="soon_img" src={poster3} alt="" />
          <div class="soon_text">
            <p class="soon_text_item">
              Чорна пантера:
              <br />
              Ваканда назавжди
            </p>
            <p class="soon_bottom_text">10 листопада</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soon;
