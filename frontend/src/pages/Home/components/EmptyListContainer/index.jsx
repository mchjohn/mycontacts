/* eslint-disable react/jsx-one-expression-per-line */
import alert from '../../../../assets/images/icons/alert.svg';

import { Container } from './styles';

export function EmptyListContainer() {
  return (
    <Container>
      <img src={alert} alt="alert signal" />

      <p>
        You do not have any registered contacts.
      </p>
      <p>
        Click on <strong> &ldquo;New contact&ldquo; </strong>
        to register a contact.
      </p>
    </Container>
  );
}
