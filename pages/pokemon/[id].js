import React from 'react';
import axios from 'axios'

export async function getStaticProps({params}) {
    const details = (await axios(`https://pokeapi.co/api/v2/pokemon/${params.id}`)).data;
    const {name, sprites} = details

    return {
        props: {
            name,
            img: sprites.front_default
        }
    }
}

export async function getStaticPaths() {
    const paths =  [...Array(10).keys()].map(i => ({params: {id: String(i+1)}}))
    return {paths, fallback: false}
}

// "https://via.placeholder.com/400x300"
const PokemonDetails = ({name = "NOT FOUND", img}) => {
    return (
        <figure className="figure">
            <img src={img} className="figure-img img-fluid rounded" alt={name}/>
            <figcaption className="figure-caption text-end">{name}</figcaption>
        </figure>
    );
};

export default PokemonDetails;
