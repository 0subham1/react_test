import React from "react";
import { render } from "@testing-library/react";
import BlogPostList from "./BlogPostList";

test("renders BlogPostList component", () => {
  const { getByText } = render(<BlogPostList />);
  expect(getByText("BlogPostList Page")).toBeInTheDocument();
});
