import React from "react";

const ProductsFromCollectionSekeleton = ({
  showTitle = true,
}: {
  showTitle?: boolean,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {showTitle && (
        <>
          <div className="h-16 w-1/5 animate-pulse rounded bg-gray-300"></div>
          <div className="mt-5 h-5 w-1/6 animate-pulse rounded bg-gray-300"></div>
        </>
      )}
      <div className="mt-5 grid animate-pulse grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div className="h-48 w-full bg-gray-300"></div>
            <div className="p-4">
              <div className="mb-2 h-6 w-3/4 rounded bg-gray-300"></div>
              <div className="mb-4 h-4 w-5/6 rounded bg-gray-300"></div>
              <div className="flex items-center justify-between">
                <div className="h-6 w-1/4 rounded bg-gray-300"></div>
                <div className="h-8 w-20 rounded bg-gray-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsFromCollectionSekeleton;
