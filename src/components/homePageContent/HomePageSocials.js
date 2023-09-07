import classes from "./home-page-styles/HomePageSocials.module.css";

function HomePageSocials() {
  return (
    <div className={classes.socials}>
      <a
        href="https://www.facebook.com/kamil.kaczmarczyk.3"
        target="blank"
        className={classes.socialMedia}
      >
        <ion-icon name="logo-facebook"></ion-icon>
      </a>

      <a
        href="https://www.linkedin.com/in/kamil-kaczmarczyk-69b540245/"
        target="blank"
        className={classes.socialMedia}
      >
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>

      <a
        href="https://github.com/Kaczmarczykk97"
        target="blank"
        className={classes.socialMedia}
      >
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </div>
  );
}

export default HomePageSocials;
