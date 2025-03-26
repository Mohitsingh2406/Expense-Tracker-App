import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
const Login = () => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28}/>

                <View style={{gap:5, marginTop:spacingY._20}}>
                    <Typo size={30} fontWeight={"800"}>Hey,</Typo>
                    <Typo size={30} fontWeight={"800"}>Welcome Back</Typo>
                </View>

                <View style={styles.from}>
                    <Typo size={16} color={colors.textLighter}>
                        Login Now to track all your expenses
                    </Typo>
                    <Input placeholder='Enter Your Email'/>
                </View>
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
