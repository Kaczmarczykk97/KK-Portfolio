import HomePageTextEffect from "./HomePageTextEffect";
import HomePageSocials from "./HomePageSocials";
import HomePageBtn from "./HomePageBtn";

import classes from "./home-page-styles/HomePageTextContainer.module.css";

function HomePageTextContainer() {
  return (
    <div
      className={classes.homePageTextContainer}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h2 className={classes["heading-h2"]}>Hello, I'm</h2>
      <h1 className={classes["heading-h1"]}>Kamil Kaczmarczyk</h1>
      <HomePageTextEffect />
      <p className={classes.text}>
        "Nie martw się jeśli nie działa to dobrze - gdyby wszystko działało, nie
        miałbyś pracy"" - Prawo Mosher'a
      </p>
      <HomePageSocials />
      <HomePageBtn />
    </div>
  );
}

export default HomePageTextContainer;
