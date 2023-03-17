import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const TableComp = ({ pokemons }) => {
  console.log(pokemons.results);
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Index
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                More details
              </th>
            </tr>
          </thead>
          {pokemons.results.map((currPokemon, index) => {
            const PokemonId = uuidv4();

            return (
              <tbody>
                <tr
                  key={index + 1}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </td>
                  <td class="px-6 py-4 font-medium">{currPokemon.name}</td>
                  <td class="px-6 py-4 font-medium">
                    <img src={currPokemon.url} alt={currPokemon.name} />
                  </td>
                  <td class="px-6 py-4 font-medium">
                    <Link href={`../PokemonPage/${currPokemon.name}`}>→</Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TableComp;
