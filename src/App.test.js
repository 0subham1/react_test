import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import BlogPostDetails from "./components/BlogPostDetails";
import BlogPostList from "./components/BlogPostList";

test('renders BlogPostList component for "/" route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(getByText("BlogPostList Page")).toBeInTheDocument();
});

test('renders BlogPostDetails component for "/post/:_id" route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/post/:_id"]}>
      <App />
    </MemoryRouter>
  );
  expect(getByText("BlogPostDetails Page")).toBeInTheDocument();
});
