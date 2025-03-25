import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'

const Login = () => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton/>
            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({
    footerText:{
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    },
    footer : {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 5
    },
    forgotPassword:{
        textAlign: 'right',
        fontWeight:'500',
        color: colors.text
    },
    from:{
        gap:spacingY._20
    },
    welcomeText:{
        fontSize:verticalScale(20),
        fontWeight:'bold',
        color: colors.text
    },
    container:{
        flex:1,
        gap:spacingY._30,
        paddingHorizontal:spacingY._20,
    }
})
