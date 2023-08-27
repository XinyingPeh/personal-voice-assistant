import NewsCard from "./newscard";
import { Grow, Grid } from "@mui/material";

export default function Newscards({ articles, activeArticle }) {
  return (
    <div>
      <Grow in>
        <Grid container alignItems="stretch" spacing={2} sx={{ margin: '5px', padding: '50px'}}>
          {articles.map((article, i) => (
            <Grid key={article.url} item xs={12} sm={4} md={4} lg={3} style={{ display: "flex" }} padding={1}>
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}
