import React, { useEffect, useState } from "react";
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
    props.comboBoxOpened ? "0px 3px 3px 3px rgba(0, 0, 0, 0.1)" : "none"};
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
  display: ${(props) => (props.comboBoxOpened ? "flex" : "none")};
  flex-direction: column;
  padding: 0px;
  margin: 5px 0px 5px 0px;
  background: white;
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
  const [comboBoxOpened, setComboBoxOpended] = useState(false);

  const data = [
    "중고A급",
    "refurbished",
    "antique",
    "rustic",
    "remove",
    "rock",
  ];

  return (
    <FeatureContainer>
      AutoComplete
      <Feature>
        <FeatureSpace />
        <AutoCompleteContainer comboBoxOpened={comboBoxOpened}>
          <AutoCompleteInputContainer>
            <AutoCompleteInput
              placeholder="Please browse here"
              value={inputText}
              onFocus={() => setComboBoxOpended(true)}
              onBlur={() => setTimeout(() => setComboBoxOpended(false), 100)}
              // setTimeout 메서드를 사용한 이유 : 다른 태그의 click이벤트 호출 후, 해당 태그의 blur이벤트를 호출하기 위함
              // blur 이벤트가 먼저 실행되고 click 이벤트가 발생하는 것을 깨달았다.
              // 때문에, 0.1초의 타이머를 주어 다른 태그의 이벤트가 먼저 일어나고 blur이벤트가 발생할 수 있도록 하였다.
              onChange={(e) => setInputText(e.target.value)}
            ></AutoCompleteInput>
            <AutoCompleteCloseIcon onClick={() => setInputText("")}>
              &times;
            </AutoCompleteCloseIcon>
          </AutoCompleteInputContainer>
          <SearchResultCollection comboBoxOpened={comboBoxOpened}>
            {data.map((data, index) => {
              if (
                data.toLowerCase().includes(inputText.toLowerCase()) &&
                comboBoxOpened &&
                inputText !== ""
              ) {
                return (
                  <SearchResult
                    key={index}
                    onClick={() => {
                      setInputText(data);
                      setComboBoxOpended(false);
                    }}
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
