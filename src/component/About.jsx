import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ marginRight: "35%", marginLeft: "25%", mt: 10 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        About Us
      </Typography>
      <Typography variant="body2"  sx={{textAlign:'justify', maxWidth:'900px',mt:3,fontSize:'18px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        pellentesque malesuada urna, ac faucibus ante mollis sit amet.
        Vestibulum ullamcorper, libero vel sollicitudin suscipit, diam ante
        semper tortor, in iaculis felis nisl quis orci. Aliquam vulputate, quam
        in euismod hendrerit, arcu quam rhoncus dolor, vel convallis massa
        tellus suscipit nibh. Curabitur lacus nunc, dignissim sed cursus ac,
        sagittis quis ante. Nullam vulputate facilisis sapien non egestas.
        Aenean erat lorem, fringilla id dolor id, luctus suscipit diam. Cras sed
        iaculis neque. Ut non sem urna. Sed tristique est nec massa euismod
        tincidunt. Duis sodales arcu at ligula molestie congue. Duis varius
        vehicula orci id imperdiet. Quisque sollicitudin augue neque, mattis
        sollicitudin sem malesuada at. Fusce ultricies ultricies condimentum.
        Donec pharetra metus ante, vitae venenatis massa dignissim vitae. Sed
        rhoncus varius rhoncus.
      </Typography>
    </Box>
  );
};

export default About;
