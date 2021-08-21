import React, { useEffect, Fragment } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
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
  mainBox: {
    width: "88%",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      margin: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "76%",
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
    paddingBottom: "20px",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
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
}));

export default function ForYou() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div className={classes.root}>
      <Box id="skills" display="flex" className={classes.boxWidget}>
        <Box display="flex" className={classes.titleBox}>
          <Typography className={classes.title}>Skills</Typography>
        </Box>
      </Box>
      <Box className={classes.mainBox} flexDirection="column">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEA",
                height: "150px",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>HTML</Typography>{" "}
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>CSS</Typography>{" "}
                <Rating name="read-only" value={4} readOnly />
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>BOOTSTRAP</Typography>{" "}
                <Rating name="read-only" value={3} readOnly />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEA",
                height: "150px",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>TAILWIND CSS</Typography>{" "}
                <Rating name="read-only" value={4} readOnly />
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>REACT</Typography>{" "}
                <Rating name="read-only" value={4} readOnly />
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>PYTHON</Typography>{" "}
                <Rating name="read-only" value={2} readOnly />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEA",
                height: "150px",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>PHP</Typography>{" "}
                <Rating name="read-only" value={3} readOnly />
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  paddingBottom: "15px",
                }}
              >
                {" "}
                <Typography>WORDPRESS</Typography>{" "}
                <Rating name="read-only" value={4} readOnly />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
// function Item(props)
// {   const classes = useStyles();
//     return (
//         <div >

//             <Box className={classes.mainBox}  flexDirection='column'>
//                 <Box display='flex' justifyContent='space-between'  className={classes.gridContainer1}>
//                 <Box display='flex' flexDirection='column'>
//                         <Box className={classes.iconBox}>
//                         <Avatar alt="Remy Sharp"  src={props.item.Image} className={classes.icons}/>
//                         </Box>
//                     <Typography className={classes.detailTitle}>{props.item.Title}</Typography>
//                     <Typography className={classes.detail}>
//                     {props.item.Descriptions}
//                     </Typography>
//                 </Box>
//                 </Box>

//             </Box>

//         </div>

//     )
// }

// }
