import { View, Text, TextInput } from 'react-native'
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
  backgroundColor:'black'


}}/>
      </View>
    </View>
  )
}

export default Reviews