import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const UserIntro = () => {
    const {user}=useUser();
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    }}>
      <Image source={{uri:user?.imageUrl}} style={{
        width:100,
        height:100,
        borderRadius:99,
        marginBottom:10,
        borderWidth:2,
        borderColor:'#fff'        
      }}/>
      <Text style={{fontSize:20, fontWeight:'bold'}}>{user?.fullName}</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>{user?.primaryEmailAddress?.emailAddress}</Text>

    </View>

  )
}

export default UserIntro