import ContactPageCard from "./ContactPageCard";

import classes from "./contact-page-styles/ContactPageContent.module.css";

const cards = [
  { id: 1, icon: "mail", text: "kamil.kaczmarczykk@gmail.com" },
  { id: 2, icon: "call", text: "+48 577 521 605" },
];

function ContactPageContent() {
  return (
    <>
      <div className={classes.contactWrapper}>
        <h2 data-aos="fade-down" data-aos-duration="1500">
          Contact <span>Me</span>
        </h2>
        <div
          className={classes.contactContainer}
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          {cards.map((card) => {
            return <ContactPageCard card={card} key={card.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ContactPageContent;
