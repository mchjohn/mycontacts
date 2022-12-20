import logo from '../../assets/images/logo.svg';

import { Container, InputSearchContainer } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" />

      <InputSearchContainer>
        <input placeholder="Search contact..." type="text" />
      </InputSearchContainer>
    </Container>
  );
}
