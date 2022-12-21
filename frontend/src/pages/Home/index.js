import { Link } from 'react-router-dom';

import edit from '../../assets/images/icons/edit.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import { Modal } from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal danger />

      <InputSearchContainer>
        <input placeholder="Search contact..." type="text" />
      </InputSearchContainer>

      <Header>
        <strong>3 contacts</strong>
        <Link to="/new">New contact</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Michel John</strong>
              <small>github</small>
            </div>

            <span>michel.john@hotmail.com</span>
            <span>(21) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="pencil with square" />
            </Link>

            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
