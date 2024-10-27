import * as S from './styles';
import { ICheckbox } from './types';
import Icon from '../../Feedback/Icon';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';

const Checkbox: React.FC<ICheckbox> = ({
  isChecked = false,
  $checkboxColor,
  $checkboxSize = 28,
  handleChange = () => {},
  icon = 'SuccessTwoIcon',
  $iconColor = '#F5F5FB',
}) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

  const onCheckboxChange = () => {
    const newCheckedState = !checkboxIsChecked;

    setCheckboxIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setCheckboxIsChecked(isChecked), [isChecked]);

  return (
    <S.Box
      data-testid="checkbox"
      onClick={onCheckboxChange}
      $checkboxColor={$checkboxColor}
      $checkboxSize={$checkboxSize}
    >
      {checkboxIsChecked && (
        <S.Tick $isChecked={checkboxIsChecked} $checkboxColor={$checkboxColor}>
          <Icon
            icon={icon}
            $iconColor={$iconColor}
            $iconSize={$checkboxSize / 1.75}
          />
        </S.Tick>
      )}
    </S.Box>
  );
};

export default withTheme(Checkbox) as React.FC<ICheckbox>;
