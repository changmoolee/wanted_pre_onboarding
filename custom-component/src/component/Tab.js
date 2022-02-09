import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "./layout/layout";
import { Feature } from "./layout/layout";

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
