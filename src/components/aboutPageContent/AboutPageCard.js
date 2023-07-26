import classes from "./AboutPageCard.module.css";

function AboutPageCard(props) {
  return (
    <div className={classes.card}>
      <h3>{props.title}</h3>
      {props.logos.map((logo) => {
        return (
          <div className={classes.cardItem} key={logo.id}>
            <img src={logo.img} alt={logo.title} className={classes.logoSize} />
            <p>{logo.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AboutPageCard;
