import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { ColorModeContext } from "../App";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34,
  padding: "7px 9px 7px 15px",

  "& .MuiSwitch-switchBase": {
    margin: 0,
    padding: 0,
    transform: "translateX(8px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(30px)",
      "& + .MuiSwitch-track": {
        width: "100%",
        opacity: 1,
        backgroundColor: "#8796A5",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#212121",
    width: 28,
    height: 28,
    marginTop: "3px",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    width: "100%",
    opacity: 1,
    // marginLeft: "-12px",
    backgroundColor: "#8796A5",
    paddingLeft: 0,
  },
}));

const Topbar = ({ open, handleDrawerOpen, EnEs, handleChangeEnEs }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar position="fixed" open={open}>
      <Grid container>
        <Grid item xs={2}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Grid>
        <Grid item xs></Grid>
        <Grid
          item
          xs={4}
          sx={{
            flex: "inherit",
            float: "right",
            marginRight: "50px",
            marginTop: "14px",
            display: "inline-flex",
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginTop: "5px", marginRight: "-5px" }}
          >
            EN
          </Typography>
          <MaterialUISwitch checked={EnEs} onChange={handleChangeEnEs} />
          <Typography variant="body1" sx={{ marginTop: "5px" }}>
            ES
          </Typography>
          <IconButton
            sx={{ ml: 2, paddingTop: 0, mb: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Topbar;
