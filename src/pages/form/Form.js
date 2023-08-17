import Footer from "../../components/Footer";
import MainContainerOuter from "../../components/Form/MainContainerOuter";
import FormHeader from "../../components/Headers/Form/FormHeader";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <FormHeader />
      <MainContainerOuter />
      <Footer />
    </div>
  );
}

export default Form;
