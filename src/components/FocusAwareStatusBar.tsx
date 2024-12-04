import * as React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

interface FocusAwareStatusBarProps extends StatusBarProps {}

const FocusAwareStatusBar: React.FC<FocusAwareStatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  // Only render StatusBar when the screen is focused
  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
