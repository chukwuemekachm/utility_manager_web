import * as React from 'react';
import styled from '@emotion/styled';
import { GAINS_BORO } from 'settings/__color';

export interface TabItemProps {
  children: React.ReactNode;
  selected?: boolean;
  setTab: Function;
  itemValue: number;
  currentValue: number;
  textAlign?: 'left' | 'right' | 'center' | 'inherit';
}
export function TabItem(props: TabItemProps) {
  const { children, setTab, itemValue, currentValue } = props;
  function handleTabChange(tabNumber: number) {
    return (event: React.SyntheticEvent): void => {
      event.preventDefault();
      setTab(tabNumber);
    };
  }
  return (
    <>
      <TabItem.Wrapper onClick={handleTabChange(itemValue)} selected={currentValue === itemValue}>
        {children}
      </TabItem.Wrapper>
      <div>
        <TabItem.Seperator selected={currentValue === itemValue}></TabItem.Seperator>
      </div>
    </>
  );
}

TabItem.Seperator = styled.div<Pick<TabItemProps, 'selected'>>`
  background-color: grey;
  width: 0.0625rem;
  border-radius: 0.25rem;
  height: 40%;
  position: absolute;
  top: 40%;
  ${props => {
    if (props.selected) {
      return `
                background-color: #2C96F3;
            `;
    }

    return ``;
  }}
`;
TabItem.Wrapper = styled.button<Pick<TabItemProps, 'selected'>>`
  border: none;
  font-family: Fira Sans;
  font-size: 1rem;
  padding: 1.7% 1% 1%;
  outline: none;
  &:hover{
    background-color: ${GAINS_BORO};
    cursor: pointer;ß
  }
  border-bottom: solid 0.25rem white;
  width: 100%;
  height: 3.75rem;
  ${props => {
    if (props.selected) {
      return `
                color: #2C96F3;
                border-bottom: solid 0.25rem #2C96F3;
            `;
    }

    return ``;
  }}
`;

export interface TabProps {
  children: Function;
  onTabChange?: Function;
}
export default function Tab(props: TabProps) {
  const [tab, setTab] = React.useState(0);
  const { children, onTabChange } = props;
  function changeHandler(value) {
    setTab(value);
    onTabChange && onTabChange(value);
  }
  function composeProps() {
    return {
      setTab: changeHandler,
      tab,
    };
  }
  return <Tab.Wrapper>{children(composeProps())}</Tab.Wrapper>;
}

Tab.Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;
