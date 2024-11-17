import React, { useState } from 'react';
import * as S from './styles';
import { ITooltip } from './types';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';

const Tooltip: React.FC<ITooltip> = ({
  children,
  content,
  position = 'top',
  $backgroundColor = 'primary',
  $textColor = 'textDefault',
  isHidden = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const showTooltip = () => {
    timeoutId = setTimeout(() => setIsVisible(true), 200);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  if (isHidden) return null;

  return (
    <S.Wrapper
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <S.TooltipContainer
        data-testid="tooltip"
        $position={position}
        $backgroundColor={$backgroundColor}
        $isHidden={isVisible}
        role="tooltip"
        aria-hidden={!isVisible}
      >
        <TextDisplay $textColor={$textColor} text={content} />
        <S.Arrow $position={position} $backgroundColor={$backgroundColor} />
      </S.TooltipContainer>
    </S.Wrapper>
  );
};

export default withTheme(Tooltip) as React.FC<ITooltip>;
