import "./App.css";
import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import { Routes, Route } from "react-router-dom";
import Rating from "./pages/rating/Rating";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Years from "./pages/years/Years";
import Form from "./pages/form/Form";
import MainHeader from "./components/Headers/Main/MainHeader";
import Reviews from "./pages/main/Reviews";
import Soon from "./pages/main/Soon";
import News from "./pages/main/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/years" element={<Years />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <MainHeader />
      <Reviews />
      <Soon />
      <News />
      <Footer />
    </div>
  );
}

export default App;
