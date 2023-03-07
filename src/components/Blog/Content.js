import React from "react";
import { useNavigate } from "react-router-dom";
import { monitoringPage } from "../../constants/route";
import BlogList from "./List/BlogList";

export default function Content() {
  const navigate = useNavigate();
  const addBlog = () => {
    navigate(monitoringPage.NEWBLOG);
  };

  return (
    <div className="content p-4 sm:ml-64" id="content">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-4 gap-4">
          <BlogList />
          <div
            className="flex items-center justify-center h-64 rounded bg-gray-50 dark:bg-gray-800 cursor-pointer"
            onClick={addBlog}
          >
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
