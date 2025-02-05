import React from "react";

const loading = () => {
  return (
    <div className="p-5">
      <div className="h-16 w-1/6 animate-pulse rounded bg-gray-300"></div>
      <div className="mt-3 h-8 w-1/5 animate-pulse rounded bg-gray-300"></div>
    </div>
  );
};

export default loading;
