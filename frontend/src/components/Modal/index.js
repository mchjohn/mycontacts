import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import { Overlay, Container, Footer } from './styles';

export function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Modals title</h1>
        <p>Modals body</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancel
          </button>

          <Button type="button" danger={danger}>
            Delete
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
