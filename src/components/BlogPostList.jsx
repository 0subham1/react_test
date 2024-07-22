import React, { useEffect, useState, lazy, Suspense, useContext } from "react";
import { Button, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../App";
import axios from "axios";

const BlogPostItem = lazy(() => import("./BlogPostItem"));

const BlogPostList = () => {
  const { state } = useLocation();
  const { store, setStore } = useContext(AuthContext);

  let url =
    "https://newsapi.org/v2/everything?q=apple&from=2024-07-21&to=2024-07-21&sortBy=popularity&apiKey=0b44583a4fe847cd8f47704541631b9b";

  let url2 = "https://back-foodcart.vercel.app/newsapi/bloglist";
  //erro: "Requests from the browser are not allowed on the Developer plan, except from localhost."
  // The live api have this issue after production, so I copied the response and hosted on my server

  const [blogList, setblogList] = useState(store?.blogs);
  const [currentPage, setCurrentPage] = useState(state ? state : 1);
  const recordPerPage = 6;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = blogList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogList?.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()];
  numbers.shift();

  useEffect(() => {
    store?.blogs?.length == 0 && handleGetBlogPost();
  }, [store]);

  const handleGetBlogPost = () => {
    axios
      .get(url2)
      .then((res) => {
        setblogList(res?.data);
        setStore({ ...store, blogs: res?.data });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const handlePageKey = (item) => {
    setCurrentPage(item);
  };
  const handlePrevKey = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextKey = () => {
    if (currentPage != npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h2 className="head">BlogPostList</h2>

      <Grid container spacing={2} className="gridContainer">
        {blogList?.length > 0 ? (
          records?.map((item, i) => {
            return (
              <Grid item>
                <Suspense fallback="...">
                  <BlogPostItem
                    item={item}
                    index={i}
                    currentPage={currentPage}
                  />
                </Suspense>
              </Grid>
            );
          })
        ) : (
          <h4>Items Loading..</h4>
        )}
      </Grid>

      <hr />
      <div style={{ margin: "20px", textAlign: "center" }}>
        <Button onClick={() => handlePrevKey()}>prev</Button>
        {numbers?.length > 0 &&
          numbers?.map((item, i) => {
            return (
              <span
                className="pageKey"
                key={i}
                style={
                  item == currentPage ? { color: "red" } : { color: "blue" }
                }
                onClick={() => handlePageKey(item)}
              >
                {item}
              </span>
            );
          })}
        <Button onClick={() => handleNextKey()}>next</Button>
      </div>
    </div>
  );
};

export default BlogPostList;
