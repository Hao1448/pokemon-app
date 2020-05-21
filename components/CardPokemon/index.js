import styled from 'styled-components'
import { h2 } from '../../base/mixins/text'
import Link from 'next/link';

const CardPokemon = ({name, id, img}) => {
    return (
        <Wrapper>
         <Link href={`/pokemon/${id}`}>
         <LinkWrapper>
            <Image src={img}/>
            <Title>
                <Text>
                    <a>{name}</a>
                </Text>
            </Title>
            </LinkWrapper>
            </Link>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
    transition: box-shadow 0.2s;
    &:hover {
        box-shadow: 0 0 10px 5px  ${p => p.theme.color.secondary};
    }
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.div`
    ${h2};
    color: ${p => p.theme.color.primary};
    margin: 0;
`

const Image = styled.img`
    max-width: 100%;
`
const LinkWrapper = styled.div``
export default CardPokemon