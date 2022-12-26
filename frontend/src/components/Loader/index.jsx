import ReactDOM from 'react-dom';
import ProtoTypes from 'prop-types';

import { Overlay } from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) { return null; }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: ProtoTypes.bool.isRequired,
};