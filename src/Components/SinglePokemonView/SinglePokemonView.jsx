import React from "react";

const SinglePokemonView = ({ SinglepokemonData }) => {
  console.log(SinglepokemonData);

  return (
    <>
      <div class=" flex sm:flex-col lg:flex-row border-solid border-2 border-yellow-200">
        {/* left */}
        <div class="flex-1 p-4 border-solid border-2 border-black-200">
          <div class="text-2xl font-extrabold">
            {SinglepokemonData.name.toUpperCase()}
          </div>
        </div>
        {/* right */}
        <div class="flex-1 p-4 border-solid border-2 border-sky-300">
          {/* abilities */}
          <div class="abilities">
            <div class="text-2xl font-extrabold">Abilities</div>
            <div class="flex sm:flex-row md:flex-row">
              {SinglepokemonData.abilities.map((e, index) => {
                return (
                  <div
                    key={index}
                    class="bg-pink-100 text-pink-800 text-xs font-medium my-3 mr-4 px-3 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300"
                  >
                    {e.ability.name}
                  </div>
                );
              })}
            </div>
            {/* moves */}
            <div class="Moves">
              <div class="text-2xl font-extrabold">Moves</div>
              <div class="flex sm:flex-row md:flex-row">
                {SinglepokemonData.moves.slice(0, 5).map((e, index) => {
                  return (
                    <div
                      key={index}
                      class="bg-pink-100 text-pink-800 text-xs font-medium my-3 mr-4 px-3 py-1.5 rounded dark:bg-pink-900 dark:text-pink-300"
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
              <div class="flex sm:flex-col md:flex-col">
                {SinglepokemonData.stats.map((e, index) => {
                  {
                    console.log(e.base_stat);
                  }
                  return (
                    <div>
                      <div class="text-base font-medium my-2 mx-0.5">
                        {e.stat.name}
                      </div>
                      <div
                        key={index}
                        class="w-1/3 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"
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
      </div>
    </>
  );
};

export default SinglePokemonView;
