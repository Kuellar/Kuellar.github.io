import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import LandingCarousel from "../components/LandingCarousel";

const LandingPage = () => {
  const { t } = useTranslation("common");
  const theme = useTheme();

  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          boxShadow: theme.shadows[24],
          marginBottom: 5,
        }}
      >
        <Grid container sx={{ background: theme.palette.secondary.dark }}>
          <Grid item xs />
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <LandingCarousel />
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
