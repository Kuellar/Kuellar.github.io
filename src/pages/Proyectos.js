import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import React from "react";
import Box from "@mui/material/Box";

const Proyectos = () => {
  const { t } = useTranslation("common");
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>{t("menu.proyectos")}</Typography>
      <Typography>
        <DoNotDisturbIcon fontSize="large" />
        UNDER CONSTRUCTION
        <DoNotDisturbIcon fontSize="large" />
      </Typography>
    </Box>
  );
};

export default Proyectos;
