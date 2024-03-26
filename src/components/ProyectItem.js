import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectItem = ({ title, description, photo, icons, github, link }) => {
  return (
    <Grid container sx={{ marginBottom: { xs: 6, md: 3 } }}>
      <Grid xs={12} md={6} sx={{ marginBottom: { xs: 1, md: 0 } }}>
        <Box sx={{ padding: { sm: 2, md: 0 }, paddingRight: { md: 5 } }}>
          <img
            src={photo}
            alt="Cellular noise project"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              maxWidth: "100%",
              borderRadius: 15,
              boxShadow: "0 0 1px 3px #151f2e",
            }}
          />
        </Box>
      </Grid>
      <Grid md={6}>
        <Link
          variant="h6"
          underline="hover"
          href={link}
          target="_blank"
          color="#dde4e7"
        >
          <b>{title}</b>
          <OpenInNewIcon
            sx={{ marginBottom: "4px", fontSize: 12, marginLeft: "4px" }}
          />
        </Link>
        <Typography variant="body1">{description}</Typography>
        <Stack direction="row" spacing={1} alignItems="center" paddingY={1}>
          <IconButton color="#dde4e7" href={github} target="_blank">
            <GitHubIcon sx={{ color: "#dde4e7" }} />
          </IconButton>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              borderColor: "#7f848a",
              marginLeft: "0 !important",
              height: "30px",
              marginTop: "5px !important",
            }}
          />
          {icons.map((icon) => icon)}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
