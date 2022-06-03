import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 20px;
`;

export const WrapperInforUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;  
  margin: 10px 16px;
  height: 200px; 
  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 32px;
    margin-left: -1px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
  }
  
  h4 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
    margin-left: -10px;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: center;
    margin: 10px;    
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h3 {
    margin-right: 8px;
  }

  a {    
    font-weight: bold;
    font-size: 18px;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffc0;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 10px;
`;