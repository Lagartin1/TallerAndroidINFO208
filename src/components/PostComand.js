import {Alert} from 'react-native';

export default async function postCommmand(data){
    try {
      //cambiar link del fetch
      const response = await fetch('http://localhost:3000/api/command', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)
        });
      const result = await response.json();
      console.log("Success:", result);
      Alert.alert('Success','Comando enviado satisfactoriamente', [{ text: 'OK', onPress: () => console.log('OK Pressed') },]);
    } catch (error) {
      Alert.alert('Error','no se pudo Enviar el comando', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },]);
    }
  }
  
  
