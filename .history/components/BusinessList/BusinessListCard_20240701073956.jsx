import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const BusinessListCard = ({business}) => {
  return (
    <View style={{
      padding:10,
      margin:10,
      borderRadius:15,
      backgroundColor:'#fff',
      display:'flex',
      flexDirection:'row',
      gap:10
    }}>
      <Image source={{uri:business.imageUrl}} 
      style={{
        width:120,
        height:120,
        borderRadius:15,

      }}
      />
      <View style={{
        flex:1,
        gap:7
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:17,

        }}>{business.name}</Text>
         <Text
         style={{
          fontFamily:'outfit',
          color:Colors.GRAY,
          flex:1,

          
         }}
         >{business.address}</Text>
         
         <View style={{display:'flex',flexDirection:'row', gap:5}}>
            <Image source={require('./../../assets/images/star.png')}
            style={{
                width:20,
                height:20

            }}
            />
            <Text style={{fontFamily:'outfit'}}>4.5</Text>
         </View>


      </View>
    </View>
  )
}

export default BusinessListCard