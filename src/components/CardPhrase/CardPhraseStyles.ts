import styled from 'styled-components';

export const ContainerCard = styled('div')`
  min-height: 150px;
  border-radius: 10px;
  padding: 15px;
  text-align: start;
  margin: 10px;
  background-color: ${props => props.color || 'transparent'};
  outline: ${props => `1px solid ${props.color ? props.color : 'var(--dark-grey-primary)'}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  & > p {
    width: 180px;
    text-align: initial;
    margin-top: 5px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
  & > div {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 5px;
  }
`;
