import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  CssBaseline,
  IconButton,
  ListItemText,
  Toolbar,
  Drawer,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/system';
import { Category, Contacts, Home, Info, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ButtonStyle = styled(Button)(({theme})=>({
  marginRight:theme.spacing(4),
  fontSize:'0.99em',
  "&:hover":{
    backgroundColor:'#1976d2',
    color:'white',
    transition: 'all 1s'
  }
}))
const drawerWidth = 240;
const navItems = ["Home","Product","About", "Contact"];

function Navbar(props) {
  const products = useSelector((state)=>state.product.value);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Birra Collection.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:'white',padding: '5px 0',}} >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
         
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: "none", sm: "block" } }} color='primary'
          >
            Birra Collection.
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavLink to='/'>
              <ButtonStyle variant="text" color="primary">
              <Home sx={{marginRight:1,}}/>  Home
              </ButtonStyle>
              </NavLink>
              <NavLink to='/products'>
              <ButtonStyle variant="text" color="primary">
                <Category sx={{marginRight:1,}}/>Products
              </ButtonStyle>
              </NavLink>
              <NavLink to='/about'>
              <ButtonStyle variant="text" color="primary">
                <Info sx={{marginRight:1,}}/> About
              </ButtonStyle>
              </NavLink>
              <NavLink to='/contact'>
              <ButtonStyle variant="text" color="primary">
                <Contacts sx={{marginRight:1,}}/> Contact
              </ButtonStyle>
              </NavLink>
          
          </Box>
          <NavLink to='/cart'>
          <Button variant="outlined" color="primary" startIcon={<ShoppingCart />}>Cart {products.length}</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
