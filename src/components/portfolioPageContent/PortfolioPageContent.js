import PortfolioPageWebpage from "./PortfolioPageWebpage";

import classes from "./portfolio-page-styles/PortfolioPageContent.module.css";
import webpage1 from "../img/portfolioPages/webpage_1.PNG";
import webpage2 from "../img/portfolioPages/webpage_2.PNG";
import webpage3 from "../img/portfolioPages/webpage_3.PNG";
import webpage0 from "../img/portfolioPages/webpage_0.PNG";
import webpage5 from "../img/portfolioPages/webpage_5.PNG";
import webpage6 from "../img/portfolioPages/webpage_6.PNG";
import webpage7 from "../img/portfolioPages/webpage_7.PNG";
import webpage8 from "../img/portfolioPages/webpage_8.PNG";

const webpages = [
  {
    id: 0,
    photo: webpage0,
    title: "Ninja Cars ",
    text: "Ninja Cars to projekt strony e-commerce, który przybliża doświadczenie zakupowe w dealerze pojazdów. Dodano funkcję dodawania produktów do ulubionych oraz koszyka, a także zaimplementowano modale jako interaktywne okna, poprawiające wygodę użytkowania i możliwość podglądu wybranego pojazdu.",
    techUsed: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://ninja-cars.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Ninja_Cars.git",
    type: "e-commerce",
  },

  {
    id: 1,
    photo: webpage1,
    title: "MProjectGarage",
    text: "Strona typu brochure dla warsztatu samochodowego. Główne założenie to przedstawienie oferty usług, informacji o lokalizacji oraz kontaktu z warsztatem. Projekt zawierał również galerię zdjęć prezentujących profesjonalizm i obszar działań warsztatu.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://mprojektgarage.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Olbryt-warsztat-samochodowy.git",
    type: "brochure",
  },
  {
    id: 2,
    photo: webpage2,
    title: "GlowUp Studio",
    text: "trona brochure dla salonu kosmetycznego. Projekt obejmował prezentację usług kosmetycznych, informacje o personelu, a także ofertę dla klientów i wykonane zabiegi. Estetyczny design strony współgrał z charakterem branży kosmetycznej.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://glowbeautysalon.netlify.app/#",
    urlGit: "https://github.com/Kaczmarczykk97/GlowUp-beauty-salon.git",
    type: "brochure",
  },
  {
    id: 3,
    photo: webpage5,
    title: "KK - Portfolio",
    text: "Portfolio stworzone z wykorzystaniem po raz pierwszy technologii React. Głównym celem było zebrać informacje o autorze, umożliwić łatwy kontakt oraz zaprezentować różnorodne i zrealizowane projekty.",
    techUsed: ["HTML", "CSS", "JavaScript", "React"],
    url: "",
    urlGit: "https://github.com/Kaczmarczykk97/KK-Portfolio.git",
    type: "portfolio",
  },
  {
    id: 4,
    photo: webpage3,
    title: "Jolaos Gym",
    text: "Strona brochure dla siłowni, zaprojektowana w celu przyciągnięcia potencjalnych klientów. Strona zawierała informacje o dostępnych programach treningowych, godzinach otwarcia, oraz motywujące zdjęcia. Design strony miał za zadanie zachęcić do aktywnego stylu życia i korzystania z usług siłowni.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://jolaos-gym.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Gym-Jolaos.git",
    type: "brochure",
  },
  {
    id: 6,
    photo: webpage6,
    title: "Tic Tac Toe",
    text: "prosta gra w Kółko-Krzyżyk, znana również jako Tic Tac Toe. Gra umożliwia dwóm graczom rywalizację na planszy 3x3. Interaktywny interfejs pozwala na wybór pól i informuje o zwycięstwie bądź remisie. Projekt skupiał się na logice gry oraz przyjaznym dla użytkownika doświadczeniu.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://tic-tac-toe-kk97.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Tic-Tac-Toe.git",
    type: "game",
  },
  {
    id: 7,
    photo: webpage7,
    title: "Snake",
    text: "klasyczna gra w Snake, w której gracz kontroluje węża, zbierając jedzenie i zwiększając długość węża.  Projekt skupiał się na implementacji mechaniki gry, interaktywności i prostym, ale przyjemnym designie.",
    techUsed: ["HTML", "CSS", "JavaScript"],
    url: "https://snake-kk.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/Snake.git",
    type: "game",
  },

  {
    id: 8,
    photo: webpage8,
    title: "Snowy Predator ",
    text: "Sklep zimowy to projekt e-commerce, który skupia się na świecie sportów zimowych. Rozszerzono go o dodatkowe strony, w tym zakładkę 'terms', 'about' i wiele innych, aby jeszcze lepiej oddać realistyczne doświadczenie korzystania ze strony sklepu. Dzięki zastosowaniu różnych tras (routes), projekt ten stanowi kompleksową reprezentację witryny sklepu online.",
    techUsed: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://snowypredator.netlify.app/",
    urlGit: "https://github.com/Kaczmarczykk97/E-commerce_SnowyPredator.git",
    type: "e-commerce",
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
