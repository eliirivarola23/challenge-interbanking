import { useCallback, useState } from 'react';
import Button from '../Button';
import styles from './phraseSave.module.css';
import PhraseSave from './PhraseSave';

const PhraseSaveContainer = ({ updateData }: { updateData: (data: { detail: string; color: string }) => void }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => setOpenModal(prevState => !prevState), []);

  return (
    <>
      <div className={styles.container_button}>
        <Button onClick={handleCloseModal} title="Create Phrase" variant="action" disabled={openModal}>
          +
        </Button>
      </div>
      {openModal && <PhraseSave handleCloseModal={handleCloseModal} open={openModal} updateData={updateData} />}
    </>
  );
};

export default PhraseSaveContainer;
