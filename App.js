import { StyleSheet, SafeAreaView, Platform, ScrollView, View, Text, StatusBar, TextInput, Switch, Button, Image, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
export default function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if(!username) errors.username = "Username is required"
    if(!password) errors.password = "Password is required"
    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleForm = () => {
    if(validateForm()) {
      console.log("Submitted", username, password)
      setUsername("")
      setPassword("")
      setErrors({})
    }
  }
  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style = {styles.container}>
      <View style = {styles.form}>
        <Image source={require("./assets/adaptive-icon.png")} style = {styles.image}/>
        <Text style = {styles.label}>Username</Text>
        <TextInput 
          style = {styles.input} 
          placeholder ="Enter your name"
          value = {username}
          onChangeText={setUsername}
        />
        {
          errors.username ? (<Text style = {styles.errorText}>{errors.username}</Text>) : null
        }
        <Text style = {styles.label}>Password</Text>
        <TextInput 
          style = {styles.input} 
          placeholder ="Enter your password" 
          secureTextEntry
          value = {password}
          onChangeText={setPassword}
        />
        {
          errors.password ? (<Text style = {styles.errorText}>{errors.password}</Text>) : null
        }
        <Button title='Login' onPress={handleForm} ></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20
  },

  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 5,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 4
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
    alignSelf: 'center'
  },
  errorText: {
    color:"red",
    marginBottom: 10,
  }
});
