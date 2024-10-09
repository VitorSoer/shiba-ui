import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 20px -40px 0px;
  column-gap: 8px;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

`;

export const StyledSelect = styled.select`
  cursor: pointer;
  padding: 8px;

  font-size: 10px;
  font-weight: 600;
  color: #121212;
  border: none;  
  background: rgba(0, 0, 0, 0.05);
border-radius: 4px;
`;
