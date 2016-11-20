import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';

import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  componenetWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBVrcqc_ctqEii0RtFYI6YepUZAKUc6pog',
      authDomain: 'auth-4d43d.firebaseapp.com',
      databaseURL: 'https://auth-4d43d.firebaseio.com',
      storageBucket: 'auth-4d43d.appspot.com',
      messagingSenderId: '212122746297'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
