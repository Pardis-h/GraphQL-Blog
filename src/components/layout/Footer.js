import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
        fontFamily="YekanBakh"
      >
        پروژه وبلاگ با GraphQL | پردیس حقدوست
      </Typography>
    </footer>
  );
}

export default Footer;
