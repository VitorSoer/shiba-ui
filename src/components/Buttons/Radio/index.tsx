import * as S from './styles';
import { IRadio } from './types';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';

const Radio: React.FC<IRadio> = ({
  isChecked = false,
  handleChange = () => {},
  $radioSize = 28,
  $radioColor = 'primary',
  $isDisabled = false,
  isHidden = false,
}) => {
  const [radioIsChecked, setRadioIsChecked] = useState(isChecked);

  const onRadioValueChange = () => {
    if ($isDisabled) return;

    const newCheckedState = !radioIsChecked;

    setRadioIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setRadioIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <S.Box
      data-testid="radio"
      onClick={onRadioValueChange}
      $radioColor={$radioColor}
      $radioSize={$radioSize}
      $isDisabled={$isDisabled}
    >
      {radioIsChecked && (
        <S.Tick
          $isChecked={radioIsChecked}
          $radioColor={$radioColor}
          $isDisabled={$isDisabled}
        />
      )}
    </S.Box>
  );
};

export default withTheme(Radio) as React.FC<IRadio>;
