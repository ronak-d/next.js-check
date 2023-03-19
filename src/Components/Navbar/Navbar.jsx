import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* border-solid border-2 border-sky-500 */}
      <div className="shadow-lg pt-5 pb-5 p-2 flex container mx-auto ">
        <div className="flex-1 items-center	">
          <ul className="px-5">
            <li className=" font-bold">
              <Link href="../pokemon">Next.js</Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="px-5">
            <li className=" font-bold">
              <Link href="../pokemon">Pokemons</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
