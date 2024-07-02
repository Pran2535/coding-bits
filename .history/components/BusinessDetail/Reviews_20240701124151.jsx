import { View, Text } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'

const Reviews = ({business}) => {
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
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>

      </View>
    </View>
  )
}

export default Reviews