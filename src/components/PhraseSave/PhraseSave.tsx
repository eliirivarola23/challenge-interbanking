import { useState } from 'react';
import { phrasesServices } from '../../services/phrasesServices';
import { SnackbarUtilities } from '../../helpers/snackbar-manager';
import Modal from '../Modal';
import Button from '../Button';
import styles from './phraseSave.module.css';
import { COLOR_LIST } from './constants';

interface PropsPhraseSave {
  open: boolean;
  handleCloseModal: () => void;
  updateData: (data: { detail: string; color: string }) => void;
}
const PhraseSave = ({ open, handleCloseModal, updateData }: PropsPhraseSave) => {
  const [loading, setLoading] = useState(false);
  const [detailPhrase, setDetailPhrase] = useState({ color: 'var(--orange-primary)', detail: '' });
  const [error, setError] = useState('');

  const handleChange = (e: any) => setDetailPhrase(prevDetailPhrase => ({ ...prevDetailPhrase, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    const detail = detailPhrase.detail;
    if (!detail || !detail?.trim()?.length) {
      setError('El campo es requerido');
    } else {
      try {
        setError('');
        setLoading(true);
        const { data } = await phrasesServices.phraseSave(detailPhrase);
        updateData(data);
        handleCloseModal();
      } catch (error) {
        SnackbarUtilities.error('There was an error performing the search, please try again');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal open={open} handleCloseModal={handleCloseModal} title="Create Phrase">
      <div className={`${error && styles['error']} ${styles.container_phrase_save}`}>
        <textarea
          placeholder="Write a Phrase"
          onChange={e => handleChange({ target: { name: 'detail', value: e.target.value } })}
          value={detailPhrase.detail}
          rows={250}
          cols={50}
        />
        <span>{error}</span>
        <div className={styles.container_phrase_color}>
          <h4>Choise one color</h4>
          <div>
            {COLOR_LIST.map((color, index) => (
              <Button
                key={`PhraseSave_${index}`}
                disabled={color === detailPhrase.color}
                color={color}
                onClick={() => handleChange({ target: { name: 'color', value: color } })}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="modal-actions">
        <Button>Cancel</Button>
        <Button variant="action" disabled={loading} loading={loading} onClick={handleSubmit}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default PhraseSave;
