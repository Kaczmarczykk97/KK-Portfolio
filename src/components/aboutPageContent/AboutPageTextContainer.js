import AboutPageCard from "./AboutPageCard";

import classes from "./AboutPageTextContainer.module.css";

function AboutPageTextContainer(props) {
  return (
    <div className={classes.textContainer}>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut
        nostrum dolorem excepturi repellendus laboriosam cum sunt magnam!
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
