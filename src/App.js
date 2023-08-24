import "./App.css";
import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import { Routes, Route } from "react-router-dom";
import Rating from "./pages/rating/Rating";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Years from "./pages/years/Years";
import Form from "./pages/form/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/webCinema" element={<Main />} />
        <Route path="/webCinema/rating" element={<Rating />} />
        <Route path="/webCinema/subscriptions" element={<Subscriptions />} />
        <Route path="/webCinema/years" element={<Years />} />
        <Route path="/webCinema/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
