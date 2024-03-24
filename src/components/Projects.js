import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ProjectItem from "./ProyectItem.js";

import JavaScriptIcon from "../images/icons/JavaScriptIcon.js";
import HTMLIcon from "../images/icons/HTMLIcon.js";
import CSSIcon from "../images/icons/CSSIcon.js";
import ThreeJsIcon from "../images/icons/ThreeJsIcon.js";
import NodeIcon from "../images/icons/NodeIcon.js";
import BulmaIcon from "../images/icons/BulmaIcon.js";
import ReactIcon from "../images/icons/ReactIcon.js";
import MuiIcon from "../images/icons/MuiIcon.js";

import CellularNoise from "../images/projects/cellularnoise.webp";
import VoidSeeker from "../images/projects/voidseeker.webp";
import EnlistApp from "../images/projects/enlistapp.webp";

const Projects = () => {
  return (
    <Fragment>
      <Box maxWidth={800} margin="auto" paddingY={3}>
        <Typography variant="h5" gutterBottom>
          <b>Proyectos</b>
        </Typography>
        <ProjectItem
          title="Cellular Noise Playground"
          description='El artículo "A Cellular Texture Basis Function" de Steven Worley propone una técnica de texturizado procedural. Este proyecto permite visualizar diferentes resultados al ajustar las variables descritas en el artículo.'
          photo={CellularNoise}
          icons={[
            <NodeIcon />,
            <BulmaIcon />,
            <JavaScriptIcon />,
            <HTMLIcon />,
            <CSSIcon />,
            <ThreeJsIcon
              sx={{ backgroundColor: "#dde4e7", borderRadius: "20%" }}
            />,
          ]}
          github="https://github.com/Kuellar/cellularnoise"
          link="https://kuellar.com/cellularnoise"
        />
        <ProjectItem
          title="Void Seeker"
          description="Aplicación que te permite explorar el universo en busca de regiones con vacíos cósmicos."
          photo={VoidSeeker}
          icons={[
            <NodeIcon />,
            <BulmaIcon />,
            <JavaScriptIcon />,
            <HTMLIcon />,
            <CSSIcon />,
            <ThreeJsIcon
              sx={{ backgroundColor: "#dde4e7", borderRadius: "20%" }}
            />,
          ]}
          github="https://github.com/Kuellar/voidseeker"
          link="https://kuellar.com/voidseeker/"
        />
        <ProjectItem
          title="EnlistApp (Prototipo)"
          description="Prototipo de aplicación para facilitar la organización de encuentros familiares o entre amigos durante la pandemia de COVID-19."
          photo={EnlistApp}
          icons={[
            <NodeIcon />,
            <ReactIcon />,
            <MuiIcon />,
            <JavaScriptIcon />,
            <HTMLIcon />,
            <CSSIcon />,
          ]}
          github="https://github.com/Kuellar/enlistapp"
          link="https://kuellar.com/enlistapp/"
        />
      </Box>
      <Box margin="auto" maxWidth={800}>
        <Divider sx={{ borderColor: "#293340" }}></Divider>
      </Box>
    </Fragment>
  );
};

export default Projects;
