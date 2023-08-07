import styled from 'styled-components';

export const WrapperModal = styled('div')`
  position: fixed;
  top: 10%;
  box-shadow: 0px 0px 9px var(--dark-grey-primary);
  border-radius: 15px;
  min-height: 250px;
  padding: 10px;
  background: var(--white-primary);
  width: 90%;
  z-index: 3;
  > div:first-of-type {
    position: absolute;
    right: 0;
    top: 0;
  }
  > section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
  }
  & .modal-title {
    font-weight: 600;
    font-size: 22px;
  }
  & .modal-container {
    padding: 10px;
    font-size: 14px;
  }
  & .modal-actions {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
`;
