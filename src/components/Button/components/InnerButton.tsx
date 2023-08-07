import Loading from '../../../assets/loading.svg';

interface PropsInnerButton {
  children: React.ReactNode;
  loading?: boolean;
}
const InnerButton = ({ children, loading }: PropsInnerButton) => {
  return (
    <>
      {children}
      <img src={Loading} className={`loading ${!loading ? 'disabled' : ''}`} />
    </>
  );
};

export default InnerButton;
