import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  padding: 4px;  
  margin: 20px;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  user-select: none;
  padding: 16px;
  margin: 8px;
  z-index: 99999;
  border-radius: 16px;  
  border: 1px solid #ccc; 

  background: none;
  outline: none;
  transition: box-shadow 0.1s;
  color: #fff;
  cursor: pointer;

  &:focus {
    border: 1px solid #00d9ff;
    color: #00d9ff;
    box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
    text-shadow: 0px 0px 10px #00d9ffc0, 0px 0px 3px #00d9ff;    
  }

  &.is-selected {
    box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none; 
  padding: 16px;
  margin-top: -5px;
  border: 1px solid "#ccc";

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;