import { useToastContainer } from './useToastContainer';

import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const { messages, handleRemoveMessage } = useToastContainer();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRenoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
