import Footer from "../../components/Footer";
import YearsHeader from "../../components/Headers/Years/YearsHeader";
import "./Years.css";
import MainContent from "../../components/Years/MainContent";

function Years() {
  return (
    <div className="years">
      <YearsHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Years;
