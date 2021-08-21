import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
// import MiniNavbar from "./MiniNavbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useRouter } from "next/router";

//CSS Styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  appBar: {
    background: "#ffffff",
    width: "100vw",
    maxWidth: "1440px",
    margin: "0 auto",
    paddingLeft: "0.5rem",
    [theme.breakpoints.up("md")]: {
      paddingRight: "3.5rem",
      paddingLeft: "3.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "5.5rem",
      paddingLeft: "5.5rem",
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    width: "7rem",
    cursor: "pointer",
  },
  menuItems2: {
    "& > *": {
      "&:hover": {
        color: "#FF5C00",
      },
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.7rem",
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
  },
  signUp: {
    "& > *": {
      "&:hover": {
        color: "#FF5C00",
      },
    },
    background: "#FF5C00",
    color: "#ffffff",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.7rem",
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
  },
}));

const menuItems2 = [
  {
    page: "Skiils",
    pageUrl: "/#skills",
  },
  {
    page: "STORIES",
    pageUrl: "/#testimonial",
  },
  {
    page: "CONTACT",
    pageUrl: "/#contact",
  },
  // {
  //   page: "LOGIN",
  //   pageUrl: "/login"
  // },
];

const header = () => {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [toggle, setToggle] = useState(false);

  const handleMenuClick = (pageUrl) => {
    router.push(pageUrl);
  };

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <img
              onClick={() => handleMenuClick("/")}
              className={classes.title}
              src="hng.png"
              alt="hng-logo"
            />
            <div>
              {isMobile ? (
                <Box>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                  >
                    <Menu style={{ color: "#1F1A35" }} />
                  </IconButton>
                  <Drawer open={toggle} onClose={toggleDrawer}>
                    <List
                      style={{ width: "100vw" }}
                      onClick={toggleDrawer}
                      onKeyDown={toggleDrawer}
                    >
                      <Box
                        style={{
                          margin: "1.2rem 0.8rem",
                          display: "flex",
                        }}
                      >
                        <Close
                          style={{ color: "#1F1A35" }}
                          onClick={toggleDrawer}
                        />
                        <img
                          style={{ marginLeft: "1rem" }}
                          className={classes.title}
                          onClick={() => handleMenuClick("/")}
                          src="hng.png"
                          alt="hng-logo"
                        />
                      </Box>
                      {menuItems2.map((text, index) => {
                        const { page, pageUrl } = text;
                        return (
                          <ListItem
                            onClick={() => handleMenuClick(pageUrl)}
                            button
                            key={page}
                          >
                            <ListItemText>
                              <Typography style={{ fontSize: "0.8rem" }}>
                                {page}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        );
                      })}
                      {/* <ListItem style={{ background: "#FF5C00", marginBottom: "0.5rem" }} button>
                        <ListItemText>
                          <Typography style={{
                            fontSize: "0.8rem",
                            color: "#FFFFFF",
                          }}>SIGN UP</Typography>
                        </ListItemText>
                      </ListItem> */}
                    </List>
                    <List onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                      <Divider light />
                    </List>
                  </Drawer>
                </Box>
              ) : (
                <>
                  <Box>
                    {menuItems2.map((menuItem, key) => {
                      const { page, pageUrl } = menuItem;
                      return (
                        <Button
                          className={classes.menuItems2}
                          key={key}
                          onClick={() => handleMenuClick(pageUrl)}
                        >
                          {page}
                        </Button>
                      );
                    })}
                    {/* {signUp.map((Item, key) => {
                      const { page, pageUrl } = Item;
                      return (
                        <Button className={classes.signUp} key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</Button>
                      )
                    })} */}
                  </Box>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default header;
