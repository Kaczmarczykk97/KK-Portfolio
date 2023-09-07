import classes from "./portfolio-page-styles/PortfolioPageWebpage.module.css";

function PortfolioPageWebpage({ webpage }) {
  return (
    <div className={classes.webpageContainer}>
      <div className={classes.webpagePhotoContainer}>
        <img
          src={webpage.photo}
          alt={webpage.title}
          className={classes.webpagePhoto}
        />
      </div>
      <div className={classes.webpageTextContainer}>
        <h3>{webpage.title}</h3>
        <p>{webpage.text}</p>
        <div className={classes.webpageTechUsed}>
          {webpage.techUsed.map((tech) => {
            return <p key={Math.random()}>{tech}</p>;
          })}
        </div>

        <div className={classes.webpageCode}>
          <a href={webpage.urlGit} target="blank">
            <ion-icon name="logo-github"></ion-icon>
            <p>Code</p>
          </a>
          <a href={webpage.url} target="blank">
            <ion-icon name="play-outline"></ion-icon>
            <p>Live Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPageWebpage;
