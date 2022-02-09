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

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) =>
    props.suggestionOpened ? "0px 3px 3px 3px rgba(0, 0, 0, 0.1)" : "none"};
  border-radius: 10px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -1px;
`;

const Input = styled.input`
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

const CloseIcon = styled.div`
  width: 5%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: none;
  border-radius: 10px;
`;

const SuggestionsContainer = styled.ul`
  width: 100%;
  display: ${(props) => (props.suggestionOpened ? "flex" : "none")};
  flex-direction: column;
  padding: 0px;
  margin: 5px 0px 5px 0px;
  background: white;
`;
const Suggestion = styled.li`
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
  const [text, setText] = useState("");
  const [suggestionOpened, setSuggestionOpended] = useState(false);
  const suggestions = [
    "중고A급",
    "refurbished",
    "antique",
    "rustic",
    "remove",
    "rock",
  ];

  const currentInputText = (e) => {
    setText(e.target.value);
  };
  const openSuggestion = () => {
    setSuggestionOpended(true);
  };
  const closeSuggestion = () => {
    setSuggestionOpended(false);
  };
  const eraseInput = () => {
    setText("");
  };

  return (
    <FeatureContainer>
      AutoComplete
      <Feature>
        <FeatureSpace />
        <Container suggestionOpened={suggestionOpened}>
          <InputContainer>
            <Input
              placeholder="Please browse here"
              value={text}
              onFocus={openSuggestion}
              onBlur={closeSuggestion}
              onChange={(e) => currentInputText(e)}
            />
            <CloseIcon onClick={eraseInput}>&times;</CloseIcon>
          </InputContainer>
          <SuggestionsContainer suggestionOpened={suggestionOpened}>
            {suggestions.map((suggestion, index) => {
              if (
                suggestion.toLowerCase().includes(text.toLowerCase()) &&
                suggestionOpened &&
                text !== ""
              ) {
                return (
                  <Suggestion
                    key={index}
                    onMouseDown={() => {
                      setText(suggestion);
                    }}
                  >
                    {suggestion}
                  </Suggestion>
                );
              } else {
                return null;
              }
            })}
          </SuggestionsContainer>
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default AutoComplete;
