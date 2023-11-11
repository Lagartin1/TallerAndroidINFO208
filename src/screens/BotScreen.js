import React ,{useState }from 'react';
import { View, Text,StyleSheet,TextInput, Pressable, Alert} from 'react-native';
import postCommmand from '../components/PostComand';


export default function BotScreen() {
    const [command, setCommand] = useState('');
    const [instruction, setInstruction] = useState('');
    const sendCommand= async ()=>{
      console.log("sending");
      postCommmand({"command":command, "message":instruction});
      };

    return (
        <View style={styles.container}>
           <Text style={styles.tL}> Command</Text>
            <View>
                <Text style={styles.tB}> Ingese su comando</Text>
                <TextInput 
                style={styles.input}
                placeholder="Comando"
                value={command}
                onChangeText={(text) => setCommand(text)}
                />
                <TextInput
                style={styles.input}
                placeholder="instruccion"
                value={instruction}
                onChangeText={(text) => setInstruction(text)}
                />
                <Pressable style={styles.buttonC} onPress={sendCommand}> 
                    <Text style={styles.textButtonC} > Enviar </Text>
                </Pressable>
            </View>
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
      fontWeight:'500',
      color:'#fff',
      fontStyle:'italic',
    },
    input:{
      height:40,
      width: 200,
      borderColor:'#fff',
      borderWidth:1,
      borderRadius:20,
      backgroundColor:'#fff',
      alignContent:'center',
      textAlign:'center',
      padding:8,
      margin:10,
    },
    buttonC:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#427D9D',
      },
      textButtonC:{
        color:'#fff',
        fontWeight:'800',
      },
  });

  