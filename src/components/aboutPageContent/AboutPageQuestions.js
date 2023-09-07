import AboutPageQandA from "./AboutPageQandA";

import classes from "./about-page-styles/AboutPageQuestions.module.css";

const questionAndAswears = [
  {
    id: 1,
    question: "1. Dlaczego zacząłem programować?",
    answear: `Ok. 2 lata temu podczas studiów inżynierskich miałem pierwszy kontakt z programowaniem, poznając język Python. Pomimo braku wcześniejszego doświadczenia, te zajęcia były dla mnie satysfakcjonujące i zapoczątkowały moją pasję do kodowania.`,
    secAnswear:
      "Po konsultacji z doświadczonym programistą zdecydowałem się skupić na rozwoju w obszarze Frontend. Tworzenie interaktywnych interfejsów użytkownika mnie zafascynowało. Od tego czasu systematycznie uczę się i praktykuję, rozwijając umiejętności w programowaniu Frontend. To dla mnie pasja i nieustająca motywacja do tworzenia lepszych rozwiązań.",
  },
  {
    id: 2,
    question: "2. W jaki sposób uczyłem się programowania?",
    answear: `Naukę programowania rozpocząłem, korzystając z cennych wskazówek od doświadczonego programisty, który podzielił się ze mną sposobami efektywnego uczenia się oraz wartościowych technologii do nauki i rozwoju. Początkowo skupiłem się na różnorodnych kursach dostępnych na platformie Udemy. To właśnie dzięki nim udało mi się wypracować solidne podstawy programistyczne i rozpocząć tworzenie własnych rozwiązań oraz stron internetowych.    `,
  },
  {
    id: 3,
    question: "3. W którą stronę chciałabm się rozwijać?",
    answear: `Jako początkujący frontend developer, skupiam się na tworzeniu stron internetowych i planuję rozszerzyć swoje umiejętności na tworzenie aplikacji mobilnych. Chcę zdobyć solidne podstawy w tworzeniu responsywnych interfejsów użytkownika, a w przyszłości skupić się na frameworkach takich jak React Native, aby tworzyć aplikacje mobilne. Wierzę, że ta kombinacja umiejętności umożliwi mi spełnianie różnorodnych potrzeb klientów i użytkowników oraz pozwoli działać w dynamicznym i wpływowym obszarze technologicznym.`,
  },
];

function AboutPageQuestions() {
  return (
    <div className={classes.questionsSection}>
      {questionAndAswears.map((qa) => {
        return (
          <AboutPageQandA
            question={qa.question}
            answear={qa.answear}
            secAnswear={qa.secAnswear}
            key={qa.id}
          />
        );
      })}
    </div>
  );
}

export default AboutPageQuestions;
