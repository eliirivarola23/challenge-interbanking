import styled from 'styled-components';

export const ButtonContainer = styled('div')`
  width: max-content;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      margin: 2px;
    }
  }
  .container,
  & > button {
    cursor: pointer;
    border: none;
    border-radius: 25px;
    padding: ${props => (props.color ? '10px' : '8px 15px')};
    outline: 1px solid var(--grey-ligth);
    background-color: ${props => props.color || 'var(--white-primary)'};
    margin: 5px;
    width: max-content;
    font-size: 16px;
    text-align: center;
  }
  & > button {
    &.action:active {
      background-color: var(--light-violet-primary);
    }

    &:is(.primary, .container, .action, .text, .secondary):disabled {
      cursor: default;
      background-color: ${props => props.color || 'var(--light-grey-primary)'};
      color: var(--grey-primary);
      outline: ${props => `1px solid ${props.color ? 'black' : 'transparent'}`};
    }
    &:is(.primary, .container, .action, .text, .secondary):disabled:hover {
      background-color: ${props => props.color || 'var(--light-grey-primary)'};
      color: var(--grey-primary);
      outline: ${props => `1px solid ${props.color ? 'black' : 'transparent'}`};
    }
    &.primary:hover {
      color: var(--white-primary);
      background-color: ${props => props.color || 'var(--grey-primary)'};
    }

    &.secondary {
      background-color: var(--green-primary);
      color: var(--white-primary);
    }

    &.secondary:hover {
      background-color: var(--green-secondary);
    }

    &.text {
      background-color: transparent;
      text-decoration: underline;
      max-width: max-content;
    }

    &.text:hover {
      color: var(--dark-gray-primary);
    }
    &.action {
      background-color: var(--violet-primary);
      color: var(--white-primary);
    }
  }

  & img.loading {
    animation: 1.5s rotate linear infinite;
    width: 15px;
    &.disabled {
      display: none;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .container > *:first-of-type {
    margin: -2px 7px;
  }

  &.tooltip_container {
    position: relative;
    &:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
    .tooltip {
      visibility: hidden;
      background-color: var(--grey-primary);
      color: var(--white-primary);
      text-align: center;
      border-radius: 4px;
      padding: 5px;
      position: absolute;
      bottom: 120%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;
      min-width: 50px;
      z-index: 1;
      transition: opacity 0.3s, visibility 0.3s;
    }
  }
`;
