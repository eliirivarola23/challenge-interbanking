import { WrapperModal } from './ModalStyles';
import ModalTitle from './components/ModalTitle';
import ModalContent from './components/ModalContent';
import ModalActions from './components/ModalActions';
import Button from '../../components/Button';
import ReactDOM from 'react-dom';
import ContainerLayout from '../ContainerLayout';

interface PropsInnerModal {
  open: boolean;
  handleCloseModal: () => void;
  customButtons?: React.ReactNode;
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

const InnerModal = ({ open, handleCloseModal, customButtons, title, text, children }: PropsInnerModal) => {
  if (!open) return null;

  return (
    <ContainerLayout>
      <WrapperModal>
        <Button onClick={handleCloseModal}>x</Button>
        <section>
          <ModalTitle title={title}/>
          <div className="modal-container">
            <ModalContent text={text}>{children}</ModalContent>
          </div>
          {customButtons && <ModalActions>{customButtons}</ModalActions>}
        </section>
      </WrapperModal>
    </ContainerLayout>
  );
};

InnerModal.ModalTitle = ModalTitle;
InnerModal.ModalContent = ModalContent;
InnerModal.ModalActions = ModalActions;

const Modal = (props: PropsInnerModal) => {
  if (Object.keys(props).length < 1) return null;
  const modalElement = document.getElementById('modal');
  if (!modalElement) return null;

  return ReactDOM.createPortal(<InnerModal {...props} />, modalElement);
};

export default Modal;