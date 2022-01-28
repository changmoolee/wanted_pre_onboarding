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
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1px;
  border: 0.5px gray solid;
  border-radius: 10px;
`;

const AutoCompleteInput = styled.input`
  width: 95%;
  height: 95%;
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
const SearchResultContainer = styled.div`
  width: 70%;
  display: ${(props) => (props.inputText === "" ? "none" : "flex")};
  justify-content: flex-start;
  align-items: center;
  border: 0.5px gray solid;
  border-radius: 10px;
  z-index: 2;
`;

const SearchResultCollection = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0px;
`;
const SearchResult = styled.li`
  width: 100%;
  display: flex;
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
        <AutoCompleteContainer>
          <AutoCompleteInput
            placeholder="Please browse here"
            value={inputText}
            onChange={(e) => currentInputText(e)}
          ></AutoCompleteInput>
          <AutoCompleteCloseIcon onClick={() => eraseInput()}>
            &times;
          </AutoCompleteCloseIcon>
        </AutoCompleteContainer>
        <SearchResultContainer inputText={inputText}>
          <SearchResultCollection>
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
              }
            })}
          </SearchResultCollection>
        </SearchResultContainer>
      </Feature>
    </FeatureContainer>
  );
};

export default AutoComplete;
