import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="form_row">
        <input className="form_input" placeholder="ПІБ" />
      </div>
      <div className="form_row">
        <input className="form_input" placeholder="Email" />
      </div>
      <div className="form_row">
        <input className="form_input" placeholder="Номер телефону" />
      </div>
      <div className="form_row">
        <input className="form_input" placeholder="Назва об'єкту" />
      </div>
      <div className="form_row">
        <textarea
          className="txtarea"
          name="txtarea"
          cols="5"
          rows="5"
          aria-required="true"
          placeholder="Текст звернення"
        ></textarea>
      </div>
      <button className="form_button">Надiслати</button>
    </div>
  );
};

export default MainContainer;
