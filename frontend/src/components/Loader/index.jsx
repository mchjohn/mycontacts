import ProtoTypes from 'prop-types';

import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount';

import { Spinner } from '../Spinner';
import { ReactPortal } from '../ReactPortal';

import { Overlay } from './styles';

export function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: ProtoTypes.bool.isRequired,
};
