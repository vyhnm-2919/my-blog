import React from "react";
import Author from "../components/Home/Partial/Author";
import Footer from "../components/Home/Common/Footer";
import Header from "../components/Home/Partial/Header";
import Leadcard from "../components/Home/Partial/Leadcard";
import Navbar from "../components/Home/Partial/Navbar";
import Posts from "../components/Home/Partial/Posts";
import Subscribe from "../components/Home/Partial/Subscribe";

export default function Homepage() {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Header />
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <Navbar />
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            <Leadcard />
            <Posts />
          </div>
          <Subscribe />
          <Author />
        </div>
      </div>
      <Footer />
    </div>
  );
}
