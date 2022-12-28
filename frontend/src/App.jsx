import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './components/Wrapper';
import { ToastContainer } from './components/Toast/ToastContainer';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Wrapper />

        <GlobalStyles />

        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
