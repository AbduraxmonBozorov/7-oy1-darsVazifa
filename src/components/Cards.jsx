import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MediaCard from "./Card";

function MyComponent({ products }) {
  
  return (
    <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
      <Box>
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 2, md: 3, lg: 4 }}
          rowSpacing={{ xs: 2, sm: 2, md: 3, lg: 4 }}
          justifyContent="flex-start"
        >
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                  <MediaCard product={product} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
}

export default MyComponent;
