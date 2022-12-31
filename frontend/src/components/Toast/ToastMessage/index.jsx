import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import check from '../../../assets/images/icons/check.svg';
import error from '../../../assets/images/icons/error.svg';

import { Container } from './styles';

export function ToastMessage({
  message, onRenoveMessage, isLeaving, onAnimationEnd,
}) {
  const animatedElementRef = useRef(null);

  function handleRemoveToast() {
    onRenoveMessage(message.id);
  }

  useEffect(() => {
    function handleAnimationEnd() {
      onAnimationEnd(message.id);
    }

    const elementRef = animatedElementRef.current;

    if (isLeaving) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      elementRef.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isLeaving, message.id, onAnimationEnd]);

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
      ref={animatedElementRef}
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
  onAnimationEnd: PropTypes.func.isRequired,
  onRenoveMessage: PropTypes.func.isRequired,
};
