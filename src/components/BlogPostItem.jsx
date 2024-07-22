import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const BlogPostItem = ({ item, index, currentPage }) => {
  const navigate = useNavigate();

  return (
    <Card
      id="itemCard"
      onClick={() =>
        navigate(`/post/${index}`, { state: { item, currentPage } })
      }
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
