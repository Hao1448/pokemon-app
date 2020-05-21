import Router from 'next/router'
import styled from 'styled-components'
import { h2 } from '../../base/mixins/text'

export default function BackButton() {
    return (
        <Wrapper onClick={() => Router.back()}>Go Back</Wrapper>
    )
}
const Wrapper = styled.div`
    ${h2};
    cursor: pointer;
    border-radius: 5px;
    background-color: ${p => p.theme.color.secondary};
    padding: 10px 5px;
    color: ${p => p.theme.color.white};
    text-align: center;
`