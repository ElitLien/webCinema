import cin_logo1 from "../images/cinua_logo1.png";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-content">
      <div className="sections">
        <Link class="nav_link" to="/">
          Головна
        </Link>
        <Link class="nav_link" to="/rating">
          Топ 10
        </Link>
        <Link class="nav_link" to="/subscriptions">
          Підписки
        </Link>
        <Link class="nav_link" to="/years">
          Роки
        </Link>
        <Link class="nav_link" to="/form">
          Зв'язатись
        </Link>
      </div>
      <input placeholder="Пошук..." />
      <img id="logo_1" src={cin_logo1} alt="" />
    </div>
  );
}

export default Nav;
