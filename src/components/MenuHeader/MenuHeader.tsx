import { Link } from 'react-router-dom';
import LogoPhrases from '../../assets/logo_phrases.svg';
import styles from './menuHeader.module.css';
import { PublicRoutes } from '../../models/routes';

const MenuHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <header>
        <nav>
          <Link to={PublicRoutes.HOME}>
            <img src={LogoPhrases} alt="logo of the Phrases" width="80px" />
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default MenuHeader;
