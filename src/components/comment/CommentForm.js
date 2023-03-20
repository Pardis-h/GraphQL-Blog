import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendPressed, setSendPressed] = useState(false);

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  console.log(data);

  const sendHandler = () => {
    if(errors){
      toast.warn("مشکلی پیش آمد.. دوباره امتحان کنید!", {position: "top-center"})
    }
    else if (name && email && text) {
      sendComment();
      setSendPressed(true);
    }else{
      toast.warn("فرم را پر کنید", {position: "top-center"})
    }
  }
  console.log(data);
  
  if(data && sendPressed){
    toast.success("پیام شما ارسال ، منتظر تایید باشید.",{position: "top-center"});
    setSendPressed(false);
  }

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
          fullWidth
          sx={{
            "& .MuiFormLabel-root": {
              transformOrigin: "right !important",
              left: "inherit !important",
              right: "1.75rem !important",
            },
            "& .MuiFormLabel-root.Mui-focused": {
              left: "inherit !important",
              right: "1.75rem !important",
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
            },
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiFormLabel-root": {
              transformOrigin: "right !important",
              left: "inherit !important",
              right: "1.75rem !important",
            },
            "& .MuiFormLabel-root.Mui-focused": {
              left: "inherit !important",
              right: "1.75rem !important",
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiFormLabel-root": {
              transformOrigin: "right !important",
              left: "inherit !important",
              right: "1.75rem !important",
            },
            "& .MuiFormLabel-root.Mui-focused": {
              left: "inherit !important",
              right: "1.75rem !important",
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
            },
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        ></TextField>
      </Grid>
      <Grid item xs={12} m={2}>
        {
          loading ? <Button variant="contained" disabled >در حال ارسال...</Button> : <Button variant="contained" onClick={sendHandler}>ارسال</Button>
        }
      </Grid>
      <ToastContainer/>
    </Grid>
  );
}

export default CommentForm;
