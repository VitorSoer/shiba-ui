import React from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  min-height: 400px;
  width: 100%;
`;

export const CenterDecorator = (Story) => (
  <CenterContainer>
    <Story />
  </CenterContainer>
);
