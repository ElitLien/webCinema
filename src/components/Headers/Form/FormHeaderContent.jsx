import "./FormHeaderContent.css";
import arrow from "../../../images/down-chevron.png";

function FormHeaderContent() {
  return (
    <div className="formHeaderContent">
      <h2 className="form_head_text">Форма зворотнього з'вязку</h2>
      <p>У формi нище ви можете зв`язатись з нами</p>
      <div className="imageContainer">
        <img id="down_arrow" src={arrow} alt="" />
      </div>
    </div>
  );
}

export default FormHeaderContent;
