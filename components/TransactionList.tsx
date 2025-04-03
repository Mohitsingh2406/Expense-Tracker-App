import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TransactionItemProps, TransactionListType } from '@/types'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Typo from './Typo'
import {FlashList} from '@shopify/flash-list'
import Loading from './Loading'
import { expenseCategories } from '@/constants/data'
const TransactionList = ({
  data,
  title,
  loading,
  emptyListMessage
}:TransactionListType )=> {
  const handleClick = () => {
    
  }
  return (
    <View style={styles.container}>
      {title && (
          <Typo size={20} fontWeight={'500'}>
            {title}
          </Typo>
      )}
      <View style={styles.list}>
        <FlashList
          data={data}
          renderItem={({item,index})=> <TransactionItem item={item} index={index} handleClick={handleClick}/>}
          estimatedItemSize={60}
        />
      </View>
      {!loading && data.length==0 &&(
        <Typo size={15} color={colors.neutral400} style={{textAlign:'center' , marginTop:spacingY._15}}>
          {emptyListMessage}
        </Typo>
      )}
      {loading &&(
        <View style={{top:verticalScale(100)}}>
          <Loading/>
        </View>
      )}
    </View>
  )
}

const TransactionItem = ({
  item,index,handleClick
}:TransactionItemProps)=>{

  let category = expenseCategories['groceries']
  const IconComponent = category.icon
  return (
  <View>
    <TouchableOpacity style={styles.row}>
      <View style={[styles.icon , {backgroundColor:category.bgColor}]}>
        {IconComponent && (
          <IconComponent
          size={verticalScale(25)}
          weight='fill'
          color={colors.white}
          />
        )}
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default TransactionList

const styles = StyleSheet.create({
  container:{
    gap:spacingY._17
  },
  list:{
    minHeight:3
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:spacingX._12,
    marginBottom:spacingY._12,
    backgroundColor:colors.neutral800,
    padding:spacingY._10,
    paddingHorizontal:spacingY._10,
    borderRadius:radius._17
  },
  icon:{
    height:verticalScale(44),
    aspectRatio:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:radius._12,
    borderCurve:'continuous'
  },
  categoryDes:{
    flex:1,
    gap:2.5
  },
  amountDate:{
    alignItems:'flex-end',
    gap:3
  }
})