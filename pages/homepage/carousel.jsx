import React, { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Image, Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
  root: {
    marginTop: "10px",
    marginBottom: "40px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "15px",
      marginBottom: "80px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
      marginBottom: "150px",
    },
  },

  mainBox: {
    width: "88%",
    backgroundColor: "#FFF8F3",
    margin: "auto",
    borderRadius: "20px",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      margin: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "83%",
      margin: "auto",
    },
  },
  boxWidget: {
    width: "88%",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      margin: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "83%",
      margin: "auto",
    },
  },
  titleBox: {
    paddingTop: "30px",
    paddingBottom: "20px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "60px",
      paddingBottom: "50px",
    },
  },

  title: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#222222",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#222222",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#222222",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#222222",
    },
  },
  boxsize: {
    margin: "auto",
    paddingTop: "60px",
    paddingBottom: "60px",
    alignItems: "center",
    justifyContent: "center",
    width: "94%",
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
      alignItems: "center",
      width: "85%",
    },
  },

  name: {
    fontSize: "11px",
    color: "#222222",
    lineHeight: "20px",
    fontWeight: 400,
    [theme.breakpoints.up("sm")]: {
      fontSize: "11px",
      color: "#222222",
      lineHeight: "20px",
      fontWeight: 400,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "11px",
      color: "#222222",
      lineHeight: "21px",
      fontWeight: 400,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "13px",
      color: "#222222",
      lineHeight: "23px",
      fontWeight: 400,
    },
  },
  descriptions: {
    fontSize: "13px",
    color: "#000",
    lineHeight: "20px",
    fontWeight: 500,
    textAlign: "center",
    width: "100%",
    paddingBottom: "14px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "13px",
      color: "#000",
      lineHeight: "22px",
      fontWeight: 500,
      textAlign: "center",
      width: "75%",
      paddingBottom: "14px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
      color: "#000",
      lineHeight: "26px",
      fontWeight: 500,
      textAlign: "center",
      width: "65%",
      paddingBottom: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      color: "#000",
      lineHeight: "34px",
      fontWeight: 500,
      textAlign: "center",
      width: "45%",
      paddingBottom: "14px",
    },
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "24px",
  },
  imageitem: {
    width: "100%",
  },
}));

export default function SliderCarousel(props) {
  const classes = useStyles();
  {
    var items = [
      {
        Descriptions: " “He is ready to learn,he imporves very fast” ",
        Name: "Vasiti",
      },
      {
        Descriptions: " “He is very hardworking and he is deligent.” ",
        Name: "Reeds School ",
      },
      {
        Descriptions:
          " “He has the passion to train a team and he helps his peers grow” ",
        Name: "Malex",
      },
    ];

    return (
      <Fragment>
        <Box id="testimonial" display="flex" className={classes.boxWidget}>
          <Box display="flex" className={classes.titleBox}>
            <Typography className={classes.title}>
              What people are saying about me
            </Typography>
          </Box>
        </Box>
        <Carousel
          data-aos="fade-up"
          data-aos-delay="100"
          navButtonsAlwaysInvisible={true}
          indicators={false}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Fragment>
    );
  }

  function Item(props) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          className={classes.mainBox}
        >
          <Box
            display="flex"
            flexDirection="column"
            className={classes.boxsize}
          >
            <Typography className={classes.descriptions}>
              {props.item.Descriptions}
            </Typography>
            <Typography className={classes.name}>{props.item.Name}</Typography>
          </Box>
        </Box>
      </div>
    );
  }
}
