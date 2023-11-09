import React ,{useState }from 'react';
import { View, Text,StyleSheet, Image} from 'react-native';

function SplashScreen({navigation}) {
    setTimeout(()=>{navigation.navigate('Login')},5000);
    return(
        <View style={styles.container}> 
            <Text style={styles.tSL1}>Bot Telegram</Text>
            <Text style={styles.tSL2}>INFO 208</Text>
            <Image style={styles.bot} source={require('../imgs/bot.png')} />
            <Image style={styles.uach} source={require('../imgs/uach.png')} />    
        </View>
    
    )

};
const styles = StyleSheet.create({
    container: {
      flex:1,
      pading:100,
      alignItems:'center',
      alignContent:'center',
      backgroundColor:'#164863',
    },
    tSL1:{
        color:'#fff',
        width:250,
        marginTop:100,
        fontSize:40,
        fontWeight:'800',
    },
    tSL2:{
        color:'#fff',
        width:250,
        paddingLeft:20,
        fontSize:40,
        fontWeight:'800',
    },

    bot:{
        marginTop:100,
        height:200,
        width:200,
    },
    uach:{
        marginTop:80,
    }
});
export default SplashScreen;