import Typography from "@mui/material/Typography";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import React from "react";

const Ideas = () => {
  const { t } = useTranslation("common");

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>{t("menu.ideas")}</Typography>
      <Typography>
        <DoNotDisturbIcon fontSize="large" />
        UNDER CONSTRUCTION
        <DoNotDisturbIcon fontSize="large" />
      </Typography>
    </Box>
  );
};

export default Ideas;
