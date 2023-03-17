import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Pokemonid = ({ SinglepokemonData }) => {
  const router = useRouter();
  const PokemonName = router.query.PokemonName;

  // const { name } = SinglepokemonData;
  console.log(SinglepokemonData.name);

  return <div>The Pokemon {SinglepokemonData.name}</div>;
};

export default Pokemonid;

export async function getStaticPaths() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = res.data;

  const paths = data.results.map((currentPokem) => {
    return {
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
