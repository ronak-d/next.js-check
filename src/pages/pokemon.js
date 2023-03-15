import PageComp from "@/Components/Pagination/PageComp";
import SearchComp from "@/Components/Searchbar/SearchComp";
import TableComp from "@/Components/Table/TableComp";
import React from "react";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/ability/");
  // const data = await res.json();

  return {
    props: {
      data: res,
    },
  };
};

const Pokemon = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <SearchComp />
        <TableComp />
        <div>Pokemon page</div>
        <PageComp />
      </div>
    </>
  );
};

export default Pokemon;
