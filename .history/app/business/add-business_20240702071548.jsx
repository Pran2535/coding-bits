import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'

const AddBusiness = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [category, setCategory] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation()
  const [image, setImage] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Business',
      headerShown: true,
    })
    getCategoryList();
  }, [])
      
  const getCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, 'Category'));
    const snapShot = await getDocs(q);
    const categories = [];
    snapShot.forEach((doc) => {
      categories.push({
        label: doc.data().name,
        value: doc.data().name,
      });
    });
    setCategoryList(categories);
  }

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
    console.log(result)
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>
        Add New Business
      </Text>
      <Text style={{ fontFamily: 'outfit', color: Colors.GRAY }}>
        Fill all details in order to add new Business
      </Text>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={onImagePick}>
        {!image ? (
          <Image
            source={require('./../../assets/images/placeholder.png')}
            style={{ width: 100, height: 100 }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 15 }}
          />
        )}
      </TouchableOpacity>
      <View>
        <TextInput
          placeholder='Name'
          onChangeText={(v)=>setName(v)}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'outfit',
          }}
        />
        <TextInput
          placeholder='Address'
          onChangeText={(v)=>setAddress(v)}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'outfit',
          }}
        />
        <TextInput
          placeholder='Contact'
          onChangeText={(v)=>setContact(v)}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'outfit',
          }}
        />
        <TextInput
          placeholder='Website'
          onChangeText={(v)=>setWebsite(v)}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'outfit',
          }}
        />
        <TextInput
          placeholder='About'
          onChangeText={(v)=>setAbout(v)}
          multiline
          numberOfLines={5}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'outfit',
            height: 100,
          }}
        />
        <View style={{
          borderWidth: 1,
          borderRadius: 15,
          marginTop: 10,
          borderColor: Colors.PRIMARY,
          backgroundColor: '#fff',
          overflow: 'hidden'
        }}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label="Select a category" value={null} />
            {categoryList.map((category, index) => (
              <Picker.Item key={index} label={category.label} value={category.value} />
            ))}
          </Picker>
        </View>
      </View>
      <TouchableOpacity style={{
        padding:15,
        backgroundColor:Colors.PRIMARY
      }}>
        <Text>
          Add New Business 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddBusiness