import { memo } from 'react';
import Message from '../../Message';

interface PropsContaineCard {
  loading: boolean;
  hasResults: boolean;
  children?: React.ReactNode;
  searchParams: string;
}
const CardPhraseContain = memo(({ loading, hasResults, searchParams, children }: PropsContaineCard) => {
  if (!loading && !hasResults && !searchParams) return <Message message="Add your first phrase" idTest="test-no-phrase" />;
  if (!loading && !hasResults) return <Message message="No results found" idTest="test-not-results" />;
  return children;
});

export default CardPhraseContain;
