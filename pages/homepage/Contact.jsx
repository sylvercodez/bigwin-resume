import React, { useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Aos from "aos";
import "aos/dist/aos.css";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    background: "#ffffff",
  },
  mainContainer: {
    maxWidth: "1440px",
    margin: "0 auto",
  },
  header: {
    fontSize: "1.4rem",
    fontWeight: 700,
    paddingTop: "2rem",
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  details: {
    fontSize: "0.9rem",
    paddingRight: "4rem",
    paddingTop: "1rem",
    marginBottom: "3rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.9rem",
    [theme.breakpoints.up("sm")]: {
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: 0,
      width: "18rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
      width: "22rem",
      lineHeight: "2.1rem",
    },
  },
  container: {
    padding: "4rem 2rem 8rem 1.5rem",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      paddingRight: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      padding: "4rem 5rem 8rem 5rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4rem 7rem 9rem 7rem",
    },
  },
  mapBoxContainer: {
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
    },
  },
  mapBox: {
    width: "100%",
    height: "320px",
    border: "1px solid #EAEAEA",
    borderRadius: "16px",
    marginTop: "3rem",
    [theme.breakpoints.up("lg")]: {
      width: "310px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "446px",
      height: "425px",
    },
  },
  map: {
    width: "100%",
    marginBottom: "1.5rem",
    [theme.breakpoints.up("lg")]: {
      width: "310px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "446px",
      height: "292px",
    },
  },
  contact: {
    marginBottom: "1rem",
    fontSize: "1rem",
    fontWeight: 500,
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  },
  address: {
    fontWeight: 600,
    fontSize: "1rem",
    marginLeft: "1rem",
  },
}));

function Contact() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <React.Fragment>
      <Box id="contact" className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box>
              <Typography
                data-aos="fade-up"
                data-aos-delay="50"
                className={classes.header}
                variant="h1"
              >
                Contact Me
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                className={classes.details}
                variant="h6"
              >
                I want to hear from you and i would definitely respond to you.
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                className={classes.contact}
                variant="h5"
              >
                +234 7041317935
              </Typography>
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                className={classes.contact}
                variant="h5"
              >
                tosinotenaike3@gmail.com
              </Typography>
            </Box>
            <Box
              data-aos="fade-up"
              data-aos-delay="100"
              className={classes.mapBoxContainer}
            >
              <Box className={classes.mapBox}>
                <Box>
                  <img className={classes.map} src="images/map.svg" alt="map" />
                </Box>
                <Typography style={{ marginLeft: "1rem" }}>
                  Office Address
                </Typography>
                <Typography className={classes.address}>
                  No, 4 makinde street lantoro abeokuta
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Contact;
