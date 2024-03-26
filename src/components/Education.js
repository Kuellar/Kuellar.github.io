import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Education = () => {
  return (
    <Fragment>
      <Box maxWidth={800} margin="auto" paddingY={3}>
        <Typography variant="h5" gutterBottom>
          <b>Educación</b>
        </Typography>

        <Box marginBottom={4}>
          <Box alignItems="center" sx={{ display: { sm: "flex" } }}>
            <Typography variant="h6">
              <b>Ingeniería Civil en Computación</b>
            </Typography>
            <Typography
              variant="h6"
              marginX={1}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              &#x2022;
            </Typography>
            <Typography variant="h6" fontSize={16}>
              <b>Universidad de Chile</b>
            </Typography>
          </Box>

          <Typography variant="caption">Mar 2016 - Oct 2023</Typography>
        </Box>

        <Box>
          <Box alignItems="center" sx={{ display: { sm: "flex" } }}>
            <Typography variant="h6">
              <Link
                href="https://www.credential.net/c7d67864-7988-4be8-a41e-45c7f1c88e2f#gs.68ouf3"
                target="_blank"
                underline="hover"
                color="#dde4e7"
              >
                <b>DevOps</b>
              </Link>
            </Typography>
            <Typography
              variant="h6"
              marginX={1}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              &#x2022;
            </Typography>
            <Box
              alignItems="center"
              display="flex"
              sx={{ marginTop: { xs: "-8px", sm: 0 } }}
            >
              <Typography variant="h6" fontSize={16}>
                <b>University of Chicago</b>
              </Typography>
              <IconButton
                color="#dde4e7"
                href="https://www.credential.net/c7d67864-7988-4be8-a41e-45c7f1c88e2f#gs.68ouf3"
                target="_blank"
              >
                <OpenInNewIcon sx={{ color: "#dde4e7" }} />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="caption">Octubre 2022</Typography>
        </Box>
      </Box>
      <Box margin="auto" maxWidth={800}>
        <Divider sx={{ borderColor: "#293340" }}></Divider>
      </Box>
    </Fragment>
  );
};

export default Education;
