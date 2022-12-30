/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';

import emptySearch from '../../../../assets/images/icons/empty-search.svg';

import { Container } from './styles';

export function SearchNotFoundContainer({ searchTerm }) {
  return (
    <Container>
      <img src={emptySearch} alt="Magnifying glass" />
      <span>No results were found for <strong>&ldquo;{searchTerm}&ldquo;</strong>.</span>
    </Container>
  );
}

SearchNotFoundContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
