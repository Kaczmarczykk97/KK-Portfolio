import AboutPageQuestions from "./AboutPageQuestions";
import AboutPagePhotoContainer from "./AboutPagePhotoContainer";
import AboutPageTextContainer from "./AboutPageTextContainer";

import classes from "./AboutPageContent.module.css";

import me from "../../components/img/homePage.png";
import HTML_Logo from "../../components/img/HTML5_Logo.png";
import CSS_Logo from "../../components/img/CSS3_Logo.png";
import JS_Logo from "../../components/img/JavaScript_Logo.png";
import SASS_Logo from "../../components/img/SASS_Logo.png";
import REACT_Logo from "../../components/img/React_Logo.png";
import ROUTER_Logo from "../../components/img/Router_Logo.png";
import REDUX_Logo from "../../components/img/Redux_Logo.png";
import TS_Logo from "../../components/img/TypeScript_Logo.png";

const cards = [
  {
    id: 1,
    title: "Skills",
    logos: [
      { id: 1, title: "HTML 5", img: HTML_Logo },
      { id: 2, title: "CSS3", img: CSS_Logo },
      { id: 3, title: "SASS", img: SASS_Logo },
      { id: 4, title: "JS", img: JS_Logo },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    logos: [
      { id: 1, title: "REACT", img: REACT_Logo },
      { id: 2, title: "ROUTER", img: ROUTER_Logo },
      { id: 3, title: "REDUX", img: REDUX_Logo },
      { id: 4, title: "TS", img: TS_Logo },
    ],
  },
];

function AboutPageContent() {
  return (
    <div className={classes.aboutContainer}>
      <div
        className={classes.aboutWrapper}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <AboutPagePhotoContainer portrait={me} />
        <AboutPageTextContainer cards={cards} />
      </div>
      <AboutPageQuestions key={cards.id} />
    </div>
  );
}

export default AboutPageContent;
