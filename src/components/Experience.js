import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Experience = () => {
  return (
    <Fragment>
      <Box maxWidth={800} margin="auto" paddingY={3}>
        <Typography variant="h5" gutterBottom>
          <b>Experiencia</b>
        </Typography>

        <Box marginBottom={4}>
          <Box alignItems="center" sx={{ display: { sm: "flex" } }}>
            <Typography variant="h6">
              <b>Práctica profesional II</b>
            </Typography>
            <Typography
              variant="h6"
              marginX={1}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              &#x2022;
            </Typography>
            <Typography variant="h6" fontSize={16}>
              <b>Synaptic</b>
            </Typography>
          </Box>

          <Typography variant="caption">Ene 2022 - Feb 2022</Typography>

          <Typography variant="body1" gutterBottom marginY={1}>
            Participación en el desarrollo de dos aplicaciones web. Una de ellas
            es un generador de pruebas digitales diseñado para simplificar el
            proceso de evaluación en entornos educativos. El segundo proyecto es
            un sistema de leasing que optimiza la gestión de contratos y
            clientes para empresas del sector financiero.
          </Typography>
        </Box>

        <Box>
          <Box alignItems="center" sx={{ display: { sm: "flex" } }}>
            <Typography variant="h6">
              <b>Práctica profesional I</b>
            </Typography>
            <Typography
              variant="h6"
              marginX={1}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              &#x2022;
            </Typography>
            <Typography variant="h6" fontSize={16}>
              <b>Instituo Milenio Fundamento de los Datos</b>
            </Typography>
          </Box>

          <Typography variant="caption">Ene 2021 - Mar 2021</Typography>

          <Typography variant="body1" gutterBottom marginY={1}>
            Participación en el desarrollo de una plataforma para el registro de
            resultados del Test Kor, un test olfativo utilizado en la detección
            temprana de Covid-19. Mi contribución principal fue la
            implementación de una funcionalidad que permite a los usuarios
            realizar el test de forma autoadministrada, así como facilitarles la
            introducción de sus propios resultados de manera ágil y precisa.
          </Typography>
        </Box>
      </Box>
      <Box margin="auto" maxWidth={800}>
        <Divider sx={{ borderColor: "#293340" }}></Divider>
      </Box>
    </Fragment>
  );
};

export default Experience;
