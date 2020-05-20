import styled from 'styled-components'
import { Container, Grid, CardPokemon } from '../../../components'

const WidgetCards = () => {
    return (
        <Wrapper>
            <Container> 
                <Grid>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper> 
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>  <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                     <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPokemon/>
                    </CardWrapper>
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
`
export default WidgetCards