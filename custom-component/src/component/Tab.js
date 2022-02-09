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
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
const TabContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 100px;
  background-color: #dcdcdc;
`;
const TabButton = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: ${(props) => (props.index === props.tabIndex ? "white" : "gray")};
  background-color: ${(props) =>
    props.index === props.tabIndex ? "#4a19cd" : "#dcdcdc"};
  transition: 0.3s;
  cursor: pointer;
`;

const Tab = () => {
  const tabs = ["Tab1", "Tab2", "Tab3"];
  const tabNumber = ["ONE", "TWO", "THREE"];

  const [tabIndex, setTabIndex] = useState(0);

  const handleTab = (index) => {
    setTabIndex(index);
  };

  return (
    <FeatureContainer>
      Tab
      <Feature>
        <TabContainer>
          {tabs.map((tab, index) => {
            return (
              <TabButton
                key={index}
                tabIndex={tabIndex}
                index={index}
                onClick={() => handleTab(index)}
              >
                &nbsp;&nbsp;{tab}
              </TabButton>
            );
          })}
        </TabContainer>
        Tab menu {tabNumber[tabIndex]}
      </Feature>
    </FeatureContainer>
  );
};

export default Tab;
