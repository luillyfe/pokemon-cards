import React from 'react';
import axios from 'axios'
import Layout from "../../src/Layout";

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
    const paths = [...Array(10).keys()].map(i => ({params: {id: String(i + 1)}}))
    return {paths, fallback: false}
}

// "https://via.placeholder.com/400x300"
const PokemonDetails = ({name = "NOT FOUND", img}) => {
    return (
        <Layout>
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <figure className="figure">
                    <img src={img} className="figure-img img-fluid rounded" alt={name}/>
                    <figcaption className="figure-caption text-end">{name}</figcaption>
                </figure>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </Layout>
    );
};

export default PokemonDetails;
