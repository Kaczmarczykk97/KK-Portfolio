import AboutPageQandA from "./AboutPageQandA";

import classes from "./AboutPageQuestions.module.css";

const questionAndAswears = [
  {
    id: 1,
    question: "Question number 1 ?",
    answear: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati corporis tempore laborum dicta natus reprehenderit aliquam placeat eum velit. Molestiae maxime mollitia labore nam`,
  },
  {
    id: 2,
    question: "Question number 2 ?",
    answear: `Przykładowey teksr który nie ma żadnego zastosowania jets tylko po to żeby sprawdzić czy dizała i tylko tyle i ąz po tyle elo pozdro siema`,
  },
  {
    id: 3,
    question: "Question number 3 ?",
    answear: `Przykładowey teksr który nie ma żadnego zastosowania jets tylko po to żeby sprawdzić czy dizała i tylko tyle i ąz po tyle elo pozdro siema`,
  },
];

function AboutPageQuestions() {
  return (
    <div
      className={classes.questionsSection}
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      {questionAndAswears.map((qa) => {
        return (
          <AboutPageQandA
            question={qa.question}
            answear={qa.answear}
            key={qa.id}
          />
        );
      })}
    </div>
  );
}

export default AboutPageQuestions;
