import React from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import Title from "./Title";

export default function Main() {
  const { id } = useParams();

  const getTitle = () => {
    if (id === "new") {
      return "New";
    }
    return "Update";
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Title title={getTitle} />
      <Form />
    </div>
  );
}
