import React from "react";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader customHeight={"calc(100vh - 320px)"}/>;

  if (errors) return <h2>Error..</h2>;

  return (
    <Grid
      container
      sx={{ borderRadius: 4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
    >
      {data.authors.map((author,index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link to={`/authors/${author.slug}`} style={{ display: "flex", alignItems:"center", textDecoration:"none" }}>
              <Avatar src={author.avatar.url} alt={author.slug} sx={{marginLeft:2 }} />
              <Typography component="p" variant="p">
                  {author.name}
              </Typography>
            </Link>
          </Grid>
          {
            data.authors && index !== data.authors.length - 1 && (
              <Grid item xs={12}> 
                <Divider variant="middle" />
              </Grid>
            )
          }
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
