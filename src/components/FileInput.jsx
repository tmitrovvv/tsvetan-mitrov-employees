import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-top: 30px
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledButton = styled.label`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: blue;
  color: white;
  border: 2px solid blue;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
`;

const FileInput = ({ onChange }) => {
  return (
    <InputWrapper>
      <StyledButton htmlFor="file-input">Choose CSV File</StyledButton>
      <StyledInput
        type="file"
        id="file-input"
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default FileInput;
