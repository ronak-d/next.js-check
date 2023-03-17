import React from "react";
import { useRouter } from "next/router";

const Pokemonid = () => {
  const router = useRouter();
  const PokemonName = router.query.PokemonName;

  return <div>The Pokemon {PokemonName}</div>;
};

export default Pokemonid;
