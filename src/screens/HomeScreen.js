import React from 'react';
import { View, Text,StyleSheet,Pressable} from 'react-native';

function HomeScreen({ navigation }) {
  const handelPass=()=>{
    navigation.navigate('BotScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tL1}>Home</Text>
      <View style={styles.wrapperCard}>
        <Text style={styles.textoCard}> Esta aplicacion tiene como finalidad ingresar nuevos comandos al bot de telegram</Text>
      </View>
      <Pressable style={styles.buttonB} onPress={handelPass}> 
        <Text style={styles.textButton}>IR a pantalla bot</Text> 
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    pading:100,
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'#164863',
  },
  tL1:{
    marginTop:100,
    color:'#fff',
    fontSize:40,
    fontWeight:'900',
  },
  wrapperCard:{
    marginTop:40,
    flex:0.3,
    alignContent:'center',
    alignItems:'center',
    width:300,
    backgroundColor:'rgba(0,0,0,0.36)',
    borderRadius:30,
  },
  textoCard:{
    margin:20,
    color:"#fff",
    fontWeight:'800',
  },
  buttonB:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:60,
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
export default HomeScreen;
