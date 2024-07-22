import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BlogPostDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="head">BlogPostDetails</h2>

      <Card>
        {state?.item?.urlToImage && (
          <CardMedia sx={{ height: 440 }} image={state?.item?.urlToImage} />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {state?.item?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {state?.item?.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => navigate("/", { state: state?.currentPage })}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BlogPostDetails;
