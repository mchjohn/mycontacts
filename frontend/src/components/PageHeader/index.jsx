import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';

import { Container } from './styles';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Arrow to left" />
        <span>Back</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
