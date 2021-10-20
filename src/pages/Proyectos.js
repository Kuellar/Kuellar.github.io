import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import React from "react";

const Proyectos = () => {
  const { t } = useTranslation("common");
  return <Typography>{t("lorem.1")}</Typography>;
};

export default Proyectos;
