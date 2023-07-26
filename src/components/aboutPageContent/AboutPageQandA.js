import { useState } from "react";

import classes from "./AboutPageQandA.module.css";

function AboutPageQandA(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuestion = () => {
    setIsOpen(() => !isOpen);
  };
  return (
    <div className={classes.questionContainer}>
      <div className={classes.question}>
        <div className={`${classes.iconContainer} ${isOpen && classes.open}`}>
          <ion-icon name="caret-down-sharp" onClick={openQuestion} />
        </div>
        <p>{props.question}</p>
      </div>

      {isOpen && (
        <div>
          <p>{props.answear}</p>
        </div>
      )}
    </div>
  );
}

export default AboutPageQandA;
