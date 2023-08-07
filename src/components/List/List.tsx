import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { phrasesServices } from '../../services/phrasesServices';
import styles from './List.module.css';
import { useSEOHeadData } from '../../hooks/useSEOHeadData';
import Message from '../Message';
import CardPhrase from '../CardPhrase';
import CardPhraseContain from './components/CardPhraseContain';
import PhraseSaveContainer from '../PhraseSave/PhraseSaveContainer';

interface DataDetails {
  detail: string;
  color: string;
  createdAt: string;
  id: string;
}

const List = () => {
  const location = useLocation();
  const [data, setData] = useState<DataDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search)).search?.replace('=', ''), [location.search]);
  useSEOHeadData({ title: loading ? 'Cargando...' : searchParams?.trim() });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await phrasesServices.listPhrases({ ...(searchParams && { detail: searchParams }) });
        if (response) setData(response.data);
      } catch (error) {
        setError('There was an error performing the search, please try again');
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      setData([]);
      setError('');
    };
  }, [searchParams]);

  const updateData = (newData: DataDetails) => {
    const cloneData = [...data];
    if (newData) cloneData?.push(newData);
    setData(cloneData);
  };

  if (loading) return <Message idTest="test-loading" />;
  if (error) return <Message message={error} idTest="test-error" />;

  return (
    <>
      <PhraseSaveContainer updateData={updateData} />
      <CardPhraseContain loading={loading} hasResults={data?.length > 0} searchParams={searchParams}>
        <div className={styles.container} data-testid="test-results">
          {data?.map(({ createdAt, detail, id, color }) => (
            <CardPhrase key={`List_${id}`} detail={detail} createdAt={createdAt} color={color} />
          ))}
        </div>
      </CardPhraseContain>
    </>
  );
};

export default List;
