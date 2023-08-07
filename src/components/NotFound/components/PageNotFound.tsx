import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';
import Button from '../../Button';
import ContainerLayout from '../../ContainerLayout';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <ContainerLayout>
      <h3>It seems that this page does not exist</h3>
      <div className="container-pagenotfound">
        <Button onClick={() => navigate(PublicRoutes.HOME)} variant="action">
          Go home
        </Button>
      </div>
    </ContainerLayout>
  );
};
export default PageNotFound;
