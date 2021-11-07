import Typography from "@mui/material/Typography";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";

import { StlViewer } from "react-stl-viewer";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import CatanaSupport from "../images/3D/Catana/soporte.stl";
import CatanaSupportCenter from "../images/3D/Catana/soporte-centro.stl";
import CatanaSupportLateral from "../images/3D/Catana/soporte-lateral.stl";
import CatanaPhoto1 from "../images/3D/Catana/SoporteCatana1.JPG";
import CatanaPhoto2 from "../images/3D/Catana/SoporteCatana2.JPG";
import { useTheme } from "@mui/material/styles";

const Impresiones = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item md={2} />
        <Grid item>
          <Typography>Aquí van todos mis modelos :)</Typography>
          <Typography>Algun día le dare estilo...</Typography>
          <Typography>Ejemplo</Typography>
          <Stack spacing={2} direction="row">
            <StlViewer url={CatanaSupport} color={theme.palette.primary.dark} />
            <StlViewer
              url={CatanaSupportCenter}
              color={theme.palette.primary.dark}
            />
            <StlViewer
              url={CatanaSupportLateral}
              color={theme.palette.primary.dark}
            />
          </Stack>
          <img src={CatanaPhoto1} alt="..." width="400" />
          <img src={CatanaPhoto2} alt="..." width="400" />
          <Button
            variant="outlined"
            href={CatanaSupport}
            endIcon={<DownloadIcon />}
          >
            Descargar
          </Button>
        </Grid>
        <Grid item md={2} />
      </Grid>
    </Box>
  );
};

export default Impresiones;
