import ContainerLayout from '../ContainerLayout';

interface PropsMessage {
  message?: string;
  idTest?: string;
}

const Message = ({ message = 'Cargando...', idTest = 'test-loading' }: PropsMessage) => {
  return <ContainerLayout idTest={idTest}>{message}</ContainerLayout>;
};

export default Message;
