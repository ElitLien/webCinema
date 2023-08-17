import "./YearsHeaderContent.css";
import calendar from "../../../images/calendar.png";

function YearsHeaderContent() {
  return (
    <div className="yearsHeaderContent">
      <div class="years_head_text">
        <h2>Фільми за роками виходу</h2>
      </div>
      <div className="imageContainer">
        <img id="calendar" src={calendar} alt="" />
      </div>
    </div>
  );
}

export default YearsHeaderContent;
