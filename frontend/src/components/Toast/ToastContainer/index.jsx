import { ToastMessage } from '../ToastMessage';

import { useToastContainer } from './useToastContainer';

import { Container } from './styles';

export function ToastContainer() {
  const {
    renderList,
    handleRemoveItems,
  } = useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
          onRenoveMessage={handleRemoveItems}
        />
      ))}
    </Container>
  );
}
