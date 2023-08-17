import "./Movies.css";
import { moviesArray } from "../../consts/topTen";

const Movies = () => {
  return (
    <div className="Movies">
      {moviesArray.map(({ title, link }) => (
        <div className="Movie">
          <p id="text">{title}</p>
          <div class="videoContainer">
            <iframe
              width="600"
              height="300"
              src={link}
              title="*"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
