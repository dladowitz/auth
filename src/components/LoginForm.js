import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { text: '' }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input label={'Email'} placeholder={'abourdain@gmail.com'}/>
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
