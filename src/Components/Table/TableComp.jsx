import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageComp from "../Pagination/PageComp";

const TableComp = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pokemons.results.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemons.results.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(currentItems, totalPages);
  return (
    <>
      <div class="overflow-x-auto">
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
                More details
              </th>
            </tr>
          </thead>
          {currentItems.map((currPokemon, index) => {
            const PokemonId = uuidv4();

            return (
              <tbody>
                <tr
                  key={index + 1}
                  class="bg-white border-b my-3 dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </td>
                  <td class="px-6 py-4 font-medium">
                    {/* capitalizing first letter and adding remaining letters */}
                    {currPokemon.name.charAt(0).toUpperCase() +
                      currPokemon.name.slice(1)}
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

      <PageComp
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};

export default TableComp;
