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
  font-size: 16px;
  border: none;
`;
const TagDiv = styled.div`
  width: 10vw;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  border: 1px black solid;
  border-radius: 15px;
  color: white;
  background-color: #000080;
  word-break: break-all;
`;
const CloseIcon = styled.div`
  margin-left: 2px;
`;
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
              {currentTag}
              <CloseIcon onClick={() => removeTag(index)}>&otimes;</CloseIcon>
            </TagDiv>
          ))}
          <TagInput
            onKeyPress={(e) => {
              if (window.event.keyCode === 13) {
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
