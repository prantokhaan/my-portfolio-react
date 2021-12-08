import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import logo from '../../../images/Pranto.png';



const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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

export default function MobileDrawer() {
    const linkStyle = {
      padding: "10px 20px",
      fontSize: "16px",
      textAlign: "center",
      backgroundColor: "transparent",
      border: "none",
      fontWeight: 500,
    };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#d4d4e3" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <i className="fas fa-bars text-black"></i>
          </IconButton>
          <h4
            style={{
              fontFamily: `'Rubik', sans-serif`,
              textTransform: "uppercase",
              color: "#000",
              textAlign: "center",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          >
            Ismatul Islam <span style={{ color: "#ec1839" }}>Pranto</span>
          </h4>
        </Toolbar>
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
              <i className="fas fa-arrow-left"></i>
            ) : (
              <i className="fas fa-arrow-right"></i>
            )}
          </IconButton>
        </DrawerHeader>
        <nav style={{ marginTop: "30px" }}>
          <Divider />
          <div className="sidebar-item">
            <Link to="/home">
              <button style={linkStyle}>
                <i className="fa fa-home" style={{ marginRight: "5px" }}></i>
                Home
              </button>
            </Link>
          </div>
          <Divider />

          <div className="sidebar-item">
            <Link to="/about">
              <button style={linkStyle}>
                <i className="fa fa-user" style={{ marginRight: "5px" }}></i>
                About
              </button>
            </Link>
          </div>
          <Divider />
          <div className="sidebar-item">
            <Link to="/blogs">
              <button style={linkStyle}>
                <i className="fa fa-blog" style={{ marginRight: "5px" }}></i>
                Blogs
              </button>
            </Link>
          </div>
          <Divider />
          {/* <div className="sidebar-item">
            <Link to="/services">
              <button style={linkStyle}>
                <i className="fa fa-list" style={{ marginRight: "5px" }}></i>
                Services
              </button>
            </Link>
          </div>
          <Divider /> */}
          <div className="sidebar-item">
            <Link to="/projects">
              <button style={linkStyle}>
                <i
                  className="fa fa-briefcase"
                  style={{ marginRight: "5px" }}
                ></i>
                Projects
              </button>
            </Link>
          </div>
          <Divider />
          <div className="sidebar-item">
            <Link to="/contact">
              <button style={linkStyle}>
                <i
                  className="fa fa-comments"
                  style={{ marginRight: "5px" }}
                ></i>
                Contact Me
              </button>
            </Link>
          </div>
          <Divider />
        </nav>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
