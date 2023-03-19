import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

function CommentForm({ slug }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

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
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        ></TextField>
      </Grid>
      <Grid item xs={12} m={2}>
        <Button variant="contained">ارسال</Button>
      </Grid>
    </Grid>
  );
}

export default CommentForm;
