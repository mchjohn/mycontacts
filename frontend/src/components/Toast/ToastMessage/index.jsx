import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';

import check from '../../../assets/images/icons/check.svg';
import error from '../../../assets/images/icons/error.svg';

import { Container } from './styles';

function ToastMessage({
  message, onRenoveMessage, isLeaving, animatedRef,
}) {
  function handleRemoveToast() {
    onRenoveMessage(message.id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRenoveMessage(message.id);
    }, message.duration || 5000);

    return () => clearTimeout(timeoutId);
  }, [message.duration, message.id, onRenoveMessage]);

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      isLeaving={isLeaving}
      ref={animatedRef}
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
  isLeaving: PropTypes.bool.isRequired,
  onRenoveMessage: PropTypes.func.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

export default memo(ToastMessage);
