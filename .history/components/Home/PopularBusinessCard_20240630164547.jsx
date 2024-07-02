import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const PopularBusinessCard = ({business}) => {
  return (
    <View style={{
        marginLeft:20,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15
    }}>
      <Image source={{uri:business?.imageUrl}}
      style={{width:200,
        height:130,
        borderRadius:15

      }}
      />
      <View style={{marginTop:7}}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:15,
        }}>{business.name}</Text>
         <Text style={{
            fontFamily:'outfit',
            fontSize:13,
            color:Colors.GRAY,
        }}>{business.address}</Text>

         <View style={{display:'flex',flexDirection:'row'}}>
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

export default PopularBusinessCard