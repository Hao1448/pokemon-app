import styled from 'styled-components'

const CardPokemon = () => {
    return (
        <Wrapper>
            <Image/>
            <Title>Pickachu</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 200px;
    width: 200px;
    background-color: red;
`

const Title = styled.div`

`

const Image = styled.img``

export default CardPokemon