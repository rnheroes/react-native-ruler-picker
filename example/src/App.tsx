import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { RulerPicker } from 'react-native-ruler-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <RulerPicker
        min={0}
        max={240}
        step={1}
        fractionDigits={0}
        initialValue={0}
        onValueChange={(number) => console.log('onValueChange', number)}
        onValueChangeEnd={(number) => console.log('onValueChangeEnd', number)}
        unit="cm"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
