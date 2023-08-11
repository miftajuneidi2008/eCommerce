import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import shop from "../assets/shop.png";
import { Category } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${shop})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  top: 0,
  left:0,
  right:0,
  opacity:5,

}));

const Styledimg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "50vh",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom:theme.spacing(3),
  color:'white',
  fontSize:'1.5em',
}));
const StyledButton = styled(Button)(({ theme }) => ({
 padding:15,
 fontSize:'1.1em',
 width:'300px',
  backgroundColor:'#4361EE',
  color:'white',
  opacity:0.9,
  "&:hover":{
    backgroundColor:"#8338EC",
    color:'white',
    opacity:0.9,
    transition:'all 1s'
  }

}));
const Home = () => {
  return (
    <StyledBox>
      <Box sx={{padding:5,marginTop:'13%',marginLeft:'20%'}}>
        <Typography variant="h4"  sx={{mb:3,color:'#CAF0F8',fontSize:'3.5em'}}>
          New Arrivals
        </Typography>
        <StyledTypography variant="h6">Mens Fashion,Womens Fashion,Electronics,Jewellery</StyledTypography>
        <NavLink to='/products'>
        <StyledButton variant='text' startIcon={<Category />} >Start Shopping</StyledButton>
        </NavLink>
         
         </Box>
    
    </StyledBox>
  );
};

export default Home;
