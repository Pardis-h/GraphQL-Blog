import React from "react";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";

function AuthorPage() {
  const { slug } = useParams();
  // console.log(slug);

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  //   console.log(data);
  //   const { author } = data;
  if (loading) return <h1>Loading...</h1>;

  if (errors) return <h1>Error...</h1>;

  return (
    <Container maxWidth="lg">
      <Grid container mt={4}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            alt={slug}
            sx={{ width: "250px", height: "250px", marginBottom: 2 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h6" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {data.author.posts.map(post =>(
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
