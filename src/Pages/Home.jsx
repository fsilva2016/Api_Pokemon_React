import React, { useState } from "react";
import PokemonCard from "../Components/PokemonCard";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Container } from "@mui/material"

function Home() {
    const [pokemons, setPokemons] = useState([])
    const limite = 101;
    console.log(pokemons)
    useEffect(() => {
        getPokemon()
    }, [])
    const filterPokemon = (name) => {
        const filterPokemons = [];

        for (let i in pokemons) {
            if (pokemons[i].name.include(name)) {
                filterPokemons.push(pokemons[i])
            }
        }
        setPokemons(filterPokemons)
        // console.log(e.target.value)
        // const valor = axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`).then((res) => console.log(res))
    }

    const getPokemon = () => {
        let endPoints = [];
        // Pega faz uma lista de link com as url dos detalhes do ednpont principal
        for (let i = 1; i < limite; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        //valida ser a conexão com a api
        // ele gerar todos os link dos ednpoints com result de 200
        axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
            .then((res) => setPokemons(res))
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <Navbar filterPokemon={filterPokemon} />
            <Container maxWidth="false">
                <Grid container spacing={2} rowSpacing={5} >
                    {pokemons.map((pokemon, index) => (
                        <Grid item xs={12} sm={4} md={3} lg={3} xl={2} key={index}>
                            <PokemonCard id={pokemon.data.id} name={pokemon.data.name} img={pokemon.data.sprites.other.showdown.front_default} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}


export default Home;