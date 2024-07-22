import React from "react";
import { render } from "@testing-library/react";
import BlogPostDetails from "./BlogPostDetails";

test("renders BlogPostDetails component", () => {
  const { getByText } = render(<BlogPostDetails />);
  expect(getByText("BlogPostDetails Page")).toBeInTheDocument();
});
