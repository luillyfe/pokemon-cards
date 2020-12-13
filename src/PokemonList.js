import React from 'react';
import Pokemon from "./Pokemon";

const style = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap:"wrap"
}

function PokemonList({pokemonList}) {
    return (
        <div className="mt-5" style={style}>
            {pokemonList.map(({id, ...pokemon}) => <Pokemon key={id} {...pokemon}/>)}
        </div>
    );
}

export default PokemonList;
