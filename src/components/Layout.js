import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useState, useEffect, useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PrintIcon from "@mui/icons-material/Print";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LandingPage from "../pages/LandingPage";
import Impresiones from "../pages/Impresiones";
import Ideas from "../pages/Ideas";
import Proyectos from "../pages/Proyectos";
import { ColorModeContext } from "../App";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// const LandingPage = React.lazy(() => import("../pages/LandingPage"));
// const Impresiones = React.lazy(() => import("../pages/Impresiones"));
// const Ideas = React.lazy(() => import("../pages/Ideas"));

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
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

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation("common");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("LandingPage");
  const [EnEs, setEnEs] = useState(true);

  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    if (EnEs) {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }, [EnEs, i18n]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeEnEs = (event) => {
    setEnEs(event.target.checked);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            xs={2}
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              setOpen(!open);
              setPage("LandingPage");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu.inicio")} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setPage("Proyectos");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu.proyectos")} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setPage("Impresiones");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <PrintIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu.3d")} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setPage("Ideas");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <LightbulbIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu.ideas")} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText primary={t("menu.cv")} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {
          {
            LandingPage: <LandingPage />,
            Impresiones: <Impresiones />,
            Ideas: <Ideas />,
            Proyectos: <Proyectos />,
          }[page]
        }
      </Main>
    </Box>
  );
};

export default Layout;
