import AboutPageCard from "./AboutPageCard";

import classes from "./about-page-styles/AboutPageTextContainer.module.css";

function AboutPageTextContainer(props) {
  return (
    <div className={classes.textContainer}>
      <h2>About Me</h2>
      <p>
        Jestem początkującym frontend developerem, który opanował sztukę CSS i
        JavaScript. Obecnie skupiam się na rozwijaniu umiejętności w React, aby
        tworzyć jeszcze bardziej dynamiczne i interaktywne interfejsy. Zapraszam
        do zapoznania się z moim portfolio.
      </p>
      <div className={classes.cardsContainer}>
        {props.cards.map((card) => {
          return (
            <AboutPageCard
              key={card.id}
              title={card.title}
              logos={card.logos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutPageTextContainer;
