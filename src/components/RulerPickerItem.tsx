/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

export type RulerPickerItemProps = {
  /**
   * Gap between steps
   *
   * @default 10
   */
  gapBetweenSteps: number;
  /**
   * Height of the short step
   *
   * @default 20
   */
  shortStepHeight: number;
  /**
   * Height of the long step
   *
   * @default 40
   */
  longStepHeight: number;
  /**
   * Width of the steps
   *
   * @default 2
   */
  stepWidth: number;
  /**
   * Color of the short steps
   *
   * @default 'lightgray'
   */
  shortStepColor: string;
  /**
   * Color of the long steps
   *
   * @default 'gray'
   */
  longStepColor: string;
};

type Props = {
  index: number;
  isLast: boolean;
} & RulerPickerItemProps;

export const RulerPickerItem = React.memo(
  ({
    isLast,
    index,
    gapBetweenSteps,
    shortStepHeight,
    longStepHeight,
    stepWidth,
    shortStepColor,
    longStepColor,
  }: Props) => {
    const isLong = index % 10 === 0;
    const height = isLong ? longStepHeight : shortStepHeight;

    return (
      <View
        style={[
          {
            width: stepWidth,
            height: '100%',
            justifyContent: 'center',
            marginRight: isLast ? 0 : gapBetweenSteps,
            marginTop: shortStepHeight,
          },
        ]}
      >
        <View
          style={[
            {
              width: '100%',
              height: height,
              backgroundColor: isLong ? longStepColor : shortStepColor,
              marginTop: isLong ? 0 : shortStepHeight,
            },
          ]}
        />
      </View>
    );
  }
);
