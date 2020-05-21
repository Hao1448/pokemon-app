import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalTheme } from '../../base/theme'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid } from '../../components'
import { h1, h2, p } from '../../base/mixins/text'


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
    console.log(pokemon)
    return ( 
        <Wrapper>
            <ThemeProvider theme={GlobalTheme}>
                <Container>
                    <Grid>
                        <Img src={"https://pokeres.bastionbot.org/images/pokemon/" + pokemon.id + ".png"}/>
                        <Info>  
                            <Title>{pokemon.name}</Title>   
                            <RowType>
                                Type
                                <Types>
                                    {pokemon.types.map((type) => {
                                        return ( 
                                            <Type>{type.type.name}</Type>       
                                        )
                                    })}
                                </Types>
                            </RowType>
                            <RowStats>
                                Base stats
                                {pokemon.stats.map((stat) => {
                                    return ( 
                                        <Stat>
                                            <Type>{stat.stat.name}</Type>
                                            <Type>{stat.base_stat}</Type>
                                        </Stat>
                                    )
                                })}
                            </RowStats>
                            <AbilitiesData>
                                Abilitites
                                {pokemon.abilities.map((ability) => {
                                    return ( 
                                        <Type>{ability.ability.name}</Type>
                                    )
                                })}
                            </AbilitiesData>
                            
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
    grid-column: span 6;
    grid-row: 2;
`

const Img = styled.img`
    grid-column: 2 / span 4;
    grid-row: 1;
    align-self: center;
    max-width: 100%;
`

const Info = styled.div`
    grid-column: span 3;
`

const Type = styled.div`
    /* ${p}; */
    text-align: center;
    width: 100%;
`
const RowType = styled.div`
    ${h2};
    text-align: center;
`
const RowStats = styled.div`
    ${h2};
    text-align: center;
`

const Types = styled.div`
    display: flex;
    justify-content: space-around;
`
const AbilitiesData = styled.div`
    ${h2};
    text-align: center;
`
const Stat = styled.div`
    display: flex;
    justify-content: space-around;
`