import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { StyleSheet } from 'react-native-web';
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
   useWarmUpBrowser();

  const {startOAuthFlow}=useOAuth({strategy:'oauth_google'})
  const onPress =React.useCallback(async()=>{
    try{
      const {createdSessionId,signIn,signUp,setActive}=
      await startOAuthFlow();
      if(createdSessionId){
        setActive({session:createdSessionId});
      }
      else{
       
      }
    } catch(err){
      console.log("OAuth error",err);
    }
  },[])

  return (
    <View>
      <View style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 50,
      }}>
        <Image 
          source={require('../assets/images/adarshpandy.jpg')}
          style={{
            width: 250,
            height: 450,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: '#000'
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={{
          fontSize: 26,
          fontFamily: 'outfit-bold',
          textAlign: 'center'
        }}>
          Coding Bits <Text style={{ color: Colors.PRIMARY }}>Business Community </Text> App
        </Text>
        <Text style={{
          fontSize: 15,
          fontFamily: 'outfit',
          textAlign: 'center',
          marginVertical: 15,
          color: Colors.GRAY
        }}>
          Find your favorite business near you and post your own business to your community
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: -20,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'outfit',
  },
});

export default LoginScreen;
