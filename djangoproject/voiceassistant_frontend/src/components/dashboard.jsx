import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import ApplicationCards from "./applicationcards";
import Newscards from "./News/newscards";
import wordsToNumbers from "words-to-numbers";

export default function Dashboard() {
    // Set state
    const [ newsArticles, setNewsArticles ] = useState([]);
    const [activeArticle, setNewsArticle] = useState(-1);
    // Alan ai voice command button
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_KEY,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setNewsArticle(-1);
                } else if (command === 'highlight') {
                    setNewsArticle((prevActiveArticle) => prevActiveArticle + 1); 
                } else if(command === 'open') {
                    console.log(number)
                    console.log(articles[number].url)
                    window.open(articles[number].url, '_blank');
                }
            }
        })
    }, []);
 
  return (
    <>
      <ApplicationCards />
      <Newscards articles={newsArticles} activeArticle={activeArticle} />
    </>
  );
}
