import classes from "./contact-page-styles/ContactPageCard.module.css";

function ContactPageCard({ card }) {
  return (
    <div className={classes.contactCard}>
      <div className={classes.contactCardIcon}>
        <ion-icon name={card.icon} />
      </div>
      <p>{card.text}</p>
    </div>
  );
}

export default ContactPageCard;
