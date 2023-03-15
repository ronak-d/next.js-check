import React from "react";

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
            </tr>
          </thead>
          {pokemons.results.map((currPokemon, index) => {
            return (
              <tbody key={index}>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </td>
                  <td class="px-6 py-4">{currPokemon.name}</td>
                  <td class="px-6 py-4">{currPokemon.url}</td>
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
