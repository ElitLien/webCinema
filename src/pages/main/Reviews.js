import "./Reviews.css";
import stars from "../../images/Main/rating 1.png";

function Reviews() {
  return (
    <div className="Reviews">
      <p id="reviewsP">Рецензії</p>
      <div class="reviews-items">
        <div class="reviews-item">
          <img class="rating_img" src={stars} alt="" />
          <p class="reviewsP">
            Чудовий сайт. Фільми в крутій якості і доволі приємна аудиторія в
            коментарях
          </p>
        </div>
        <div class="reviews-item">
          <img class="rating_img" src={stars} alt="" />
          <p class="reviewsP">
            Команда підтримки реагує дуже шивдко, і за можливості можна
            поговорити про кіно
          </p>
        </div>
        <div class="reviews-item">
          <img class="rating_img" src={stars} alt="" />
          <p class="reviewsP">
            Дизайн сайту дуже приємний. Так, він не ідеальний, але на досить
            хорошому рівні{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
