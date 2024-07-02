import { View, Text, TextInput, TouchableOpacity, ToastAndroid, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from '../../constants/Colors';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

const Reviews = ({business}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { user } = useUser();

  const onSubmit = async () => {
    try {
      const docRef = doc(db, 'BusinessList', business?.id)
      await updateDoc(docRef, {
        reviews: arrayUnion({
          rating: rating,
          comment: comment,
          userName: user?.fullName,
          userImage: user?.imageUrl,
          userEmail:user?.primaryEmailAddress?.emailAddress
        })
      })
      ToastAndroid.show('Comment Added Successfully !', ToastAndroid.BOTTOM)
      setComment(''); // Clear comment after submission
      setRating(0); // Reset rating after submission
    } catch (error) {
      console.error("Error adding comment:", error);
      ToastAndroid.show('Failed to add comment', ToastAndroid.BOTTOM)
    }
  }

  return (
    <View style={{
      padding: 20,
      backgroundColor: '#fff',
      marginTop: 20, // Added margin to separate from previous component
    }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
          marginBottom: 10, // Added margin below the title
        }}
      >Reviews</Text>
      
      <View>
        <Rating
          showRating={false}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          placeholder='Write your comment'
          onChangeText={(value) => setComment(value)}
          value={comment}
          multiline={true}
          numberOfLines={4}
          style={{
            borderWidth: 1, // Changed from borderwidth to borderWidth
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            backgroundColor: '#f5f5dc',
            textAlignVertical: 'top',
            marginBottom: 10, // Added margin below the input
          }}
        />
        <TouchableOpacity
          disabled={!comment || rating === 0}
          onPress={onSubmit}
          style={{
            padding: 10,
            backgroundColor: comment && rating !== 0 ? Colors.PRIMARY : Colors.GRAY,
            borderRadius: 10,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontFamily: 'outfit-bold',
              color: '#fff'
            }}
          >Submit</Text>
        </TouchableOpacity>
      </View>

     {/* display previous reviews  */}

    <View>
      {business.reviews?.map((item,index)=>(
        <View>
          <Image source={{uri:item.userImage}}
          style={{
            width:15,
            height:15,
            borderRadius:10,
          }}
          />
          <Text>{item.comment}</Text>
          </View>
      ))}
    </View>

 

    </View>
  )
}

export default Reviews