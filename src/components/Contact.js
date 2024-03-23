import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Contact = () => {
  return (
    <Fragment>
      <Box
        height={300}
        maxWidth={800}
        display="flex"
        margin="auto"
        paddingTop={3}
      >
        <Typography variant="h5" gutterBottom>
          <b>Contacto</b>
        </Typography>
      </Box>
      <Box margin="auto" maxWidth={800}>
        <Divider sx={{ borderColor: "#293340" }}></Divider>
      </Box>
    </Fragment>
  );
};

export default Contact;
