import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SinglePokemonView from "@/Components/SinglePokemonView/SinglePokemonView";

const Pokemonid = ({ SinglepokemonData }) => {
  const router = useRouter();
  const PokemonName = router.query.PokemonName; // taking name from the url bar kind of use-params of react.

  console.log(SinglepokemonData.name);

  return (
    <>
      <SinglePokemonView SinglepokemonData={SinglepokemonData} />
    </>
  );
};

export default Pokemonid;

// making the specific paths static
export async function getStaticPaths() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = res.data;

  const paths = data.results.map((currentPokem) => {
    return {
      // need to give compulsary dynamic route name.
      params: {
        PokemonName: currentPokem.name,
      },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// helping to receive data via inbuilt context.
export async function getStaticProps(context) {
  const name = context.params.PokemonName;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = res.data;

  return {
    props: {
      SinglepokemonData: data,
    },
  };
}
