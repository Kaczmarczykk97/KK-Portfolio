import PortfolioPageWebpage from "./PortfolioPageWebpage";

import classes from "./PortfolioPageContent.module.css";
import webpage1 from "../img/portfolioPages/webpage_1.PNG";
import webpage2 from "../img/portfolioPages/webpage_2.PNG";
import webpage3 from "../img/portfolioPages/webpage_3.PNG";
import webpage4 from "../img/portfolioPages/webpage_4.PNG";
import webpage5 from "../img/portfolioPages/webpage_5.PNG";

const webpages = [
  {
    id: 1,
    photo: webpage1,
    title: "MProjectGarage",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://mprojektgarage.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Olbryt-warsztat-samochodowy.git",
  },
  {
    id: 2,
    photo: webpage2,
    title: "GlowUp Studio",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://glowbeautysalon.netlify.app/#",
    urlGit: "https://github.com/Kaczmarczykk97/GlowUp-beauty-salon.git",
  },
  {
    id: 3,
    photo: webpage5,
    title: "KK - Portfolio",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript", "React"],
    url: "",
    urlGit: "",
  },
  {
    id: 4,
    photo: webpage3,
    title: "Jolaos Gym",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://jolaos-gym.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Gym-Jolaos.git",
  },
  {
    id: 5,
    photo: webpage4,
    title: "PS - Fotografia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapientenemo, excepturi nostrum recusandae numquam",
    techUsed: ["HTML", "CSS", "SASS"],
    url: "https://psfoto.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/PS-Fotografia.git",
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
        {webpages.map((webpage) => {
          return <PortfolioPageWebpage key={webpage.id} webpage={webpage} />;
        })}
      </div>
    </div>
  );
}

export default PortfolioPageContent;
