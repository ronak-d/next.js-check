import React from "react";
import { useRouter } from "next/router";

const Pokemonid = () => {
  const router = useRouter();
  const PokemonName = router.query.PokemonName;

  return <div>The Pokemon {PokemonName}</div>;
};

export default Pokemonid;

export async function getStaticProps() {
  // const res = await axios.get("https://pokeapi.co/api/v2/ability/");
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = res.data;
  return {
    props: {
      pokemons: data,
    },
  };
}
