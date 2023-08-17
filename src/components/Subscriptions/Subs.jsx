import "./Subs.css";
import SubCards from "./SubCards";

const Subs = () => {
  return (
    <div className="subs">
      <p id="subP">Пiдписки</p>
      <div class="sub-items">
        <SubCards />
      </div>
    </div>
  );
};

export default Subs;
