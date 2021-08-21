import React from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Box, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
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
  mainbox: {
    width: "88%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "80px",
    paddingTop: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      paddingBottom: "100px",
      paddingTop: "10px",
    },
    [theme.breakpoints.up("md")]: {
      width: "83%",
      paddingBottom: "150px",
      paddingTop: "10px",
    },
  },
  container: {
    minHeight: 200,
    [theme.breakpoints.up("sm")]: {
      minHeight: 235,
    },
    [theme.breakpoints.up("md")]: {
      minHeight: 245,
    },
  },
  root: {
    maxWidth: 370,

    borderRadius: "15px",
    position: "relative",
  },
  content: {
    padding: 24,
  },
  Titledetail: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#fff",
    paddingBottom: "14px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "16px",
      fontSize: "20px",
      fontWeight: 700,
      color: "#fff",

      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#fff",
      paddingBottom: "16px",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#fff",
      paddingBottom: "14px",
      width: "100%",
    },
  },

  cta: {
    display: "block",

    color: "#fff",

    fontWeight: 500,
    fontSize: 12,
    textDecoration: "underline",
  },
  title: {
    color: "#fff",
    lineHeight: "22px",

    [theme.breakpoints.up("sm")]: {
      lineHeight: "24px",
    },
    [theme.breakpoints.up("md")]: {
      lineHeight: "26px",
    },
  },
  titleBox: {
    paddingBottom: "20px",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: "50px",
    },
  },

  maintitle: {
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
  details: {
    color: "#fff",
    lineHeight: "20px",

    [theme.breakpoints.up("sm")]: {
      lineHeight: "22px",
    },
    [theme.breakpoints.up("md")]: {
      lineHeight: "24px",
    },
  },
  images: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
}));
const item = [
  {
    Image: "/images/banners.png",
    Title: "AY stores",
    Details: "A website for buying toys for kids",
    Button: "View Project Now",
    url: "http://aysquarestores.com.ng",
  },
  {
    Image: "/images/banner1.png",
    Title: "Vasiti old website",
    Details:
      "A Landing page set for the company for onboarding new users to their various platform.",
    Button: "View Project Now",
    url: "https://vasiti-next-website.vercel.app/",
  },
  {
    Image: "/images/banner.png",
    Title: "Total radiance",
    Details: "A e-commerce store for buying and selling of beauty products  ",
    Button: "View Project Now",
    url: "https://totalradianceng.com/",
  },
  {
    Image: "/images/handshake-money-1.png",
    Title: "100 ethics",
    Details: "An hacking assitance platform for  rendering services",
    Button: "View Project Now",
    url: "https://100ethics.com/",
  },
  {
    Image: "/images/banner3.png",
    Title: "Vasiti Events",
    Details: " An events website for vasiti.com",
    Button: "View Project Now",
    url: "https://www.events.vasiti.com/",
  },
  {
    Image: "/images/banner4.png",
    Title: "Spurbuddy",
    Details: "A Innoative company that builds smaller company.",
    Button: "View Project Now",
    url: "https://spurbuddy.com/",
  },
];
export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.mainbox}>
      <Box display="flex" className={classes.titleBox}>
        <Typography className={classes.maintitle}>
          View my past projects
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {item.map((text, i) => (
          <Grid
            key={i}
            data-aos="fade-up"
            data-aos-delay="100"
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
          >
            <Card className={classes.root}>
              <CardMedia className={classes.images} image={text.Image} />
              <CardActionArea>
                <CardContent className={classes.content}>
                  <a href={text.url} style={{ textDecoration: "none" }}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      color={"common.white"}
                      className={classes.container}
                    >
                      <h2 className={classes.title}>{text.Title}</h2>
                      <p className={classes.details}>{text.Details}</p>
                    </Box>

                    <Typography className={classes.cta} variant={"overline"}>
                      {text.Button}
                    </Typography>
                  </a>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
