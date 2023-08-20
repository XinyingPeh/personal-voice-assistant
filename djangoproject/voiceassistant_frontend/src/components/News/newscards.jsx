import NewsCard from "./newscard";
import { Grow, Grid } from "@mui/material/";

export default function Newscards({ articles }) {
  return (
    <div>
      <h1>List of news</h1>
      <Grow in>
        <Grid container alignItems="stretch" spacing={3} padding={5}  margin={0}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }} padding={1}>
              <NewsCard article={article} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}
