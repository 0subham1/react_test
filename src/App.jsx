import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlogPostDetails from "./components/BlogPostDetails";
import BlogPostList from "./components/BlogPostList";
import "./App.css";

export const AuthContext = createContext();

function App() {
  const [store, setStore] = useState({ blogs: [] });
  return (
    <div style={{ margin: "1rem" }}>
      <AuthContext.Provider value={{ store, setStore }}>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/*" element={<BlogPostList />} />
          <Route path="/post/:_id" element={<BlogPostDetails />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
