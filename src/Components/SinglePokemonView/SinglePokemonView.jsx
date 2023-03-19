import Image from "next/image";
import React from "react";

const SinglePokemonView = ({ SinglepokemonData }) => {
  console.log(SinglepokemonData);

  return (
    <>
      {/* border-solid border-2 border-yellow-200 */}
      {/* Whole Container */}
      <div class="sm:flex sm:flex-col lg:flex-row ">
        {/* left */}
        <div class="flex-1 p-4">
          <div class="text-2xl font-extrabold">
            {SinglepokemonData.name.toUpperCase()}
          </div>
          <div class="my-5">
            <Image
              class="border-solid border-2 border-white-200 "
              src={SinglepokemonData.sprites.front_shiny}
              height={200}
              width={280}
              alt="Pokemon front default image"
              priority
            />
          </div>
          {/* height */}
          <div class="my-4">
            <div class="text-2xl font-extrabold">Height</div>
            <div class="text-xl font-medium">{SinglepokemonData.height}</div>
          </div>
          {/* weight */}
          <div class="my-3">
            <div class="text-2xl font-extrabold">Weight</div>
            <div class="text-xl font-medium">{SinglepokemonData.weight}</div>
          </div>
          {/* Versions */}
          <div class="mt-3">
            <div class="text-2xl font-extrabold">Versions</div>
            <div class="flex overflow-x-auto">
              {SinglepokemonData.types.map((e) => {
                return (
                  <div class=" bg-pink-100 text-pink-800 text-xs font-medium mt-3 mr-4 px-3 py-1.5 rounded dark:bg-pink-900 dark:text-xs dark:font-bold	 dark:text-pink-300 ">
                    {e.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* right */}
        <div class="flex-1 px-4 lg:p-4">
          {/* abilities */}
          <div class="text-2xl font-extrabold">Abilities</div>
          <div class="overflow-x-auto flex sm:flex-row md:flex-row">
            {SinglepokemonData.abilities.map((e, index) => {
              return (
                <div
                  key={index}
                  class="bg-pink-100 text-pink-800 text-xs font-medium my-3 mr-4 px-3 py-1.5 rounded dark:font-bold dark:bg-pink-900 dark:text-pink-300"
                >
                  {e.ability.name}
                </div>
              );
            })}
          </div>
          {/* moves */}
          <div class="Moves">
            <div class="text-2xl font-extrabold">Moves</div>
            <div class="overflow-x-auto flex sm:flex-row md:flex-row">
              {SinglepokemonData.moves.slice(0, 5).map((e, index) => {
                return (
                  <div
                    key={index}
                    class=" bg-pink-100 text-pink-800 text-xs font-medium my-3 mr-4 px-3 py-1.5 rounded dark:font-bold dark:bg-pink-900 dark:text-pink-300"
                  >
                    {e.move.name}
                  </div>
                );
              })}
            </div>
          </div>
          {/* stats */}
          <div class="stats">
            <div class="text-2xl font-extrabold">Stats</div>
            <div class="sm:flex-col md:flex-col">
              {SinglepokemonData.stats.map((e, index) => {
                // {
                //   console.log(e.base_stat);
                // }
                return (
                  <div>
                    <div class="text-base font-medium my-3 mx-0.5">
                      {e.stat.name}
                    </div>
                    <div
                      key={index}
                      class="sm:w-2/3 md:w-2/3 lg:w-2/3 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"
                    >
                      <div
                        key={index}
                        class="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
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
