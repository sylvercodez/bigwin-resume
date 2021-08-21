import React, { useEffect } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import { makeStyles, createTheme } from "@material-ui/core/styles";

// CSS Styles
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
  container: {
    background:
      "linear-gradient(180deg, #FFF1DD 44.71%, rgba(255, 255, 255, 0) 110.69%)",
  },
  mainBox: {
    width: "88%",

    paddingBottom: "80px",
    paddingTop: "40px",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      paddingBottom: "100px",
      paddingTop: "50px",
    },
    [theme.breakpoints.up("md")]: {
      width: "83%",
      paddingBottom: "150px",
      paddingTop: "70px",
    },
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    width: "100%",
    letterSpacing: "-2%",
    lineHeight: "30.51px",
    paddingBottom: "22px",
    color: "#222222",
    [theme.breakpoints.up("sm")]: {
      fontSize: "32px",
      fontWeight: 700,
      width: "74%",
      letterSpacing: "-2%",
      lineHeight: "40.51px",
      paddingBottom: "22px",
      color: "#222222",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
      fontWeight: 700,
      width: "70%",
      letterSpacing: "-2%",
      lineHeight: "50.51px",
      paddingBottom: "22px",
      color: "#222222",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px",
      fontWeight: 700,
      width: "67%",
      letterSpacing: "-2%",
      lineHeight: "60.51px",
      paddingBottom: "22px",
      color: "#222222",
    },
  },
  detail: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "19px",
    width: "100%",
    paddingBottom: "20px",
    color: "#000",
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
      width: "70%",
      paddingBottom: "25px",
      color: "#000",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      width: "60%",
      paddingBottom: "50px",
      color: "#000",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "25px",
      width: "55%",
      paddingBottom: "35px",
      color: "#000",
    },
  },
  button: {
    color: "#fff",
    backgroundColor: "#ff5c00",
    fontWeight: 500,
    fontSize: "12px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#ff5c00",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "15px",
    },
  },
}));

export default function MakeEasy() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <Box className={classes.container} display="flex" justifyContent="center">
        <Box className={classes.mainBox} flexDirection="column">
          <Typography
            data-aos="fade-up"
            data-aos-delay="50"
            className={classes.title}
          >
            Otenaike Oluwatobi Halleluyah
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            className={classes.detail}
          >
            I am a young ,enthusaist Developer. I love Achieving organization
            goals by working with others or alone, under little or no
            supervision, with the help of my technical and analytical skills,
            while being innovative and diligent
          </Typography>
          <Button
            data-aos="fade-up"
            data-aos-delay="110"
            variant="contained"
            href="/#skills"
            className={classes.button}
          >
            View More
          </Button>
        </Box>
      </Box>
    </div>
  );
}
