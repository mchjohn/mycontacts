import { useToastContainer } from './useToastContainer';

import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const {
    messages,
    pendingRemovalMessagesIds,
    handleAnimationEnd,
    handleRemoveMessage,
  } = useToastContainer();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onAnimationEnd={handleAnimationEnd}
          onRenoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
        />
      ))}
    </Container>
  );
}
