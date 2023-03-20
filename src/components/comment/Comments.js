import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";

function Comments({ slug }) {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  console.log(data);

  if (loading) return <Loader />;

  if (errors) return <h1>Errors...</h1>;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 3,
        py: 2,
        mt: 4,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          نظرات
        </Typography>
      </Grid>

      {data.comments.map((comment) => (
        <Grid
          item
          key={comment.id}
          xs={12}
          m={2}
          border="1px silver solid"
          borderRadius={2}
          padding={2}
          mb={3}
        >
          <Box component="div" display="flex" alignItems="center">
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component='span' variant="p" fontWeight={700} mr={2}>{comment.name}</Typography>
          </Box>
          <Typography component='p' variant="p" fontWeight={500} mt={3}>{comment.text}</Typography>

        </Grid>
      ))}
    </Grid>
  );
}

export default Comments;
