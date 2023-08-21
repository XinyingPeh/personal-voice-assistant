import NewsCard from "./newscard";
import { Grow, Grid, Typography } from "@mui/material/";

export default function Newscards({ articles }) {
  return (
    <div>
      <Grow in>
        <Grid container alignItems="stretch" spacing={2} sx={{ margin: '5px', padding: '80px'}}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={4} md={4} lg={3} style={{ display: "flex" }} padding={1}>
              <NewsCard article={article} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}
