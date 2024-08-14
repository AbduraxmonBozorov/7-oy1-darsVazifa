import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ product }) {

  return (
    <Card sx={{ width: "100%", border: "1px solid blue", margin: "auto" }}>
      <CardMedia
        sx={{ height: 240 }}
        image={product.attributes.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.attributes.title}
          <p>{product.attributes.category}</p>
          <em>{product.attributes.company}</em>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.attributes.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{product.attributes.price}</Button>
        
      </CardActions>
    </Card>
  );
}
