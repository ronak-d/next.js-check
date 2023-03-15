import React from "react";

const SearchComp = () => {
  return (
    <>
      <div>
        <input
          className="w-full p-3 my-7 my-4 dark:bg-slate-900 border-solid border-2 border-sky-500 rounded"
          type="text"
          placeholder="Search for Pokemon's"
        />
      </div>
    </>
  );
};

export default SearchComp;
