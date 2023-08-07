import ContainerLayout from '../ContainerLayout';
import Input from '../Input';
import MenuHeader from '../MenuHeader/MenuHeader';
import styles from './headerWithSearch.module.css';

const HeaderWithSearch = () => {
  return (
    <ContainerLayout>
      <MenuHeader>
        <div className={styles.containerHeaderWithSearch}>
          <Input type="search" label="Search" placeholder="Search within content" />
        </div>
      </MenuHeader>
    </ContainerLayout>
  );
};

export default HeaderWithSearch;
