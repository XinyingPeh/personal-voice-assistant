import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
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
              margin: "auto",
            }}
            alt={title}
            src={
              urlToImage ||
              "https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
            }
          />
          <CardHeader title={title} />
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{ paddingLeft: "15px" }}
            >
              {new Date(publishedAt).toDateString()} | {source.name}
            </Typography>
          </div>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Button size="small" color="primary">
            Read More
          </Button>
          <Typography variant="body2" color="textSecondary" component="p">
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
