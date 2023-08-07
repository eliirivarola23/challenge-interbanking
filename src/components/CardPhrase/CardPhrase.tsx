import { memo } from 'react';
import { ContainerCard } from './CardPhraseStyles';

interface PropsCardPhrase {
  createdAt: string;
  detail: string;
  color?: string;
}

const CardPhrase = memo(({ createdAt, detail, color }: PropsCardPhrase) => {
  return (
    <ContainerCard color={color}>
      <p>{detail}</p>
      <span>{new Date(createdAt).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
    </ContainerCard>
  );
});

export default CardPhrase;
