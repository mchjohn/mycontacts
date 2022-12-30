import PropTypes from 'prop-types';

import errorIcon from '../../../../assets/images/icons/error.svg';

import { Button } from '../../../../components/Button';

import { Container } from './styles';

export function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={errorIcon} alt="alert signal" />
      <div className="details">
        <strong>An error occurred while to get your contacts.</strong>

        <Button type="button" onClick={onTryAgain}>
          Try again
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
