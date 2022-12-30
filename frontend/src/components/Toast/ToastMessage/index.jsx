import { useEffect } from 'react';
import PropTypes from 'prop-types';

import check from '../../../assets/images/icons/check.svg';
import error from '../../../assets/images/icons/error.svg';

import { Container } from './styles';

export function ToastMessage({ message, onRenoveMessage }) {
  function handleRemoveToast() {
    onRenoveMessage(message.id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRenoveMessage(message.id);
    }, message.duration || 7000);

    return () => clearTimeout(timeoutId);
  }, [message.duration, message.id, onRenoveMessage]);

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      onClick={handleRemoveToast}
    >
      {message.type === 'danger' && <img src={error} alt="Error signal" />}
      {message.type === 'success' && <img src={check} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    duration: PropTypes.number,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,
  onRenoveMessage: PropTypes.func.isRequired,
};
