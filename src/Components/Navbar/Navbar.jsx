import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="drop-shadow-md sm:w-full md:w-full lg:w-full my-2 p-1 flex container mx-auto border-solid border-2 border-sky-500">
        <div className="flex-1">
          <ul>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="flex">
          <ul className="px-5">
            <li>Home</li>
          </ul>
          <ul className="px-5">
            <li>Pokemons</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
