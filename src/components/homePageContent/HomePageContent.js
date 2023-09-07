import classes from "./home-page-styles/HomePageContent.module.css";

import HomePagePhoto from "./HomePagePhoto";
import HomePageTextContainer from "./HomePageTextContainer";

function HomePageContent() {
  return (
    <>
      <div className={classes.homePageWrapper}>
        <HomePageTextContainer />
        <HomePagePhoto />
      </div>
    </>
  );
}

export default HomePageContent;
