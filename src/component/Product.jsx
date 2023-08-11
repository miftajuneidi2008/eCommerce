import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
let componetMounted = true;
const ContainerBox = styled(Box)(({ theme }) => ({
  marginLeft: "10%",
  marginRight: "10%",
  textAlign: "center",
}));

const ItemButton = styled(Button)(({ theme }) => ({
  fontSize: "1.1em",
  color: "#03045E",
  margin: "0 10px",
  marginBottom: 5,
  "&:hover": {
    backgroundColor: "#03045E",
    color: "white",
    opacity: 0.7,
    transition: "all 1s",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLaoding] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLaoding(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componetMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLaoding(false);
      }
      return () => {
        componetMounted = false;
      };
    };
    getData();
  }, []);

  const filterItems = (id) => {
    const items = data.filter((x) => x.category === id);
    setFilter(items);
  };
  const ShowProduct = () => {
    return (
      <Grid container spacing={2}>
        {filter.map((filters) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={filters.id}>
              <Paper
                elevation={3}
                sx={{
                  maxWidth: "330px",
                  height: "auto",
                  marginRight: 3,
                  marginLeft: 3,
                  mt: 4,
                }}
              >
                <img
                  src={filters.image}
                  style={{ width: "300px", height: "420px", marginTop: 3 }}
                />
                <NavLink to={`/products/${filters.id}`}>
                  <Button variant="outlined" sx={{ mb: 3 }}>
                    Shop Now
                  </Button>
                </NavLink>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  return (
    <ContainerBox>
      <Typography variant="h4" textAlign="center" sx={{ marginTop: "3%" }}>
        Latest Products
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <ItemButton variant="outlined" onClick={() => setFilter(data)}>
          All
        </ItemButton>
        <ItemButton
          variant="outlined"
          onClick={() => filterItems("men's clothing")}
        >
          Mens Collection
        </ItemButton>
        <ItemButton
          variant="outlined"
          onClick={() => filterItems("women's clothing")}
        >
          Womens Collection
        </ItemButton>
        <ItemButton
          variant="outlined"
          onClick={() => filterItems("electronics")}
        >
          Electronics
        </ItemButton>
        <ItemButton variant="outlined" onClick={() => filterItems("jewelery")}>
          Jewellery
        </ItemButton>
      </Box>
      {loading ? <Loading /> : <ShowProduct />}
    </ContainerBox>
  );
};

export default Product;
