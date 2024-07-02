import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'

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

      </View>
    </View>
  )
}

export default Reviews