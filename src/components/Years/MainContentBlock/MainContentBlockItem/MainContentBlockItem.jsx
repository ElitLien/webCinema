import "./MainContentBlockItem.css";

const MainContentBlockItem = ({ itemTitle, itemLink }) => {
  return (
    <div className="mainContentBlockItem">
      <img className="year_img" src={itemLink} alt="" />
      <div className="year_text">
        <p className="year_text_item">{itemTitle}</p>
      </div>
    </div>
  );
};

export default MainContentBlockItem;
