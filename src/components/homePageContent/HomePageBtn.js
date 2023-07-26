import classes from "./HomePageBtn.module.css";
import CV from "../img/Kamil_Kaczmarczyk_CV.pdf";

function HomePageBtn() {
  return (
    <div className={classes.btnContainer}>
      <button className={classes.homePageBtn}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <a href={CV} download="CV">
          Download CV
        </a>
      </button>
    </div>
  );
}

export default HomePageBtn;
