import styled from "styled-components";

export const StyledInputField = styled.input`
  width: 100%;
  height: 48px;

  box-sizing: border-box;

  padding: 0 20px;

  border: 1px solid #d5d9d7;
  border-radius: 30px;

  background: transparent;

  color: #222222;

  font-size: 13px;

  outline: none;

  transition: 0.2s ease;

  &::placeholder {
    color: #9a9a9a;
  }

  &:focus {
    border-color: #26935f;
    box-shadow: 0 0 0 2px rgba(38, 147, 95, 0.1);
  }
`;
