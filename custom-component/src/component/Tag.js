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
const Container = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px black solid;
  overflow: overlay;
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
const IconContainer = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;
const CloseIcon = styled.img`
  width: 20px;
  object-fit: cover;
`;

//icon에만 색깔 입힐 방법은?
const Tag = () => {
  const [tags, setTags] = useState([]);
  const [tagText, setTagText] = useState("");

  const addTag = (tag) => {
    if (tag !== "") {
      return setTags([...tags, tag]);
    }
  };
  const removeTag = (index) => {
    let tagsCopy = [...tags];
    tagsCopy.splice(index, 1);
    return setTags([...tagsCopy]);
  };
  const onChangeTagText = (e) => setTagText(e.target.value);

  return (
    <FeatureContainer>
      Tag
      <Feature>
        <Container>
          {tags.map((tag, index) => (
            <TagDiv key={index}>
              <TagTextElement>{tag}</TagTextElement>
              <IconContainer onClick={() => removeTag(index)}>
                <CloseIcon src="./delete.png" />
              </IconContainer>
            </TagDiv>
          ))}
          <TagInput
            value={tagText}
            placeholder="Please enter to add Tags"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTag(e.target.value);
                setTagText("");
              }
            }}
            onChange={(e) => onChangeTagText(e)}
          />
        </Container>
      </Feature>
    </FeatureContainer>
  );
};

export default Tag;
