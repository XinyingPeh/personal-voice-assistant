import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import ApplicationCards from "./applicationcards";
import Newscards from "./News/newscards";


export default function Dashboard() {
    // Set state
    const [ newsArticles, setNewsArticles ] = useState([]);

    // Alan ai voice command button
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_KEY,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, []);
 
  return (
    <>
      <ApplicationCards />
      <Newscards articles={newsArticles} />
    </>
  );
}
