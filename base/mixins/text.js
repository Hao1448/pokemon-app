import { css } from 'styled-components'


const h = ({ theme }) => css`
    font-family: ${theme.fonts.primary};
    color: ${theme.color.black};
    line-height: 1.15;
    margin: 30px 0 0;
    
    &:first-child {
        margin-top: 0;
    }
`

const h1 = ({ theme }) => css`
    ${h};
    font-size: ${theme.fonts.sizes.h1};
`

const h1_mobile = ({ theme }) => css`
    ${h};
    line-height: 1.1;
    font-size: ${theme.fonts.sizes.h1_mobile};
`

const p = ({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fonts.sizes.p};
    color: ${theme.color.black};
    line-height: 160%;
`


export {
    h1,
    h1_mobile,
    p
}