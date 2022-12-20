import { ThemeProvider } from 'styled-components';

import { Wrapper } from './components/Wrapper';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Wrapper />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
