import React, { useState } from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  width: 80vw;
  height: 30vh;
  border: 1px black solid;
  margin-top: 5vh;
  padding: 20px;
  font-size: 24px;
  border-radius: 20px;
`;
const Feature = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FeatureSpace = styled.div`
  width: 100%;
  min-height: 40%;
`;

const AutoCompleteContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) =>
    props.inputText === "" ? "none" : "0px 3px 3px 3px rgba(0, 0, 0, 0.1)"};
  border-radius: 10px;
`;

const AutoCompleteInputContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -1px;
`;

const AutoCompleteInput = styled.input`
  width: 95%;
  height: 90%;
  display: flex;
  font-size: 16px;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;

const AutoCompleteCloseIcon = styled.div`
  width: 5%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: none;
  border-radius: 10px;
`;

const SearchResultCollection = styled.ul`
  width: 100%;
  display: ${(props) => (props.inputText === "" ? "none" : "flex")};
  flex-direction: column;
  padding: 0px;
  margin: 5px 0px 5px 0px;
`;
const SearchResult = styled.li`
  width: 98%;
  display: flex;
  margin: 2px 0px 2px 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const AutoComplete = () => {
  const [inputText, setInputText] = useState("");
  const data = [
    "중고A급",
    "refurbished",
    "antique",
    "rustic",
    "remove",
    "rock",
  ];

  const currentInputText = (e) => {
    setInputText(e.target.value);
  };

  const eraseInput = () => {
    setInputText("");
  };

  const clickedPreviousData = (text) => {
    return setInputText(text);
  };

  return (
    <FeatureContainer>
      AutoComplete
      <Feature>
        <FeatureSpace />
        <AutoCompleteContainer inputText={inputText}>
          <AutoCompleteInputContainer>
            <AutoCompleteInput
              placeholder="Please browse here"
              value={inputText}
              onChange={(e) => currentInputText(e)}
            ></AutoCompleteInput>
            <AutoCompleteCloseIcon onClick={() => eraseInput()}>
              &times;
            </AutoCompleteCloseIcon>
          </AutoCompleteInputContainer>
          <SearchResultCollection inputText={inputText}>
            {data.map((data, index) => {
              if (data.includes(inputText)) {
                return (
                  <SearchResult
                    key={index}
                    onClick={() => clickedPreviousData(data)}
                  >
                    {data}
                  </SearchResult>
                );
              } else {
                return null;
              }
            })}
          </SearchResultCollection>
        </AutoCompleteContainer>
      </Feature>
    </FeatureContainer>
  );
};

export default AutoComplete;
