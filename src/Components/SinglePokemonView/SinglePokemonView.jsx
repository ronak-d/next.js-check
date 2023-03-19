import Image from "next/image";
import React from "react";

const SinglePokemonView = ({ SinglepokemonData }) => {
  console.log(SinglepokemonData);

  return (
    <>
      {/* border-solid border-2 border-yellow-200 */}
      {/* Whole Container */}
      <div className="sm:flex sm:flex-col lg:flex-row ">
        {/* left */}
        <div className="flex-1 p-4">
          <div className="text-2xl font-extrabold">
            {SinglepokemonData.name.toUpperCase()}
          </div>
          <div className="my-5">
            <Image
              className="border-solid border-2 border-white-200 "
              src={SinglepokemonData.sprites.front_shiny}
              height={250}
              width={280}
              alt="Pokemon front default image"
              priority
            />
          </div>
          {/* height */}
          <div className="my-4">
            <div className="text-2xl font-extrabold">Height</div>
            <div className="text-xl font-medium">
              {SinglepokemonData.height}
            </div>
          </div>
          {/* weight */}
          <div className="my-3">
            <div className="text-2xl font-extrabold">Weight</div>
            <div className="text-xl font-medium">
              {SinglepokemonData.weight}
            </div>
          </div>
          {/* Versions */}
          <div className="mt-3">
            <div className="text-2xl font-extrabold">Versions</div>
            <div className="flex overflow-x-auto">
              {SinglepokemonData.types.map((e) => {
                return (
                  <div className=" bg-pink-100 text-pink-800 text-xs font-medium mt-3 mr-4 px-3 py-1.5 rounded dark:bg-pink-900 dark:text-xs dark:font-bold	 dark:text-pink-300 ">
                    {e.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 px-4 lg:p-4">
          {/* abilities */}
          <div className="text-2xl font-extrabold">Abilities</div>
          <div className="overflow-x-auto flex sm:flex-row md:flex-row">
            {SinglepokemonData.abilities.map((e, index) => {
              return (
                <div
                  key={index}
                  className="bg-pink-100 text-pink-800 text-xs font-medium my-3 mr-4 px-3 py-1.5 rounded dark:font-bold dark:bg-pink-900 dark:text-pink-300"
                >
                  {e.ability.name}
                </div>
              );
            })}
          </div>
          {/* moves */}
          <div className="Moves">
            <div className="text-2xl font-extrabold">Moves</div>
            <div className="overflow-x-auto flex sm:flex-row md:flex-row">
              {SinglepokemonData.moves.slice(0, 5).map((e, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-pink-100 text-pink-800 text-xs font-medium my-3 mr-4 px-3 py-1.5 rounded dark:font-bold dark:bg-pink-900 dark:text-pink-300"
                  >
                    {e.move.name}
                  </div>
                );
              })}
            </div>
          </div>
          {/* stats */}
          <div className="stats">
            <div className="text-2xl font-extrabold">Stats</div>
            <div className="sm:flex-col md:flex-col">
              {SinglepokemonData.stats.map((e, index) => {
                // {
                //   console.log(e.base_stat);
                // }
                return (
                  <div>
                    <div className="text-base font-medium my-3 mx-0.5">
                      {e.stat.name}
                    </div>
                    <div
                      key={index}
                      className="sm:w-2/3 md:w-2/3 lg:w-2/3 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"
                    >
                      <div
                        key={index}
                        className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
                        style={{ width: `${e.base_stat}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePokemonView;
