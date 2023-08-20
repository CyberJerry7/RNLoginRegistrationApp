import React, {useState} from "react";
import {Text,TextInput ,View, StyleSheet, Buttons, Button} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const RegistrationPage =()=>{

  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [age, setAge] = useState(null);
  const [city, setCity] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [postalCode,setPostalCode] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPasswrd] = useState(null);

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
        Sign UP
      </Text>

      <TextInput
        style = {style.input}
        placeholder="First Name"
        value = {firstName}
        onChangeText = {setFirstName}
      />
      
      <TextInput
        style = {style.input}
        placeholder="Second Name"
        value = {secondName}
        onChangeText = {setSecondName}
      />

      <TextInput
        style = {style.input}
        placeholder="Age"
        value = {age}
        onChangeText = {setAge}
        keyboardType="phone-pad"
      />

      <TextInput
        style = {style.input}
        placeholder="City"
        value = {city}
        onChangeText = {setCity}
      />

      <TextInput
        style = {style.input}
        placeholder="Address"
        value = {address}
        onChangeText = {setAddress}
      />

      <TextInput
        style = {style.input}
        placeholder="Zip code/Postal code"
        value = {postalCode}
        onChangeText = {setPostalCode}
        keyboardType="phone-pad"
      />

      <TextInput
        style = {style.input}
        placeholder="Phone Number"
        value = {phone}
        onChangeText = {setPhone}
        keyboardType="phone-pad"
      />

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

      <TextInput
        style = {style.input}
        placeholder="Confirm Password"
        value = {confirmPassword}
        onChangeText = {setConfirmPasswrd}
        secureTextEntry
      />

      <Text style={{marginBottom:12}}></Text>

      <Button 
      style={style.button} 
      title="Register" 
      onPress={handleRegister}/>

    </View>

  );
};

// ____style sheet____

const style = StyleSheet.create({

  input:{
    fontSize:18,
    padding:10,
    marginBottom:7,
    borderWidth:0.5,
    borderColor:"grey",
    borderRadius:12
  }
});

export default RegistrationPage;