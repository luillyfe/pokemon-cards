import React from 'react';
import Layout from "../src/Layout";
import PokemonList from "../src/PokemonList";

export async function getStaticProps() {
    const list = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(resp => resp.json())
        .then(list => list.results)

    const response = await Promise.all(list.map(l => fetch(l.url).then(resp => resp.json())))
    const pokemonList = response.map(({name, species, sprites, types, id}) => (
        {
            id,
            name,
            url: species.url,
            type: types[0].type.name,
            sprites
        }))

    return {
        props: {pokemonList}
    }
}

const LandingPage = ({pokemonList}) => {
    return (
        <Layout>
            <PokemonList pokemonList={pokemonList} />
        </Layout>
    );
};

export default LandingPage;
