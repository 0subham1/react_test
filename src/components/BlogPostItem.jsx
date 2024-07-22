import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
const BlogPostItem = ({ item, index }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        padding: "10px",
        width: "20rem",
        height: "12rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column !important",
        alignItems: "flex-start",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/post/${index}`, { state: item })}
    >
      <div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Date: {item?.publishedAt.substring(0, 10)}
        </Typography>
        <Typography variant="h7" component="div">
          {item?.title}
        </Typography>
        <hr />
      </div>
      <div style={{ overflowY: "scroll", height: "10rem" }}>
        <Typography variant="body2">{item?.description}</Typography>
      </div>
    </Card>
  );
};

export default BlogPostItem;
