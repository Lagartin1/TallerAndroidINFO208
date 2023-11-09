
import React, { useState } from 'react';
import { Text,View, TextInput, Pressable,StyleSheet,Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //cambiar con la api
    if (username === 'Usuario' && password === 'password') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },]);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.tL}> LOGIN</Text>
        <Text style={styles.tB}> Bienvenido Ingresa tus credenciales</Text>
        <TextInput 
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
         <Pressable style={styles.buttonL} onPress={handleLogin}> 
        <Text style={styles.textButton}>Login</Text> 
        </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    pading:100,
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'#164863',
  },
  tL:{
    fontSize:50,
    fontWeight:'900',
    color:'#fff',
    marginTop:100,
    marginBottom:20,
  },
  tB:{
    marginTop:50,
    fontSize:20,
    color:'#fff',
    fontStyle:'italic',
  },
  input:{
    height:40,
    width: 150,
    borderColor:'#fff',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'#fff',
    alignContent:'center',
    textAlign:'center',
    padding:8,
    margin:10,
  },
  buttonL:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#427D9D',
  },
  textButton:{
    color:'#fff',
    fontWeight:'800',
  }
});

export default LoginScreen;
