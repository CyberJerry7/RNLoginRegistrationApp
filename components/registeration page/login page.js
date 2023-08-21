import React, {useState} from "react";
import {Text,TextInput ,View, StyleSheet, Buttons, Button, TouchableOpacity} from "react-native";
import SignupPage from "./signup page";


const LoginPage =()=>{

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister =()=>{
    // here we will perform registration logic
    console.log("Registration Submitted!!! ;)");
  }

  return(
    <View style={{padding:10}}>

  {/* heading */}

      <Text style={{
        textAlign:"center",
        color:"purple",
        fontSize:50,
        fontWeight:"bold",
        backgroundColor:"yellow",
        marginBottom:15,
        marginTop:5,
        borderRadius:30  
        }}>
          APP 
        </Text>

  {/* signup heading  */}

      <Text style={{
        textAlign:"center",
        color:"green",
        fontSize: 30,
        marginBottom: 25
      }}>
        Log In
      </Text>

      <TextInput
        style = {style.input}
        placeholder="Email Address"
        value = {email}
        onChangeText = {setEmail}
      />

      <TextInput
        style = {style.input}
        placeholder="Password"
        value = {password}
        onChangeText = {setPassword}
        secureTextEntry
      />

      <Text style={{marginBottom:8}}></Text>

      <Button 
      title="Log in" 
      onPress={handleRegister}/>

    </View>

  );
};

// ____style sheet____

const style = StyleSheet.create({

  input:{
    fontSize:18,
    padding:10,
    marginBottom:8,
    borderWidth:0.5,
    borderColor:"grey",
    borderRadius:12
  }
});

export default LoginPage;