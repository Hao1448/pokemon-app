import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalTheme } from '../../base/theme'
import { GlobalStyle } from '../../base/styles'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, Button } from '../../components'
import { h1, h2, p } from '../../base/mixins/text'
import Link from 'next/link';


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
            <GlobalStyle/>
                <Container>
                    <Grid>
                        <ButtonWrap>
                            <Button/>
                        </ButtonWrap>
                        <Img src={"https://pokeres.bastionbot.org/images/pokemon/" + pokemon.id + ".png"}/>
                        <Title>{pokemon.name}</Title>  
                        <Info>   
                            <Row>
                            <RowTitle>Type</RowTitle>
                                <Types>
                                    {pokemon.types.map((type) => {
                                        return ( 
                                            <Type key={type.type.url}>{type.type.name}</Type>       
                                        )
                                    })}
                                </Types>
                            </Row>
                            <Row>
                                <RowTitle>Base stats</RowTitle>
                                {pokemon.stats.map((stat) => {
                                    console.log(stat)
                                    return ( 
                                        <Stat key={stat.stat.url}>
                                            <Type>{stat.stat.name}</Type>
                                            <Type>{stat.base_stat}</Type>
                                        </Stat>
                                    )
                                })}
                            </Row>
                            <Row>
                                <RowTitle>Moves</RowTitle>
                                <Moves>
                                    {pokemon.moves.map((move) => {
                                        let splited = move.move.url.split('/');
                                        let moveId= splited[splited.length - 2]
                                        return ( 
                                            <Link key={move.move.url} href={`/move/${moveId}`}>
                                                <Move move={move.move.name}>{move.move.name}</Move>
                                            </Link>
                                        )
                                    })}
                                </Moves>
                            </Row>
                        </Info> 
                    </Grid>
                </Container>
            </ThemeProvider>
        </Wrapper>
    )

}

const Wrapper = styled.div``

const Title = styled.div`
    ${h1};
    color: ${p => p.theme.color.secondary};
    text-transform: capitalize;
    margin: 0;
    grid-column: 5 / span 4;
    grid-row: 1;
    text-align: center;
    margin-bottom: 10px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`

const Img = styled.img`
    grid-column: 3 / span 4;
    grid-row: 2;
    align-self: center;
    max-width: 100%;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`

const Info = styled.div`
    grid-column: span 4;
    grid-row: 2;
    background-color: ${p => p.theme.color.background};
    border-radius: 30px;
    padding: 30px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        grid-row: 3;
    `}
`

const Type = styled.div`
    ${p};
    text-align: center;
    width: 100%;
`

const Move = styled.div`
    ${p};
    display: flex;
    background-color: ${p => p.theme.color.secondary};
    padding: 5px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover{
        background-color: ${p => p.theme.color.primary};
    }
`

const ButtonWrap = styled.div`
    grid-column: span 2;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        grid-row: 4;
    `}
`

const Row = styled.div`
    ${h2};
    text-align: center;
`

const RowTitle = styled.div`
    margin-bottom: 10px;
`

const Moves = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Types = styled.div`
    display: flex;
    justify-content: space-around;
`
const Stat = styled.div`
    display: flex;
    justify-content: space-around;
`
