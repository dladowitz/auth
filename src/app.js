import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';

import { Header, Spinner, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm.js';
// import LogoutForm from './components/LogoutForm.js';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    console.log('Mounting  App');

    firebase.initializeApp({
      apiKey: 'AIzaSyBVrcqc_ctqEii0RtFYI6YepUZAKUc6pog',
      authDomain: 'auth-4d43d.firebaseapp.com',
      databaseURL: 'https://auth-4d43d.firebaseio.com',
      storageBucket: 'auth-4d43d.appspot.com',
      messagingSenderId: '212122746297'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logoutButton() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      </Card>
    );
  }

  checkLoginState() {
    console.log('checkLoginState. state.LoggedIn: ', this.state.loggedIn);

    switch (this.state.loggedIn) {
      case true:
        return this.logoutButton();
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    console.log('Rendering App. State: ', this.state);

    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.checkLoginState()}
      </View>
    );
  }
}

export default App;
