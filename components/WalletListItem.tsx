import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typo from './Typo'
import { WalletType } from '@/types'
import { Router } from 'expo-router'
import { verticalScale } from '@/utils/styling'
import { colors, radius, spacingX } from '@/constants/theme'

const WalletListItem = ({
    item,
    index,
    router
}:{
    item:WalletType,
    index:number,
    router:Router
}) => {
    return (
        <View>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
    )
}


export default WalletListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems : 'center',
        marginBottom:verticalScale(17)
    },
    imageContainer:{
        height:verticalScale(45),
        width:verticalScale(45),
        borderWidth:1,
        borderColor:colors.neutral600,
        borderRadius:radius._12,
        overflow:'hidden',
        borderCurve:'continuous'
    },
    nameContainer:{
        flex:1,
        gap:2,
        marginLeft:spacingX._10
    }
})