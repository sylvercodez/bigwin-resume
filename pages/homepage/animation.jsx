import React, { useEffect } from "react"
import {
    Typography,
    Box,
    Grid,
    Button,
  } from '@material-ui/core'

import "aos/dist/aos.css"

  import { makeStyles, createTheme } from '@material-ui/core/styles'
  import useMediaQuery from "@material-ui/core/useMediaQuery"
  import { useSpring, animated } from 'react-spring'  
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
    mainBox : {
        width: '88%',
        margin: 'auto',
        paddingBottom: '100px',
        overflowX:'hidden',
        overflowY: 'hidden',
        [theme.breakpoints.up('sm')]: {
          width: '90%',
          margin: 'auto',
          paddingBottom: '120px',
        },
        [theme.breakpoints.up('md')]: {
          width: '83%',
          margin: 'auto',
          paddingBottom: '150px',
        },
      
       
    },
    
    titleBox: {
       
        paddingBottom: '60px',
    },
    iconBox: {
        paddingBottom: '40px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 700,
        color: '#222222',
        
    },
     
     gridContainer : {
         paddingBottom: '100px',
     },
    
     images: {
         position: 'relative',
         width:'70%',
         left:'28%',
         minHeight:145,
         [theme.breakpoints.up('sm')]: {
          left:'47%',
         width:'50%',
        },

     },
     mainContainer: {
      backgroundColor:'#ff5c00',
      minHeight:"145px", 
      paddingtop: '10px',
      position:'relative',
      paddingRight:'7%', 
      paddingLeft:'11%', 
      width:'100%' ,
      borderRadius:'10px',
      height:'159px',
      [theme.breakpoints.up('sm')]: {
        backgroundColor:'#ff5c00',
        minHeight:"145px", 
        paddingtop: '10px',
        position:'relative',
        paddingRight:'7%', 
        paddingLeft:'11%', 
        width:'100%' ,
        borderRadius:'10px',
        height:'245px',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor:'#ff5c00',
        minHeight:"145px", 
        paddingtop: '10px',
        position:'relative',
        paddingRight:'7%', 
        paddingLeft:'11%', 
        width:'100%' ,
        borderRadius:10,
        height:'340px',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor:'#ff5c00',
      minHeight:"145px", 
      paddingtop: '10px',
      position:'relative',
      paddingRight:'7%', 
      paddingLeft:'11%', 
      width:'100%' ,
      borderRadius:'10px',
      height:'392px',
      },
     },
     detailTitle: {
         position: "absolute",
         fontSize: '13px',
         fontWeight: 700,
         lineHeight: '13px',
         color: '#fff',
         bottom: '65%',
         left: '12px',
         width:'56%',
         [theme.breakpoints.up('sm')]: {
          position: "absolute",
         fontSize: '22px',
         fontWeight: 700,
         lineHeight: '28px',
         color: '#fff',
         bottom: '59%',
         left: '41px',
         width:'48%',
        },
        [theme.breakpoints.up('md')]: {
          position: "absolute",
         fontSize: '28px',
         fontWeight: 800,
         lineHeight: '42px',
         color: '#fff',
         bottom: '58%',
         left: '85px',
         width:'46%',
        },
        [theme.breakpoints.up('lg')]: {
          position: "absolute",
         fontSize: '36px',
         fontWeight: 800,
         lineHeight: '42px',
         color: '#fff',
         bottom: '62%',
         left: '85px',
         width:'42%',
        },
         
     },
 
     detail: {
        position: 'absolute',
        bottom: '34%',
        left: '12px',
        fontSize: '10px',
        color:'#fff',
        lineHeight: '13px',
        width: '81%',
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        bottom: '36%',
        left: '41px',
        fontSize: '13px',
        color:'#fff',
        lineHeight: '19px',
        width: '84%',
        fontWeight: 400,
        },
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
          bottom: '41%',
          left: '85px',
          fontSize: '14px',
          color:'#fff',
          lineHeight: '23px',
          width: '63%',
          fontWeight: 400,
        },
        [theme.breakpoints.up('lg')]: {
          position: 'absolute',
        bottom: '41%',
        left: '85px',
        fontSize: '16px',
        color:'#fff',
        lineHeight: '27px',
        width: '60%',
        fontWeight: 400,
        },
     },
    
     textbutton: {
      fontSize: '8px',
      
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '15px',
      },

      
     },
     detailbutton: {
      position: 'absolute',
      bottom: '13%',
      padding: '3px 8px',
      color:'#ff5c00',
      backgroundColor: '#fff', 
      
      left: '12px',
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
      bottom: '9%',
      padding: '8px 22px',
      color:'#ff5c00',
      backgroundColor: '#fff', 
      
      left: '41px',
      },
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
      bottom: '15%',
      padding: '8px 22px',
      color:'#ff5c00',
      backgroundColor: '#fff', 
      
      left: '85px',
      },
        [theme.breakpoints.up('lg')]: {
          position: 'absolute',
        bottom: '15%',
        padding: '11px 35px',
        color:'#ff5c00',
        backgroundColor: '#fff', 
        
        left: '85px',
        },
     },
     imageBox: {
      width:'127%',
      position:'relative',
      [theme.breakpoints.up('sm')]: {
        width:'127%',
      position:'relative',
      },[theme.breakpoints.up('md')]: {
        width:'117%',
      position:'relative',
      },

      [theme.breakpoints.up('lg')]: {
        width:'100%',
      position:'relative',
      },
     },
      image1: {
        position:'absolute',
        left: '38%',
        top: '35px',
        width:'16%',
        [theme.breakpoints.up('sm')]: {
          position:'absolute',
          left: '39%',
          top: '64px',
          width:'14%', 
        },
        [theme.breakpoints.up('md')]: {
          position:'absolute',
          left: '41%',
          top: '84px',
          width:'12%',
        },
        [theme.breakpoints.up('lg')]: {
          position:'absolute',
          left: '50%',
          top: '110px',
          width:'auto',
        },
      },
      image2: {
        position:'absolute',
        left: '37%',
        top: '41px',
        width:'27%',
        height:'fit-content',
        [theme.breakpoints.up('sm')]: {
          position:'absolute',
          left: '37%',
          top: '41px',
          width:'27%',
          height:'fit-content',
        },
        [theme.breakpoints.up('md')]: {
          position:'absolute',
          left: '37%',
          top: '133px',
          width:'30%',
          height:'fit-content',
        },
        [theme.breakpoints.up('lg')]: {
          position:'absolute',
          left: '42%',
          top: '170px',
          width:'auto',
          height:'auto',
        },
      },
      image3: {
        position:'absolute',
        left: '51%',
        width:'20%',
        height:'fit-content',
        [theme.breakpoints.up('sm')]: {
          position:'absolute',
        left: '51%',
        width:'24%',
        height:'fit-content',  
        },
        [theme.breakpoints.up('md')]: {
          position:'absolute',
          left: '56%',
          width:'22%',
          height:'fit-content',
        },
        [theme.breakpoints.up('lg')]: {
          position:'absolute',
          left: '65%',
          width:'auto',
          height:'auto',
        },
        
      },
      
      image4: {
        width:'18%',
        position:'absolute',
        left: '66%',
        top: '-89px',
        height:'fit-content',
        [theme.breakpoints.up('sm')]: {
          width:'22%',
          position:'absolute',
          left: '56%',
          top: '-68px',
          height:'fit-content',
        },
        [theme.breakpoints.up('md')]: {
          width:'31%',
          position:'absolute',
          left: '56%',
          top: 0,
          height:'fit-content',
        },
        [theme.breakpoints.up('lg')]: {
          width:'auto',
          position:'absolute',
          left: '63%',
          top: '40px',
          height:'auto',
        },
      }
  }));

  const item =[
    { Image1:'/images/svg1.svg',   
    },
    {  Image2:'/images/svg2.svg', },
    {  Image3:'/images/svg3.svg', },
    {  Image4:'/images/svg4.svg', },
   
    ]
    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
    // const interp2 = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
    // const interp3 = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
    // const interp4 = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
export default function Animate() {

        const classes = useStyles();
        const { radians } = useSpring({
          to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
          },
          from: { radians: 0 },
          config: { duration: 7000 },
          reset: true,
        })
        
    return(
  
      <div>
           
            <Box className={classes.mainBox}  flexDirection='column'>
            
                
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={12}>
                    <Box flexDirection='row' className={classes.mainContainer} >
                        {/* <img src="/images/discover.png" alt="" className={classes.images}/> */}
                        <Box display='flex' flexDirection='row'>
                        <Typography className={classes.detailTitle}>Discover the Easier and Better Life with Vasiti</Typography>
                            <Typography className={classes.detail}>
                            Vasiti has developed products to help student entrepreneurs build sustainable businesses, 
                            to empower students and make their lives easier. 
                            </Typography>
                            <Button variant='contained' className={classes.detailbutton} ><Typography className={classes.textbutton}>GET STARTED</Typography></Button>
                        </Box>
               
                        {item.map((text, i)=>(
                            <Box display='flex' key={i} flexDirection='row' className={classes.imageBox}>
                              <animated.img src={text.Image1}alt="" className={classes.image1} style={{ transform: radians.interpolate(interp(i)) }} /> 
                              <animated.img src={text.Image2}alt="" className={classes.image2} style={{ transform: radians.interpolate(interp(i)) }} /> 
                              <animated.img src={text.Image3}alt="" className={classes.image3} style={{ transform: radians.interpolate(interp(i)) }} /> 
                              <animated.img src={text.Image4}alt="" className={classes.image4} style={{ transform: radians.interpolate(interp(i)) }} /> 
                            
                            </Box>
                              ))}
                          
                       
                          
                      
                        
                        </Box>
                    
                    </Grid>

                    
                    
                    
                </Grid>
                
                
            </Box>
        
      </div>
    )
  }
  

    
