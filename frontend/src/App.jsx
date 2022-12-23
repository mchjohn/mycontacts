import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './components/Wrapper';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Wrapper />

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
