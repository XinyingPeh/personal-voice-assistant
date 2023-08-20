import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMediaClassKey,
  Button,
  Typography,
  CardMedia,
  CardHeader,
  Box,
} from "@mui/material";
export default function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) {
  return (
    <>
      <Card>
        <CardActionArea>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 350 },
              margin: 'auto'
            }}
            
            alt={title}
            src={urlToImage}
          />
          <CardHeader title={title} />
          <div>
            <Typography variant="body2" color="textSecondary" component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              {source.name}
            </Typography>
          </div>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography
            variant="h5"
            color="textSecondary"
            component="h2"
          ></Typography>
        </CardActions>
      </Card>
    </>
  );
}
