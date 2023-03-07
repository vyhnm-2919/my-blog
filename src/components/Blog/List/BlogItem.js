import React from "react";
import { Link } from "react-router-dom";

export const BlogItem = ({ blog }) => {
  return (
    <div className="flex justify-center h-64 rounded bg-white dark:bg-gray-800 cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col px-6 items-start">
      <Link to="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {blog.description}
      </p>
      <Link
        to={`blog/${blog.id}`}
        className="inline-flex items-start px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more on BlogPage
      </Link>
    </div>
  );
};
export default BlogItem;
