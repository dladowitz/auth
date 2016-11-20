import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {
  state = { text: '' }
  // const { containerStyle, labelStyle, inputStyle } = styles;
  // const { buttonStyle, textStyle } = styles;

  render() {
    return (
      <View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{this.props.label}</Text>
          <TextInput
            placeholder={this.props.placeholder}
            style={styles.inputStyle}
            value={this.state.text}
            onChangeText={text => {
              this.setState({ text });
            }}
          />
        </View>
      </View>
    );
  }
}

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
