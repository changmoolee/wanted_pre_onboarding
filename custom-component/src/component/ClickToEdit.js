import React, { useState } from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  width: 80vw;
  height: 30vh;
  border: 1px black solid;
  margin-top: 5vh;
  padding: 20px;
  font-size: 20px;
  border-radius: 20px;
`;
const Feature = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EditContainer = styled.div`
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const EditNameContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditAgeContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditInput = styled.input`
  width: 60%;
  height: 50%;
  text-align: center;
  margin-left: 15px;
  font-size: 20px;
  border: gray solid 1px;
  border-radius: 5px;
`;

const ClickToEdit = () => {
  const [currentNameInfo, setNameInfo] = useState("김코딩");
  const [currentAgeInfo, setAgeInfo] = useState("20");

  const editNameInfo = (text) => {
    setNameInfo(text);
  };
  const editAgeInfo = (text) => {
    setAgeInfo(text);
  };

  return (
    <FeatureContainer>
      ClickToEdit
      <Feature>
        <EditContainer>
          <EditNameContainer>
            이름
            <EditInput onBlur={(e) => editNameInfo(e.target.value)} />
          </EditNameContainer>
          <EditAgeContainer>
            나이
            <EditInput onBlur={(e) => editAgeInfo(e.target.value)} />
          </EditAgeContainer>
        </EditContainer>
        이름 {currentNameInfo} 나이 {currentAgeInfo}
      </Feature>
    </FeatureContainer>
  );
};

export default ClickToEdit;
