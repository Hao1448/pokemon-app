import styled from 'styled-components'
import { h1 } from '../../base/mixins/text'
import { Container } from '../../components'

const Header = () => {
    return (
        <Wrapper>
            <Container> 
                <Title>
                    Choose your Pokemon!
                </Title>
            </Container>  
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
`
const Title = styled.div`
    ${h1};
`

export default Header