import { Header } from '../Header';
import { ContactsList } from '../ContactsList';

import { Container } from './styles';

export function Wrapper() {
  return (
    <Container>
      <Header />
      <ContactsList />
    </Container>
  );
}
