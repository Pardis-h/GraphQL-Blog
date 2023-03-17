import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CardEL({ title, slug, coverPhoto, author }) {
  return (
    <Card sx={{borderRadius:4, boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography component="p" variant="p" color="text.primary">
            {author.name}
          </Typography>
        }
      />
      <CardMedia component="img" image={coverPhoto.url} alt={slug} />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{margin: "10px"}} />
      <CardActions>
        <Link to={`blogs/${slug}`} style={{width:"100%", textDecoration: "none"}}>
          <Button variant="outlined" size="small" sx={{width:"100%", borderRadius:3 }} >مطالعه مقاله</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
