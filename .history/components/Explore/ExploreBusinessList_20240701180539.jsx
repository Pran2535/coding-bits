import { View, FlatList } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businessList}) => {
  return (
    <FlatList
      data={businessList}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <BusinessListCard 
          business={item}
          key={index}
        />
      )}
      ListFooterComponent={() => <View style={{height: 500}} />}
    />
  )
}

export default ExploreBusinessList