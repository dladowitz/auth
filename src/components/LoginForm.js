import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }

  render() {
    console.log('State', this.state);

    return (
      <View>
        <Card>
          <CardSection>
            <Input
              value={this.state.email}
              label={'Email'}
              placeholder={'abourdain@gmail.com'}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry={true}
              value={this.state.password}
              label={'Password'}
              placeholder={'sushi1000'}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </CardSection>

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
