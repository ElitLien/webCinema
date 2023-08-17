import "./SubscriptionsHeaderContent.css";
import sub from "../../../images/subscribe.png";

function SubscriptionsHeaderContent() {
  return (
    <div className="subscriptionsHeaderContent">
      <div class="subscriptions_head_text">
        <h2 id="h2_head">Пiдписки</h2>
        <p id="p_head">Знизу ви можете обрати тарифний план</p>
        <img id="sub_image" src={sub} alt="" />
      </div>
    </div>
  );
}

export default SubscriptionsHeaderContent;
