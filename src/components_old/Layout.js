import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CodeIcon from "@mui/icons-material/Code";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import HomeIcon from "@mui/icons-material/Home";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PrintIcon from "@mui/icons-material/Print";
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
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Ideas from "../pages_old/Ideas";
import Impresiones from "../pages_old/Impresiones";
import LandingPage from "../pages_old/LandingPage";
import Proyectos from "../pages_old/Proyectos";
import CV from "../ProfessionalCV.pdf";
import Topbar from "./Topbar";

const menuItems = [
  {
    page: <LandingPage />,
    icon: <HomeIcon />,
    text: "menu.inicio",
  },
  {
    page: <Proyectos />,
    icon: <CodeIcon />,
    text: "menu.proyectos",
  },
  {
    page: <Impresiones />,
    icon: <PrintIcon />,
    text: "menu.3d",
  },
  {
    page: <Ideas />,
    icon: <LightbulbIcon />,
    text: "menu.ideas",
  },
];

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
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation("common");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [EnEs, setEnEs] = useState(true);

  const [page, setPage] = useState(<LandingPage />);

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
      <Topbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        EnEs={EnEs}
        handleChangeEnEs={handleChangeEnEs}
      />
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
          {menuItems.map((elem) => (
            <ListItem
              key={elem.text}
              button
              onClick={() => {
                setOpen(!open);
                setPage(elem.page);
              }}
            >
              <ListItemIcon>{elem.icon}</ListItemIcon>
              <ListItemText primary={t(elem.text)} />
            </ListItem>
          ))}
          <ListItem
            key="CV"
            button
            onClick={() => {
              setOpen(!open);
              window.open(CV);
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
        {page}
      </Main>
    </Box>
  );
};

export default Layout;
