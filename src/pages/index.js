import React from "react";
import TableComp from "@/Components/Table/TableComp";
import axios from "axios";

const index = ({ pokemons }) => {
  return (
    <>
      <TableComp pokemons={pokemons} />
    </>
  );
};

export default index;

export async function getStaticProps() {
  // const res = await axios.get("https://pokeapi.co/api/v2/ability/");
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = res.data;
  return {
    props: {
      pokemons: data,
    },
  };
}
