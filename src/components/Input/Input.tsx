import { memo } from 'react';
import styles from './input.module.css';
import { useHandleInput } from './hooks/useHandleInput';
import Button from '../Button';

interface PropsInput {
  placeholder?: string;
  type?: 'text' | 'search';
  label?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitSearch?: () => void;
}

const Input = memo(({ placeholder = '', label = '', type = 'text', value, name, onChange, handleSubmitSearch }: PropsInput) => {
  const { handleChange, handleSubmit, handleKeyPress, innerValue } = useHandleInput({
    type,
    value,
    onChange,
    handleSubmitSearch,
  });

  return (
    <div className={styles.container_input}>
      <label htmlFor={name}>{label}</label>
      <input
        data-testid="test-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={innerValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      {type === 'search' && (
        <Button onClick={handleSubmit} title="Search">
          ⮞
        </Button>
      )}
    </div>
  );
});

export default Input;
