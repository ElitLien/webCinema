import cin_logo2 from "../images/Footer/cinua_logo2.png";
import telegram from "../images/Footer/telegram1.png";
import facebook from "../images/Footer/free-icon-facebook-1458021.png";
import twitter from "../images/Footer/free-icon-twitter-1458121.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div class="connections">
        <p id="ConnectionsP">Номер команди підтримки: +380990461584</p>
        <div className="logoContainer">
          <img id="footer_logo" src={cin_logo2} alt="" />
        </div>
        <div class="social_networks">
          <img src={telegram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div class="copyright">
        <p class="copyrightP"> Copyright - 2022</p>
      </div>
    </div>
  );
}

export default Footer;
