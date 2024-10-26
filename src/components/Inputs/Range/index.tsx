import * as S from './styles';
import { IRange } from './types';
import React, { useState, ChangeEvent } from 'react';
import { withTheme } from 'styled-components';

const Range: React.FC<IRange> = ({
  value = 0,
  min = 0,
  max = 100,
  handleChange,
  ...rest
}) => {
  const [rangeValue, setRangeValue] = useState<number>(value);
  const percentage = ((rangeValue - min) / (max - min)) * 100;

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number(e.target.value);
    setRangeValue(parsedValue);
    handleChange(parsedValue);
  };

  return (
    <>
      <S.InputRange
        data-testid="range"
        type="range"
        min={min}
        max={max}
        value={rangeValue}
        onChange={handleRangeChange}
        $percentage={percentage}
        {...rest}
      />
    </>
  );
};

export default withTheme(Range) as React.FC<IRange>;
