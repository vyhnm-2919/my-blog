import React from "react";
import { useQuery } from "@apollo/client";
import { getBlogs } from "../../../apollo/Blog/queries";
import BlogItem from "./BlogItem";

export default function BlogList() {
  const { loading, data } = useQuery(getBlogs);

  return loading ? (
    <p>Loading ... </p>
  ) : (
    data.blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
  );
}
