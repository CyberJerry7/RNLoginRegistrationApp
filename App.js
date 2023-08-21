import React, {useState} from "react";
import {Text,TextInput ,View, StyleSheet, Buttons, Button, Touchable, TouchableOpacity} from "react-native";
import LoginPage from "./components/registeration page/login page";
import SignupPage from "./components/registeration page/signup page";

const App =()=>{
  return(
    <View>
      <SignupPage/>
    </View>
  );
};

export default App;