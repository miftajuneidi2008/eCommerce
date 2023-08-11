import { Box, Button, TextField, Typography } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import React from 'react'
import { styled } from "@mui/system";
import { Send } from '@mui/icons-material';


const StyledForm = styled('form')(({theme})=>({
  width:'100%',
}));

const StyledDiv = styled('div')(({theme})=>({
  padding:5,
}));
const Contact = () => {
  return (
    <Box sx={{ marginRight: "35%", marginLeft: "25%", mt: 10}}>
    <Typography variant="h4" sx={{ textAlign: "center" }}>
      Contact Us
    </Typography>
    <StyledForm >
      <StyledDiv>
    <TextField id="outlined-basic" type='text' label="Name" variant="outlined" name = 'name' fullWidth />
    </StyledDiv>
    <StyledDiv>
    <TextField id="outlined-basic" type='email' label="Email" variant="outlined" name = 'email' fullWidth  />
    </StyledDiv>

    <StyledDiv>
    <TextField id="outlined-basic" type='text' label="Subject" variant="outlined" name = 'subject' fullWidth />
    </StyledDiv>
    <StyledDiv>
    <Textarea minRows={4} name ='message' placeholder="Type your message..."/>
    </StyledDiv>
    <Button variant='contained' sx={{mt:3,width:'100%'}} startIcon={<Send />}>Send</Button>
    </StyledForm>
    
  </Box>
  )
}

export default Contact