import styled from "styled-components";

export const Wrapper = styled.div`
  align-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;  
  padding: 8px;
  margin: 16px;
  width: 280px;
  height: 150px;
  background-color: #DCD9D4;
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply,multiply;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WrapperTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;  
  margin: 8px 4px;
  color: #111;
`;

export const WrapperFullName = styled.h4`
  font-weight: bold;
  font-size: 16px;  
  margin: 8px 4px ;
  color: #222;
`;

export const WrapperLink = styled.a`
  word-wrap: break-word;
  font-weight: bold;
  font-size: 16px;  
  margin: 8px 4px ;
  color: #00d9ff;
`;