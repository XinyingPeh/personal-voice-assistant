import NewsCard from "./newscard"
export default function Newscards({ articles }) {
    return (
        <div>
            <h1>List of news</h1>
            {articles.map((article, i) => (
                <NewsCard />
            ))}
        </div>
    );
}