import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import {
  Container, Header, ListContainer, Card,
} from './styles';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contacts</strong>
        <a href="/">New contact</a>
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
            <a href="/">
              <img src={edit} alt="pencil with square" />
            </a>

            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="pencil with square" />
            </a>

            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
