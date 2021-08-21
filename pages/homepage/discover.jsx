import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";

import "aos/dist/aos.css";

import { makeStyles, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 1,
      sm: 600,
      md: 960,
      lg: 1240,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(() => ({
  mainBox: {
    width: "88%",
    margin: "auto",
    paddingBottom: "100px",
    overflowX: "hidden",
    overflowY: "hidden",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      margin: "auto",
      paddingBottom: "120px",
    },
    [theme.breakpoints.up("md")]: {
      width: "83%",
      margin: "auto",
      paddingBottom: "150px",
    },
  },

  titleBox: {
    paddingBottom: "60px",
  },
  iconBox: {
    paddingBottom: "40px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#222222",
  },

  gridContainer: {
    paddingBottom: "100px",
  },

  images: {
    position: "relative",
    width: "70%",
    left: "28%",
    minHeight: 145,
    [theme.breakpoints.up("sm")]: {
      left: "47%",
      width: "50%",
    },
  },
  mainContainer: {
    backgroundColor: "#ff5c00",
    minHeight: "145px",
    paddingtop: "10px",
    position: "relative",
    paddingRight: "7%",
    paddingLeft: "11%",
    width: "100%",
    borderRadius: "10px",
    height: "159px",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#ff5c00",
      minHeight: "145px",
      paddingtop: "10px",
      position: "relative",
      paddingRight: "7%",
      paddingLeft: "11%",
      width: "100%",
      borderRadius: "10px",
      height: "245px",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#ff5c00",
      minHeight: "145px",
      paddingtop: "10px",
      position: "relative",
      paddingRight: "7%",
      paddingLeft: "11%",
      width: "100%",
      borderRadius: 10,
      height: "340px",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#ff5c00",
      minHeight: "145px",
      paddingtop: "10px",
      position: "relative",
      paddingRight: "7%",
      paddingLeft: "11%",
      width: "100%",
      borderRadius: "10px",
      height: "392px",
    },
  },
  detailTitle: {
    position: "absolute",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: "13px",
    color: "#fff",
    bottom: "65%",
    left: "12px",
    width: "56%",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "28px",
      color: "#fff",
      bottom: "59%",
      left: "41px",
      width: "48%",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      fontSize: "28px",
      fontWeight: 800,
      lineHeight: "42px",
      color: "#fff",
      bottom: "58%",
      left: "85px",
      width: "46%",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      fontSize: "36px",
      fontWeight: 800,
      lineHeight: "42px",
      color: "#fff",
      bottom: "62%",
      left: "85px",
      width: "42%",
    },
  },

  detail: {
    position: "absolute",
    bottom: "34%",
    left: "12px",
    fontSize: "10px",
    color: "#fff",
    lineHeight: "13px",
    width: "81%",
    fontWeight: 400,
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      bottom: "36%",
      left: "41px",
      fontSize: "13px",
      color: "#fff",
      lineHeight: "19px",
      width: "84%",
      fontWeight: 400,
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "41%",
      left: "85px",
      fontSize: "14px",
      color: "#fff",
      lineHeight: "23px",
      width: "63%",
      fontWeight: 400,
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: "41%",
      left: "85px",
      fontSize: "16px",
      color: "#fff",
      lineHeight: "27px",
      width: "60%",
      fontWeight: 400,
    },
  },

  textbutton: {
    fontSize: "8px",

    fontWeight: 500,
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
    },
  },
  detailbutton: {
    position: "absolute",
    bottom: "13%",
    padding: "3px 8px",
    color: "#ff5c00",
    backgroundColor: "#fff",

    left: "12px",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      bottom: "9%",
      padding: "8px 22px",
      color: "#ff5c00",
      backgroundColor: "#fff",

      left: "41px",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "15%",
      padding: "8px 22px",
      color: "#ff5c00",
      backgroundColor: "#fff",

      left: "85px",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: "15%",
      padding: "11px 35px",
      color: "#ff5c00",
      backgroundColor: "#fff",

      left: "85px",
    },
  },
  imageBox: {
    width: "127%",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: "127%",
      position: "relative",
    },
    [theme.breakpoints.up("md")]: {
      width: "117%",
      position: "relative",
    },

    [theme.breakpoints.up("lg")]: {
      width: "100%",
      position: "relative",
    },
  },
}));

export default function Discover() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.mainBox} flexDirection="column">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Box flexDirection="row" className={classes.mainContainer}>
              {/* <img src="/images/discover.png" alt="" className={classes.images}/> */}
              <Box display="flex" flexDirection="row">
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className={classes.detailTitle}
                >
                  Discover the Easier and Better Life with Bigwins
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={classes.detail}
                >
                  Bigwins finished from hng i7 as a graduate in backend, also he
                  a university graduate from a federal university in nigeria,
                  Bigwins is the right plug for your websites.
                </Typography>
                <Button
                  variant="contained"
                  href="#contact"
                  className={classes.detailbutton}
                >
                  <Typography
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className={classes.textbutton}
                  >
                    Contact Me
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
