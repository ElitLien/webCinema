import "./Rating.css";
import RatingHeader from "../../components/Headers/Rating/RatingHeader";
import Footer from "../../components/Footer";
import Movies from "../../components/Rating/Movies";

const Rating = () => {
  return (
    <div className="Rating">
      <RatingHeader />
      <Movies />
      <Footer />
    </div>
  );
};

export default Rating;
