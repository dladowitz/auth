import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>I'm an App</Text>
      </View>
    );
  }
}

export default App;




{/* <script src="https://www.gstatic.com/firebasejs/3.6.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBVrcqc_ctqEii0RtFYI6YepUZAKUc6pog",
    authDomain: "auth-4d43d.firebaseapp.com",
    databaseURL: "https://auth-4d43d.firebaseio.com",
    storageBucket: "auth-4d43d.appspot.com",
    messagingSenderId: "212122746297"
  };
  firebase.initializeApp(config);
</script> */}
