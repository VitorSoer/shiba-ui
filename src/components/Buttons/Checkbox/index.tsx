import * as S from './styles';
import { ICheckbox } from './types';
import Icon from '../../Feedback/Icon';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';

const Checkbox: React.FC<ICheckbox> = ({
  isChecked = false,
  handleChange = () => {},
  $checkboxSize = 28,
  $checkboxColor = 'primary',
  icon = 'SuccessTwoIcon',
  $iconColor = '#F5F5FB',
  $isDisabled = false,
  isHidden = false,
}) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

  const onCheckboxChange = () => {
    const newCheckedState = !checkboxIsChecked;

    setCheckboxIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setCheckboxIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <S.Box
      data-testid="checkbox"
      onClick={onCheckboxChange}
      $checkboxColor={$checkboxColor}
      $checkboxSize={$checkboxSize}
      $isDisabled={$isDisabled}
    >
      {checkboxIsChecked && (
        <S.Tick
          $isChecked={checkboxIsChecked}
          $checkboxColor={$checkboxColor}
          $isDisabled={$isDisabled}
        >
          <Icon
            icon={icon}
            $iconColor={$isDisabled ? 'accent' : $iconColor}
            $iconSize={$checkboxSize / 1.75}
          />
        </S.Tick>
      )}
    </S.Box>
  );
};

export default withTheme(Checkbox) as React.FC<ICheckbox>;
