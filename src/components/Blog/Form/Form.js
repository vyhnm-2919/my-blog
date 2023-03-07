import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { createBlog } from "../../../apollo/Blog/mutation";

import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  // GraphQL operations
  const [addBlog, dataMutation] = useMutation(createBlog);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(dataMutation);

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    content: "",
  });

  const initDataBlog = () => {
    return {
      title: "",
      description: "",
      content: "",
    };
  };

  const setBlogValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBlog({ ...blog, [name]: value });
  };

  const reset = () => {
    setBlog(initDataBlog());
  };

  const submit = (event) => {
    event.preventDefault();
    addBlog({
      variables: blog,
      refetchQueries: [{ query: createBlog }],
    });

    navigate("/");
  };

  const getTitle = () => {
    if (id === "new") {
      return "New";
    }
    return "update";
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-2xl sm:rounded-lg">
          <div className="p-6 bg-white">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={blog.title}
                  onChange={setBlogValue}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter the title right here"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={blog.description}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter the description right here"
                  required
                  onChange={setBlogValue}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  rows="4"
                  name="content"
                  value={blog.content}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your content here"
                  onChange={setBlogValue}
                ></textarea>
              </div>
              <div className="flex p-1">
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  onClick={reset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
