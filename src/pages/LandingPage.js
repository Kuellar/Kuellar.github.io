import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md>
            {t("lorem.1")}
          </Grid>
          <Grid item md>
            {t("lorem.2")}
          </Grid>
          <Grid item md>
            {t("lorem.1")}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default LandingPage;
