import * as S from './styles';
import { IRadio } from './types';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';

const Radio: React.FC<IRadio> = ({
  isChecked = false,
  $radioColor,
  $radioSize = 28,
  handleChange = () => {},
}) => {
  const [radioIsChecked, setRadioIsChecked] = useState(isChecked);

  const onRadioValueChange = () => {
    const newCheckedState = !radioIsChecked;

    setRadioIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setRadioIsChecked(isChecked), [isChecked]);

  return (
    <S.Box
      data-testid="radio"
      onClick={onRadioValueChange}
      $radioColor={$radioColor}
      $radioSize={$radioSize}
    >
      {radioIsChecked && (
        <S.Tick $isChecked={radioIsChecked} $radioColor={$radioColor} />
      )}
    </S.Box>
  );
};

export default withTheme(Radio) as React.FC<IRadio>;
