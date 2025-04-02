import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typo from './Typo'
import { scale } from '@/utils/styling'
import { colors, spacingX, spacingY } from '@/constants/theme'

const HomeCard = () => {
  return (
    <View>
      <Typo>HomeCard</Typo>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  bgImage:{
    height:scale(210),
    width:"100%"
  },
  container:{
    padding:spacingX._20,
    paddingHorizontal:scale(23),
    height:'87%',
    width:"100%",
    justifyContent:'space-between'
  },
  totalBalanceRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:spacingY._5
  },
  stats:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  statsIcon:{
    backgroundColor:colors.neutral350,
    padding:spacingY._5,
    borderRadius:50
  },
  incomeExpense:{
    flexDirection:'row',
    alignItems:'center',
    gap:spacingY._5
  }
})