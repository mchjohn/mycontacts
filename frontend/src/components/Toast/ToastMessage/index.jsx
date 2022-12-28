import PropTypes from 'prop-types';

import check from '../../../assets/images/icons/check.svg';
import error from '../../../assets/images/icons/error.svg';

import { Container } from './styles';

export function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={error} alt="Error signal" />}
      {type === 'success' && <img src={check} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
