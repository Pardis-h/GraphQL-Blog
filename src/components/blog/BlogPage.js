import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import  sanitizeHtml  from "sanitize-html";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../shared/Loader";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogPage() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  console.log(data);

  if (loading) return <Loader customHeight={"calc(100vh - 190px)"}/>;

  if (errors) return <h1>Errors..</h1>;

  return (
    <Container maxWidth="lg">
      <Grid container paddingX={3}>
        <Grid
          item
          xs={12}
          mt={8}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="h2"
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            {data.post.title}
          </Typography>
          <ArrowBackIcon onClick={() => navigate(-1)} sx={{cursor: "pointer"}} />
        </Grid>
        <Grid item xs={12} mt={5}>
          <img
            src={data.post.coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} >
          <Link to={`/authors/${data.post.author.slug}`} style={{textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Avatar
              src={data.post.author.avatar.url}
              alt={data.post.author.slug}
              sx={{ width: 80, height: 80, marginLeft: 2 }}
            />
            <Box component="div">
                <Typography component="p" variant="h5" fontWeight={700} color="text.primary">
                  {data.post.author.name}
                </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {data.post.author.field}
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} mt={4}>
            <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}></div>
        </Grid>
        <Grid item xs={12} mt={4}>
          <CommentForm slug={slug}/>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Comments slug={slug}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
