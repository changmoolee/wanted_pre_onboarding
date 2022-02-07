import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  border-radius: 20px;
  z-index: 1;
`;
const ModalIconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
`;
const ModalIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  font-size: 36px;
  cursor: pointer;
`;
const ModalTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  color: #4a19cd;
  font-size: 24px;
`;

const FeatureContainer = styled.div`
  width: 80vw;
  height: 30vh;
  margin-top: 5vh;
  padding: 20px;
  font-size: 24px;
  border-radius: 20px;
  border: 1px solid black;
`;
const Feature = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalButton = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 16px;
  color: white;
  background-color: #4a19cd;
  cursor: pointer;
`;

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const controlModal = () => {
    return setModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen ? (
        <Wrapper onClick={() => controlModal()}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalIconContainer>
              <ModalIcon onClick={() => controlModal()}>&times;</ModalIcon>
            </ModalIconContainer>
            <ModalTextContainer>Hello CodeStates!</ModalTextContainer>
          </ModalContainer>
        </Wrapper>
      ) : null}
      <FeatureContainer>
        Modal
        <Feature>
          <ModalButton onClick={() => controlModal()}> Open Modal</ModalButton>
        </Feature>
      </FeatureContainer>
    </>
  );
};

export default Modal;
