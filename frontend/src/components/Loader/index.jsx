import ProtoTypes from 'prop-types';

import { Spinner } from '../Spinner';
import { ReactPortal } from '../ReactPortal';

import { Overlay } from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: ProtoTypes.bool.isRequired,
};
