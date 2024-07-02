import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businessList}) => {
  return (
    <ScrollView>
      <FlatList
      data={businessList}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index})=>(
       <BusinessListCard business={item}
       key={index}
       />
      )}
      />
      <View style={{height:100}}></View>
    </ScrollView>
  )
}

export default ExploreBusinessList