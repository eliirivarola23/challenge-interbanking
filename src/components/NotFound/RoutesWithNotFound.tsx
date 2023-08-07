import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import ContainerLayout from '../ContainerLayout';

const RoutesWithNotFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerLayout>
      <Routes>
        {children}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ContainerLayout>
  );
};

export default RoutesWithNotFound;
