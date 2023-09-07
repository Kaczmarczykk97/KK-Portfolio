import { useState } from "react";

import classes from "./home-page-styles/HomePagePhoto.module.css";
import homePhoto from "../img/homePage.png";

function HomePagePhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={classes.photoContainer}
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className={classes.photoWrapper}>
        <img
          src={homePhoto}
          alt="Kamil Kaczmarczyk portrait"
          className={classes.portrait}
          onLoad={() => {
            setLoaded(true);
          }}
        ></img>
        {loaded ? (
          <div
            className={classes.backgroundPhoto}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          ></div>
        ) : null}
      </div>
    </div>
  );
}

export default HomePagePhoto;
