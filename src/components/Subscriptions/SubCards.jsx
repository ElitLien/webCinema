import "./SubCards.css";
import { cardsInfo } from "../../consts/cardsInfo";
import payImage from "../../images/subscription.png";

const SubCards = () => {
  return (
    <>
      {cardsInfo.map(({ title, description, price }) => (
        <div className="subCard">
          <div class="sub_info">
            <h3>{title}</h3>
            <p class="sub_name">{description}</p>
            <div class="icont_container">
              <img class="sub_icon" src={payImage} />
            </div>
            <div class="sub_text">
              <p class="sub_price">{price}</p>
              <button class="sub_btn">Придбати!</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubCards;
