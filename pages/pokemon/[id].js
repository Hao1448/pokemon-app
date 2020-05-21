import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid } from '../../components'
import { h1 } from '../../base/mixins/text'


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
    return ( 
        <Wrapper>
            <ThemeProvider theme={GlobalTheme}>
                <Container>
                    <Grid>
                    <Img src={"https://pokeres.bastionbot.org/images/pokemon/" + pokemon.id + ".png"}></Img>
                    <Title>{pokemon.name}</Title>
                    </Grid>
                </Container>
            </ThemeProvider>
        </Wrapper>
    )

}

const Wrapper = styled.div``

const Title = styled.div`
    ${h1};
    margin: 0;
    grid-column: span 6;
    grid-row: 2;
`

const Img = styled.img`
    grid-column: span 5;
    grid-row: 1;
    max-width: 100%;
`
