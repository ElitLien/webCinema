import MainContainerInner from "./MainContainerInner/MainContainerInner";
import "./MainContainerOuter.css";

const MainContainerOuter = () => {
  return (
    <div className="mainContainerOuter">
      <MainContainerInner />
    </div>
  );
};

export default MainContainerOuter;
