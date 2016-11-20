import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInput
          placeholder={props.placeholder}
          value={props.text}
          style={styles.inputStyle}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  labelStyle: {
    fontSize: 20,
  },
  inputStyle: {
    fontSize: 20,
    height: 26,
    width: 200,
    marginLeft: 10,
  }
};

export { Input };
