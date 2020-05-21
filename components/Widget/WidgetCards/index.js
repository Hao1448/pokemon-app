import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardPokemon } from '../../../components'
import { useEffect, useState } from 'react';
import { h2 } from '../../../base/mixins/text'

const WidgetCards = () => {
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState('');
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/type/1")
            .then(res => res.json())
            .then(data => {
                const sliceData = data.pokemon.slice(0, 20);
                const pokemons = sliceData.map(item => {
                    let splited = item.pokemon.url.split('/');
                    const id = splited[splited.length - 2]
                    return {
                        name: item.pokemon.name,
                        id,
                        img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
                    }
                })
                setPokemons(pokemons)
            })
    }, [])
    if(!pokemons.length) {
        return 'Loading...'
    }
    const filteredPokemons = pokemons.filter(pokemon => {
        return !search || pokemon.name.indexOf(search) != -1;
    })
    
    return (
        <Wrapper>
            <Container> 
                <Grid>
                    <Input value={search} onChange={e => setSearch(e.target.value)} />
                </Grid>
                <Grid gap="50px 20px">
                    {
                        filteredPokemons.map(({name, id, img}) => {
                            return (
                                <CardWrapper>
                                    <CardPokemon {...{name, id, img}} />
                                </CardWrapper>
                            )
                        })
                    }
                </Grid>
            </Container>  
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 40px 0;
`

const CardWrapper = styled.div`
    grid-column: span 3;
    justify-self: center;
    ${breakpoint('xs', 'sm')`
        grid-column: span 6;
    `}
`

const Input = styled.input`
    ${h2};
    margin-bottom: 30px;
    padding: 10px;
    grid-row: 1;
    grid-column: 4 / span 6;
    border-radius: 10px;
    border: 1px solid ${p => p.theme.color.secondary};
    color: ${p => p.theme.color.black};
    &:hover, &:focus, &:active {
        outline: none;
    }
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
    
`
export default WidgetCards