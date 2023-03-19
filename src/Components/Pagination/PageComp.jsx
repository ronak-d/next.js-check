import React from "react";

const PageComp = ({ handlePageChange, totalPages, currentPage }) => {
  // console.log(handlePageChange, totalPages);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div class="items-center m-10">
        <ul class="inline-flex items-center -space-x-px">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              class="px-3 py-2 leading-tight text-gray-500 bg-white border
              border-gray-300 hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
              dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {pageNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageComp;
