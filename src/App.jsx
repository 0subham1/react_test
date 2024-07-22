import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogPostDetails from "./components/BlogPostDetails";
import BlogPostItem from "./components/BlogPostItem";
import BlogPostList from "./components/BlogPostList";
import "./App.css";
function App() {
  return (
    <div style={{ margin: "1rem" }}>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/*" element={<BlogPostList />} />
        <Route path="/post/:_id" element={<BlogPostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
