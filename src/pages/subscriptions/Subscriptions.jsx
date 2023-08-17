import "./Subscriptions.css";
import SubscriptionsHeader from "../../components/Headers/Subscriptions/SubscriptionsHeader";
import Footer from "../../components/Footer";
import Subs from "../../components/Subscriptions/Subs";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <SubscriptionsHeader />
      <Subs />
      <Footer />
    </div>
  );
};

export default Subscriptions;
