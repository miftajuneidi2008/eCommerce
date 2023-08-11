import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from "@mui/system";
import { Add, Remove } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {increaseItem,decreaseItem} from './data/productReducer'
const ContainerBox = styled(Box)(({ theme }) => ({
  marginLeft: "12%",
  marginRight: "10%",
  marginTop: "4%",

  justifyContent:'center',
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const Cart = () => {

    const items = useSelector((state) =>state.product.value);
    const dispatch = useDispatch();
    let sum=0;
    let sums = items.map((datas)=>
      sum = sum+(datas.price*datas.qty)
   
    )

    const ShowProduct = () =>
    {
      return(
        <>
      { items.map((data)=>{
     return(
      
    <ContainerBox key={data.id}>
    <img
      src={data.image}
      style={{ maxWidth: "400px", height: "auto", marginTop: 3 }}
    />
    <Box sx={{ marginTop: 4, marginLeft: 15 ,marginRight:20}} >
      <Typography variant="h4">{data.title}</Typography>
      <Typography
        varaiant="p"
        sx={{
          maxWidth: "640px",
          textAlign: "justify",
          mt: 3,
        }}
      >
        {data.description}
      </Typography>
      <Typography
        varaiant="p"
        sx={{
          maxWidth: "640px",
          textAlign: "justify",
          mt: 3,
          fontSize: "1.1em",
        }}
      >
        <span style={{ color: "indigo", fontWeight: "bold" }}>Price</span> $ {data.qty} X {data.price} = {data.qty*data.price}
      </Typography>
      <Stack direction="row" gap={10} sx={{mt:6}}>
        <Button variant='contained' startIcon={<Add />} color='secondary' onClick={()=>dispatch(increaseItem(data.id))}></Button>
        <Button variant='contained' startIcon={<Remove />}color='secondary' onClick={()=>dispatch(decreaseItem(data.id))}></Button>
      </Stack>
      
    </Box>
  </ContainerBox>
      )})
}
<Box sx={{marginLeft:'10%',marginRight:'10%',mt:2}}>
<Divider  sx={{ borderBottomWidth: '1px',mb:1 }} color='black'/>
<Typography varaiant='h2' sx={{textAlign:'right',fontWeight:'bold',mb:5}}>Total Price = ${sum}</Typography>
</Box>
  </> ) }

const EmptyCart = () =>
{
  return(
    <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',mt:'10%'}}>
      <Typography variant='h3'>Your Cart is Empty</Typography>
    </Box>
  )
}
  return (
    items.length===0?(<EmptyCart />):(<ShowProduct />)

  )
}

export default Cart