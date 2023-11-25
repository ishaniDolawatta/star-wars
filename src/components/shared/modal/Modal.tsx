import React, { ReactNode } from "react";
import styled from "styled-components";

import { MdClose } from "react-icons/md";

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  width: 30em;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: end;
  svg {
    cursor: pointer;
  }
`;

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <Overlay onClick={() => onClose()}>
      <ModalWrapper>
        <CloseButton onClick={() => onClose()}>
          <MdClose />
        </CloseButton>
        {children}
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
