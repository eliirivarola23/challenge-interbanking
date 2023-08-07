import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface PropsInput {
  type?: 'text' | 'search';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitSearch?: () => void;
}

export const useHandleInput = ({ value, type, onChange, handleSubmitSearch }: PropsInput) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search))?.search?.replace('=', ''), [location.search]);
  const [innerValue, setInnerValue] = useState(value || searchParams || '');

  const navigateToList = () => {
    if (handleSubmitSearch) return handleSubmitSearch();
    navigate(`${location.pathname}?${new URLSearchParams({ search: innerValue?.replace('=', '') }).toString()}`);
  };

  const clearValue = () => navigate(location.pathname);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (onChange) {
      onChange(e);
    } else setInnerValue(value);
    if (searchParams && !e.target.value) clearValue();
  };

  const handleSubmit = () => {
    if (innerValue.trim() && !!innerValue) navigateToList();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && type === 'search' && innerValue.trim()) navigateToList();
  };

  return { handleChange, handleSubmit, handleKeyPress, innerValue };
};
