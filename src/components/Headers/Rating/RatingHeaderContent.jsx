import "./RatingHeaderContent.css";
import ten from "../../../images/number-10.png";
import imdb from "../../../images/free-icon-imdb-5977585.png";

function RatingHeaderContent() {
  return (
    <div className="RatingHeaderContent">
      <div class="rating_head_text">
        <h2>Топ 10 фільмів за версією IMDB</h2>
        <div className="rating_images">
          <img id="ten_img" src={ten} alt="" />
          <img id="imdb_img" src={imdb} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RatingHeaderContent;
