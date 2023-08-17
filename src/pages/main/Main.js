import "./Main.css";
import MainHeader from "../../components/Headers/Main/MainHeader";
import Reviews from "./Reviews";
import Soon from "./Soon";
import News from "./News";
import Footer from "../../components/Footer";

function Main() {
  return (
    <div className="Main">
      <MainHeader />
      <Reviews />
      <Soon />
      <News />
      <Footer />
    </div>
  );
}

export default Main;
