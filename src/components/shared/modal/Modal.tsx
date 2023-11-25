import React, { ReactNode } from "react";
import styled from "styled-components";

import { MdClose } from "react-icons/md";
import LoadingDots from "../LoadingDots";

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
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  max-width:calc(100% - 100px);
  max-height:calc(100% - 125px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
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
  isLoading?: boolean;
};

const Modal: React.FC<Props> = ({ children, onClose, isLoading = false }) => {
  return (
    <Overlay onClick={() => onClose()}>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <ModalWrapper>
          <CloseButton onClick={() => onClose()}>
            <MdClose />
          </CloseButton>
          {children}
        </ModalWrapper>
      )}
    </Overlay>
  );
};

export default Modal;
