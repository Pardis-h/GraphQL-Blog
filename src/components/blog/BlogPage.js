import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import  sanitizeHtml  from "sanitize-html";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BlogPage() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  console.log(data);

  if (loading) return <h1>Loading..</h1>;

  if (errors) return <h1>Errors..</h1>;

  return (
    <Container maxWidth="lg">
      <Grid container>
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
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={5}>
          <img
            src={data.post.coverPhoto.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            alt={data.post.author.slug}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={4}>
            <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
