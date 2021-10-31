import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import yo from "../images/yo-old.JPG";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LandingPage = () => {
  const { t } = useTranslation("common");
  const theme = useTheme();

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ background: theme.palette.secondary.dark }}>
          <Grid item xs />
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <img
              className="landingPhoto"
              src={yo}
              alt={t("landing.foto-antigua")}
            />
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={2} />
          <Grid item>
            <Typography variant="h5">Ignacio Cuellar Tapia</Typography>
            <Typography variant="body1">{t("landing.no-se")}.</Typography>
            <Typography variant="body1">{t("landing.ayuda")}.</Typography>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </Box>
    </Fragment>
  );
};

export default LandingPage;
