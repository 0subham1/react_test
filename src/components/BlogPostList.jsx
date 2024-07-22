import axios from "axios";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { data } from "../const";

const BlogPostItem = lazy(() => import("./BlogPostItem"));

const BlogPostList = () => {
  // const [blogList, setblogList] = useState([]);
  const [blogList, setblogList] = useState(data);

  useEffect(() => {
    // handleGetBlogPost();
  }, []);

  const handleGetBlogPost = () => {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2024-07-21&to=2024-07-21&sortBy=popularity&apiKey=0b44583a4fe847cd8f47704541631b9b";
    axios
      .get(url)
      .then((res) => {
        console.log(res, "res");
        setblogList(res?.data?.articles);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div>
      <h2>BlogPostList</h2>

      <Grid container spacing={2} className="gridContainer">
        {blogList?.length > 0 ? (
          blogList?.map((item, i) => {
            return (
              <Grid item>
                <Suspense fallback={<CircularProgress />}>
                  <BlogPostItem item={item} index={i} />
                </Suspense>
              </Grid>
            );
          })
        ) : (
          <h4>Items Loading..</h4>
        )}
      </Grid>
    </div>
  );
};

export default BlogPostList;
