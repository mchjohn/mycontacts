import Routes from '../../Routes';

import { Header } from '../Header';

import { Container } from './styles';

export function Wrapper() {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  );
}
