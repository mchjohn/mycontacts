import Router from '../../Router';

import { Header } from '../Header';

import { Container } from './styles';

export function Wrapper() {
  return (
    <Container>
      <Header />
      <Router />
    </Container>
  );
}
