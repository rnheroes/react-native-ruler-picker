# react-native-ruler-picker

⚡ Lightning-fast and customizable Ruler Picker component for React Native

## Installation

1. Ensure sure you've installed [flash-list](https://github.com/Shopify/flash-list)
2. `yarn add react-native-ruler-picker` or `npm install react-native-ruler-picker`

## Usage

```js
import { RulerPicker } from 'react-native-ruler-picker';

<RulerPicker
  min={0}
  max={240}
  step={1}
  fractionDigits={0}
  initialValue={0}
  onValueChange={(number) => console.log(number)}
  onValueChangeEnd={(number) => console.log(number)}
  unit="cm"
/>;
```

## Props

| Name             | Type                    | Required | Default Value | Description                              |
| ---------------- | ----------------------- | -------- | ------------- | ---------------------------------------- |
| width            | number                  | No       | windowWidth   | Width of the ruler picker                |
| height           | number                  | No       | 500           | Height of the ruler picker               |
| min              | number                  | Yes      | -             | Minimum value of the ruler picker        |
| max              | number                  | Yes      | -             | Maximum value of the ruler picker        |
| step             | number                  | No       | 1             | Step of the ruler picker                 |
| initialValue     | number                  | No       | min           | Initial value of the ruler picker        |
| fractionDigits   | number                  | No       | 1             | Number of digits after the decimal point |
| unit             | string                  | No       | 'cm'          | Unit of the ruler picker                 |
| indicatorHeight  | number                  | No       | 80            | Height of the indicator                  |
| indicatorColor   | string                  | No       | 'black'       | Color of the center line                 |
| valueTextStyle   | RulerPickerTextProps    | No       | -             | Text style of the value                  |
| unitTextStyle    | RulerPickerTextProps    | No       | -             | Text style of the unit                   |
| onValueChange    | (value: string) => void | No       | -             | Callback when the value changes          |
| onValueChangeEnd | (value: string) => void | No       | -             | Callback when the value changes end      |
| gapBetweenSteps  | number                  | Yes      | -             | Gap between steps                        |
| shortStepHeight  | number                  | Yes      | -             | Height of the short step                 |
| longStepHeight   | number                  | Yes      | -             | Height of the long step                  |
| stepWidth        | number                  | Yes      | -             | Width of the steps                       |
| shortStepColor   | string                  | Yes      | -             | Color of the short steps                 |
| longStepColor    | string                  | Yes      | -             | Color of the long steps                  |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
