import React from 'react';

interface PropsModalContent {
  children?: React.ReactNode;
  text?: string;
}
const ModalContent = ({ text, children }: PropsModalContent) => {
  return (
    <>
      {text && <p>{text}</p>}
      {children}
    </>
  );
};

export default ModalContent;
