import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px;

  input {
    font-weight: 400;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 15px;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffc0;
  }

  button {
    font-size: 16px;        
    padding: 8px 20px;
    margin: 0px 16px;
    border-radius: 8px;

    background: none;
    outline: none;
    transition: box-shadow 0.1s;
    border: 2px solid #ccc;

    &:hover {
      border: 2px solid #00d9ff;
      color: #00d9ff;
      box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
      text-shadow: 0px 0px 10px #00d9ffc0, 0px 0px 3px #00d9ff;
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;