import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl my-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
      {title}
    </h2>
  );
};

export default SectionTitle;
