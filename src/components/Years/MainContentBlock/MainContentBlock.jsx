import "./MainContentBlock.css";
import MainContentBlockItem from "./MainContentBlockItem/MainContentBlockItem";
import { yearsArray } from "../../../consts/yearsInfo";

const MainContentBlock = () => {
  return (
    <div className="contentWrapper">
      {yearsArray.map(({ year, films }) => (
        <div className="year">
          <p id="yearP">{year}</p>
          <div className="year-items">
            {films.map(({ title, link }) => (
              <MainContentBlockItem itemTitle={title} itemLink={link} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContentBlock;
