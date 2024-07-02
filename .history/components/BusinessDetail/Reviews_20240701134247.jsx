import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from '../../constants/Colors';

const Reviews = ({business}) => {
  const [rating,setRating]=useState(0);
  return (
    <View style={{
      padding:20,
      backgroundColor:'#fff'
    }}> 
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:20,
      }}
      >Reviews</Text>

      <View>
<Rating
  showRating={false}
  onFinishRating={(rating)=>setRating(rating)}
  style={{ paddingVertical: 10 }}
/>
<TextInput placeholder='Write your comment'
numberOfLines={4}
style={{ borderwidth:1,
  padding:10,
  borderRadius:10,
  borderColor:Colors.GRAY,
  backgroundColor:'#f5f5dc',
  textAlignVertical:'top'


}}/>
<TouchableOpacity
style={{
  padding:10,
  backgroundColor:Colors.PRIMARY,
  borderRadius:10,
  marginTop:10,
  justifyContent:'center',
  alignItems:'center'
}}
>
  <Text
  style={{
    fontFamily:'outfit-bold',
    color:'#fff'
  }}
  >Submit</Text>
</TouchableOpacity>

      </View>
    </View>
  )
}

export default Reviews