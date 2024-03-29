import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import photo from "../images/LandingPage/profile.webp";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/system/Stack";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import CV from "../ProfessionalCV.pdf";
// import CellularNoise from "./CellularNoise";

const Intro = () => {
  return (
    <Fragment>
      <Box
        sx={{ height: { sm: 300 }, paddingBottom: { xs: 3, sm: 0 } }}
        maxWidth={800}
        display="flex"
        alignItems="center"
        margin="auto"
      >
        <Grid container marginX="auto">
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{
              marginRight: { sm: "25px" },
              paddingBottom: { xs: 4, sm: 0 },
              paddingLeft: { xs: 0, sm: 1 },
            }}
          >
            <Avatar
              alt="Foto perfil"
              src={photo}
              sx={{
                width: 200,
                height: 200,
                boxShadow: "0 0 1px 10px #151f2e",
                marginX: { xs: "auto", sm: 0 },
              }}
            />
          </Grid>
          <Grid
            item
            alignItems="center"
            marginY="auto"
            sx={{ marginX: { xs: "auto", sm: 0 } }}
          >
            <Typography variant="h4" gutterBottom>
              <b>Ignacio Cuellar Tapia</b>
            </Typography>
            <Typography variant="body1" gutterBottom marginBottom={1}>
              Ingeniero Civil en Computación UChile.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                href="https://github.com/Kuellar"
                target="_blank"
              >
                Github
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(CV);
                }}
              >
                CV
              </Button>
              <Button
                variant="contained"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/ignacio-cuellar-tapia-36618a200/"
                target="_blank"
              >
                Linkedin
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box margin="auto" maxWidth={800}>
        <Divider sx={{ borderColor: "#293340" }}></Divider>
      </Box>
    </Fragment>
  );
};

export default Intro;
