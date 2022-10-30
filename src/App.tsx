import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GithubProvider } from './contexts';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GithubProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</GithubProvider>
			
			<GlobalStyle />
		</ThemeProvider>
	);
}
