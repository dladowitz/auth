import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { text: '' }

  render() {
    console.log('State', this.state);

    return (
      <View>
        <Card>
          <CardSection>
            <Input
              value={this.state.text}
              label={'Email'}
              placeholder={'abourdain@gmail.com'}
              onChangeText={(text) => this.setState({ text })}
            />
          </CardSection>

          <CardSection />

          <CardSection>
            <Button>
              Login
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
