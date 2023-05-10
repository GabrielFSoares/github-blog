import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${(props) => props.theme['base-background']};
		color: ${(props) => props.theme['base-text']};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
		line-height: 160%;
	}

    h1 {
        color: ${(props) => props.theme['base-title']};
        font-weight: 700;
    }

    h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
    }
`
