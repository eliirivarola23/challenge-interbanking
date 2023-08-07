import List from '../../components/List';
import { useSEOHeadData } from '../../hooks/useSEOHeadData';

const Home = () => {
  useSEOHeadData({ title: 'Home' });

  return (
    <>
      <h1>Home</h1>
      <List />
    </>
  );
};

export default Home;
