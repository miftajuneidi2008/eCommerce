import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink, useParams } from "react-router-dom";
import { Add, AssistWalkerOutlined } from "@mui/icons-material";
import { addToCart } from "./data/productReducer";
import { useDispatch, useSelector } from "react-redux";
import Load from "./Load";
const ContainerBox = styled(Box)(({ theme }) => ({
  marginLeft: "12%",
  marginRight: "10%",
  marginTop: "4%",
  textAlign: "center",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ProductDetails = () => {
  let { id } = useParams();
  const products = useSelector((state) =>state.product.value);
  console.log(products)
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setData(await response.json());
      setLoading(false);
    };
    getData();
  }, []);

  const handleClick = (datas) => {
    dispatch(addToCart(datas))
  };

  const ShowProduct = () =>
  {
    return (
    <ContainerBox>
      <img
        src={data.image}
        style={{ maxWidth: "440px", height: "auto", marginTop: 3 }}
      />
      <Box sx={{ marginTop: 4, marginLeft: 15 }}>
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
          <span style={{ color: "indigo", fontWeight: "bold" }}>Price</span> $
          {data.price}
        </Typography>

        <Stack
          direction="vertical"
          sx={{ mt: 16, mr: 3, ml: 3, mb: 10 }}
          gap={4}
        >
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            onClick={()=>handleClick(data)}
          >
            Add to Cart
          </Button>
          <NavLink to='/cart'>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AssistWalkerOutlined />}
          >
            Go to Cart
          </Button>
          </NavLink>
        </Stack>
      </Box>
    </ContainerBox>
    )
  }

  return (
    <Box sx={{ marginLeft: "12%",marginRight: "10%",marginTop: "4%",}}>
      {loading?<Load />:<ShowProduct />}
      </Box>
  );
};

export default ProductDetails;
