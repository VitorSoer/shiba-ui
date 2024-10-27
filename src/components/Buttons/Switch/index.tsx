import * as S from './styles';
import { ISwitch } from './types';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';

const Switch: React.FC<ISwitch> = ({
  isChecked = false,
  handleChange = () => {},
  $switchSize = 28,
  $switchEnabledColor = 'primary',
  $switchDisabledColor = 'highlight',
  $isDisabled = false,
  isHidden = false,
}) => {
  const [switchIsChecked, setSwitchIsChecked] = useState(isChecked);

  const onSwitchValueChange = () => {
    if ($isDisabled) return;

    const newCheckedState = !switchIsChecked;
    setSwitchIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setSwitchIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="switch"
      onClick={onSwitchValueChange}
      $switchEnabledColor={$switchEnabledColor}
      $switchDisabledColor={$switchDisabledColor}
      $switchSize={$switchSize}
      $isChecked={switchIsChecked}
      $isDisabled={$isDisabled}
    >
      <S.Circle
        $isChecked={switchIsChecked}
        $switchEnabledColor={$switchEnabledColor}
        $switchDisabledColor={$switchDisabledColor}
        $isDisabled={$isDisabled}
      />
    </S.Container>
  );
};

export default withTheme(Switch) as React.FC<ISwitch>;
