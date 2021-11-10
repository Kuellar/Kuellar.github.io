import Typography from "@mui/material/Typography";
// import { useTranslation } from "react-i18next";
import React from "react";
import Box from "@mui/material/Box";
import { StlViewer } from "react-stl-viewer";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Carousel from "react-material-ui-carousel";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import CatanaSupportSTL from "../../images/3D/Catana/soporte.stl";
import CatanaSupportCenterSTL from "../../images/3D/Catana/soporte-centro.stl";
import CatanaSupportLateralSTL from "../../images/3D/Catana/soporte-lateral.stl";
import CatanaPhoto1 from "../../images/3D/Catana/SoporteCatana1.JPG";
import CatanaPhoto2 from "../../images/3D/Catana/SoporteCatana2.JPG";

const CatanaSupport = () => {
  //   const { t } = useTranslation("common");
  const theme = useTheme();
  return (
    <Paper className="element" xs={{ display: "block" }}>
      <Typography variant="h6">Soporte de Catana</Typography>
      <Typography variant="body1">Diseñado en AutoCAD</Typography>
      <Divider />
      <Typography variant>Stl Viewer</Typography>
      <Box
        sx={{ width: { xs: "100%", sm: "80%", md: "60%" }, margin: "0 auto" }}
      >
        <Carousel autoPlay={false} navButtonsAlwaysVisible={true} swipe={false}>
          <Box className="carousel-element">
            <StlViewer
              className="STL"
              url={CatanaSupportSTL}
              color={theme.palette.primary.dark}
            />
            <Typography variant="body1">Completo</Typography>
          </Box>
          <Box className="carousel-element">
            <StlViewer
              className="STL"
              url={CatanaSupportCenterSTL}
              color={theme.palette.primary.dark}
            />
            <Typography variant="body1">Parte media</Typography>
          </Box>
          <Box className="carousel-element">
            <StlViewer
              className="STL"
              url={CatanaSupportLateralSTL}
              color={theme.palette.primary.dark}
            />
            <Typography variant="body1">Parte lateral</Typography>
          </Box>
        </Carousel>
      </Box>
      <Divider />
      <ImageList>
        <ImageListItem key={CatanaPhoto1}>
          <img src={CatanaPhoto1} alt="Soporte de catana" loading="lazy" />
        </ImageListItem>
        <ImageListItem key={CatanaPhoto2}>
          <img
            src={CatanaPhoto2}
            alt="Soporte de catana con catana"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      <Divider />
      <Box sx={{ mt: "25px", mb: "60px" }}>
        <Button
          sx={{ float: "right" }}
          variant="outlined"
          href={CatanaSupportSTL}
          endIcon={<DownloadIcon />}
        >
          Descargar
        </Button>
      </Box>
    </Paper>
  );
};

export default CatanaSupport;
