import "./News.css";
import newsImage1 from "../../images/Rectangle 8.png";
import newsImage2 from "../../images/Rectangle_10.jpg";

function News() {
  return (
    <div className="News">
      <p id="NewsP">Новини</p>
      <div class="news-items">
        <div class="news-item">
          <img class="news_img" src={newsImage1} alt="" />
          <div class="news_text">
            <p>
              «Аватар»: найкасовіший фільм в історії повертається у кінотеатри
              перед виходом сиквела
            </p>
          </div>
        </div>
        <div class="news-item">
          <img class="news_img" src={newsImage2} alt="" />
          <div class="news_text">
            <p>
              Вийшов трейлер комедійного трилера "Як вони біжать" з Едріаном
              Броуді та Семом Роквеллом
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
