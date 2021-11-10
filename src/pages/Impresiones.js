import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CatanaSupport from "../components/3D/CatanaSupport";

const Impresiones = () => {
  const { t } = useTranslation("common");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item sm={1} md={2} />
        <Grid item xs={12} sm={10} md={8}>
          <Box sx={{ mt: 2, mb: 5 }}>
            <Typography variant="h5">{t("menu.3d")}</Typography>
            <Typography>Aquí van todos mis modelos...</Typography>
          </Box>
          <CatanaSupport />
        </Grid>
        <Grid item sm={1} md={2} />
      </Grid>
    </Box>
  );
};

export default Impresiones;
