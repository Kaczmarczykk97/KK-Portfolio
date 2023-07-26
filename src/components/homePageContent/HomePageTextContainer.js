import HomePageTextEffect from "./HomePageTextEffect";
import HomePageSocials from "./HomePageSocials";
import HomePageBtn from "./HomePageBtn";

import classes from "./HomePageTextContainer.module.css";

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta
        ipsam qui nesciunt ex eaque facere veniam doloribus placeat.
      </p>
      <HomePageSocials />
      <HomePageBtn />
    </div>
  );
}

export default HomePageTextContainer;
