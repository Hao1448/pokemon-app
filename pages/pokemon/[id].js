import { useEffect, useState } from 'react';


export const getServerSideProps = ({params: {id}}) => {
    return {props: {id}}
}

export default ({id}) => {
    const [pokemon, setPokemon] = useState()
    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
            })
    }, [])
    if(!pokemon) {
        return 'Loading...'
    }
    return(
        <h1>{pokemon.name}</h1>
    )


}