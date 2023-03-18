import PageComp from "@/Components/Pagination/PageComp";
import SearchComp from "@/Components/Searchbar/SearchComp";
import TableComp from "@/Components/Table/TableComp";
import React, { useState } from "react";
import axios from "axios";
import index from "..";

const Pokemon = ({ pokemons }) => {
  // console.log(pokemons);
  return (
    <>
      <SearchComp />
      <TableComp pokemons={pokemons} />
    </>
  );
};

export default Pokemon;

export async function getStaticProps() {
  // const res = await axios.get("https://pokeapi.co/api/v2/ability/");
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5");
  const data = res.data;
  return {
    props: {
      pokemons: data,
    },
  };
}
