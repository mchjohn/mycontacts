import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';

import { StyledButton } from './styles';

export function Button({
  type,
  disabled,
  isLoading,
  children,
  danger,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      danger={danger}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
};
