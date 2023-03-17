import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* border-solid border-2 border-sky-500 */}
      <div className="shadow-md  p-2 flex container mx-auto border-solid border-2 border-sky-400">
        <div className="flex-1 items-center	">
          <ul className="px-5">
            <li className=" font-bold">
              <Link href="/index">Next.js</Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="px-5">
            <li className=" font-bold">
              <Link href="/">Home</Link>
            </li>
          </ul>
          <ul className="px-5">
            <li className=" font-bold">
              <Link href="../PokemonPage/pokemon">Pokemons</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
