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
  justify-content: center;
  align-items: center;
`;
const TagContainer = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px black solid;
`;
const TagInput = styled.input`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 16px;
  border: none;
`;
const TagDiv = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  border: 1px black solid;
  border-radius: 10px;
  color: white;
  background-color: #4a19cd;
`;
const TagTextElement = styled.div`
  display: inline;
  font-size: 16px;
  margin-left: 5px;
`;
const CloseIconDiv = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;
const CloseIconImg = styled.img`
  width: 20px;
  object-fit: cover;
`;

//icon에만 색깔 입힐 방법은?
const Tag = () => {
  const [currentTags, setCurrentTags] = useState([]);
  const [TagText, setTagText] = useState("");

  const addTag = (tag) => {
    if (tag !== "") {
      return setCurrentTags([...currentTags, tag]);
    }
  };
  const removeTag = (index) => {
    let currentTagsCopy = currentTags.slice();
    currentTagsCopy.splice(index, 1);
    return setCurrentTags([...currentTagsCopy]);
  };
  const onChangeTagText = (text) => setTagText(text);

  return (
    <FeatureContainer>
      Tag
      <Feature>
        <TagContainer>
          {currentTags.map((currentTag, index) => (
            <TagDiv key={index}>
              <TagTextElement>{currentTag}</TagTextElement>
              <CloseIconDiv onClick={() => removeTag(index)}>
                <CloseIconImg src="./delete.png" />
              </CloseIconDiv>
            </TagDiv>
          ))}
          <TagInput
            onKeyPress={(e) => {
              if (window.event.key === "Enter") {
                addTag(e.target.value);
                setTagText("");
              }
            }}
            onChange={(e) => onChangeTagText(e.target.value)}
            value={TagText}
            placeholder="Please enter to add Tags"
          />
        </TagContainer>
      </Feature>
    </FeatureContainer>
  );
};

export default Tag;
