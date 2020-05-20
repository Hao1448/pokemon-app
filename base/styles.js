// import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { GlobalFonts } from './fonts.js'

export const GlobalStyle = createGlobalStyle`
	${GlobalFonts}
	${'' /* ${normalize}	 */}

	${'' /* html {
		overflow-x: initial;
	} */}

	body {	
		font-family: 'Cormorant';
		background: ${p => p.theme.color.background};
	}

`