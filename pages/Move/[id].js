import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalTheme } from '../../base/theme'
import { GlobalStyle } from '../../base/styles'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, Button } from '../../components'
import { h1, h2 } from '../../base/mixins/text'


export const getServerSideProps = ({params: {id}}) => {
    return {props: {id}}
}

export default ({id}) => {
    const [move, setMove] = useState()
    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/move/${id}`)
            .then(res => res.json())
            .then(data => {
                setMove(data)
            })
            
    }, [])
    if(!move) {
        return 'Loading...'
    }
    const moveName = move.name.replace('-', ' ');
    const targetName = move.target.name.replace('-', ' ');
    return ( 
        <Wrapper>
            <ThemeProvider theme={GlobalTheme}>
            <GlobalStyle/>
                <Container>
                    <Row>
                        <Grid>
                            <ButtonWrap>
                                <Button/>
                            </ButtonWrap>
                            <Title>{moveName}</Title>  
                        </Grid>
                    </Row>
                    <Row>
                        <Grid>
                            <MoveInfo>
                                <Grid>
                                    {
                                        move.effect_entries[0].effect && 
                                            <MoveInfoText>
                                                {move.effect_entries[0].effect}
                                            </MoveInfoText>
                                    }
                                    {
                                        move.type.name && 
                                            <MoveInfoItem>
                                                Type: {move.type.name}
                                            </MoveInfoItem>
                                    }
                                    {
                                        move.damage_class.name && 
                                            <MoveInfoItem>
                                                Damage class: {move.damage_class.name}
                                            </MoveInfoItem>
                                    }
                                    {
                                        move.power &&  
                                            <MoveInfoItem>
                                                Power: {move.power}
                                            </MoveInfoItem>
                                    }
                                    {
                                        move.accuracy && 
                                            <MoveInfoItem>
                                                Accuracy: {move.accuracy}  
                                            </MoveInfoItem>
                                    }
                                    {
                                        targetName &&  
                                            <MoveInfoItem>
                                                Target: {targetName}
                                            </MoveInfoItem>
                                    }
                                </Grid>
                            </MoveInfo>
                        </Grid>
                    </Row>
                </Container>
            </ThemeProvider>
        </Wrapper>
    )

}

const Wrapper = styled.div``

const Title = styled.div`
    ${h1};
    color: ${p => p.theme.color.primary};
    text-transform: capitalize;
    margin: 0;
    grid-column: 5 / span 4;
    grid-row: 1;
    text-align: center;
    margin-bottom: 30px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`

const MoveInfo = styled.div`
    grid-column: 3 / span 8;
    background-color: ${p => p.theme.color.background};
    border-radius: 30px;
    padding: 40px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`
const MoveInfoText = styled.div`
    ${h2};
    text-align: center;
    grid-column: span 12;
    grid-row: 1;
    margin-bottom: 20px;
`

const MoveInfoItem = styled.div`
    ${h2};
    margin: 0;
    text-align: center;
    grid-column: span 6;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`

const ButtonWrap = styled.div`
    grid-column: span 2;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        grid-row: 2;
        margin-bottom: 20px;
    `}
`

const Row = styled.div``



