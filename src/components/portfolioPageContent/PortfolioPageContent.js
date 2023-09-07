import PortfolioPageWebpage from "./PortfolioPageWebpage";

import classes from "./portfolio-page-styles/PortfolioPageContent.module.css";
import webpage1 from "../img/portfolioPages/webpage_1.PNG";
import webpage2 from "../img/portfolioPages/webpage_2.PNG";
import webpage3 from "../img/portfolioPages/webpage_3.PNG";
import webpage0 from "../img/portfolioPages/webpage_0.PNG";
import webpage5 from "../img/portfolioPages/webpage_5.PNG";
import webpage6 from "../img/portfolioPages/webpage_6.PNG";
import webpage7 from "../img/portfolioPages/webpage_7.PNG";

const webpages = [
  {
    id: 0,
    photo: webpage0,
    title: "Ninja Cars ",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://ninja-cars.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Ninja_Cars.git",
    type: "e-commerce",
  },
  {
    id: 1,
    photo: webpage1,
    title: "MProjectGarage",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://mprojektgarage.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Olbryt-warsztat-samochodowy.git",
    type: "brochure",
  },
  {
    id: 2,
    photo: webpage2,
    title: "GlowUp Studio",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://glowbeautysalon.netlify.app/#",
    urlGit: "https://github.com/Kaczmarczykk97/GlowUp-beauty-salon.git",
    type: "brochure",
  },
  {
    id: 3,
    photo: webpage5,
    title: "KK - Portfolio",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript", "React"],
    url: "",
    urlGit: "https://github.com/Kaczmarczykk97/KK-Portfolio.git",
    type: "portfolio",
  },
  {
    id: 4,
    photo: webpage3,
    title: "Jolaos Gym",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://jolaos-gym.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Gym-Jolaos.git",
    type: "brochure",
  },
  {
    id: 6,
    photo: webpage6,
    title: "Tic Tac Toe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://tic-tac-toe-kk97.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Tic-Tac-Toe.git",
    type: "game",
  },
  {
    id: 7,
    photo: webpage7,
    title: "Snake",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://snake-kk.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Snake.git",
    type: "game",
  },
];

function PortfolioPageContent() {
  return (
    <div className={classes.portfolioContainer}>
      <h2 data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
        Portfolio
      </h2>
      <div
        className={classes.portfolioWrapper}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <h3 className={classes.headingH3}>E-commerce</h3>
        {webpages.map((webpage) => {
          if (webpage.type === "e-commerce") {
            return <PortfolioPageWebpage key={webpage.id} webpage={webpage} />;
          }
          return "";
        })}
        <h3 className={classes.headingH3}>Portfolio</h3>
        {webpages.map((webpage) => {
          if (webpage.type === "portfolio") {
            return <PortfolioPageWebpage key={webpage.id} webpage={webpage} />;
          }
          return "";
        })}
        <h3 className={classes.headingH3}>Brochure</h3>
        {webpages.map((webpage) => {
          if (webpage.type === "brochure") {
            return <PortfolioPageWebpage key={webpage.id} webpage={webpage} />;
          }
          return "";
        })}
        <h3 className={classes.headingH3}>Games</h3>
        {webpages.map((webpage) => {
          if (webpage.type === "game") {
            return <PortfolioPageWebpage key={webpage.id} webpage={webpage} />;
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default PortfolioPageContent;
