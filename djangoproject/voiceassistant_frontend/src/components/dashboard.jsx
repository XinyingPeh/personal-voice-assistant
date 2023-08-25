import { useEffect, useState, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import ApplicationCards from "./applicationcards";
import Newscards from "./News/newscards";
import wordsToNumbers from "words-to-numbers";

export default function Dashboard() {
  // use Alan ai client API
  const alanBtnRef = useRef({}).current;
  // Set state
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setNewsArticle] = useState(-1);

  // Alan ai voice command button
  useEffect(() => {
    alanBtnRef.btnInstance = alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setNewsArticle(-1);
        } else if (command === "highlight") {
          setNewsArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          console.log(number);
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;

          if (parsedNumber > articles.length || parsedNumber <= 0) {
            alanBtnRef.btnInstance.playText("Please provide a valid article number.");
          } else {
            const article = articles[parsedNumber - 1];

            if (article && article.url) {
              window.open(article.url, "_blank");
              alanBtnRef.btnInstance.playText("Opening...");
            } else {
              alanBtnRef.btnInstance.playText("Sorry, the selected article does not have a valid URL.");
            }
          }
        }
      },
    });
  }, []);

  return (
    <>
      <ApplicationCards />
      <Newscards articles={newsArticles} activeArticle={activeArticle} />
    </>
  );
}
