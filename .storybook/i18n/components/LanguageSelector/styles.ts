import styled from 'styled-components';

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 20px -40px 0px;
  column-gap: 8px;
`;

export const LanguageButton = styled.div<{ $isActive?: boolean }>`
  font-size: 0.8rem;
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#121212')};
  background: ${({ $isActive }) => ($isActive ? '#121212' : '#FFFFFF')};

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;
