import ReactDOM from 'react-dom';
import ProtoTypes from 'prop-types';

import { Spinner } from '../Spinner';

import { Overlay } from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) { return null; }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: ProtoTypes.bool.isRequired,
};
