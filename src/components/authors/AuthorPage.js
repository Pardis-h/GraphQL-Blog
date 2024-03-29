import React from "react";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader customHeight={"calc(100vh - 190px)"}/>;

  if (errors) return <h1>Error...</h1>;

  return (
    <Container maxWidth="lg" >
      <Grid container mt={8} paddingX={3}>
        <Grid item display="flex" flex={1} justifyContent="end">
          <ArrowBackIcon onClick={() => navigate(-1)} sx={{cursor: "pointer"}}/>
        </Grid>
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
