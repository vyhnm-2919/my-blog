import React from "react";

export const Title = ({ title }) => {
  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">{title}</h2>
      <p className="my-4 text-lg text-gray-500">
        Start developing with an open-source library of over 450+ UI components,
        sections, and pages built with the utility classes from Tailwind CSS and
        designed in Figma.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions. Accelerate critical development work,
        eliminate toil, and deploy changes with ease.
      </p>
    </>
  );
};

export default Title;
