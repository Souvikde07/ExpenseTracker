import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Typo from '@/components/Typo'
import { spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const Welcome = () => {
  return (
    <ScreenWrapper>
        <view style={styles.container}>

            {/* login button and image */}
            <view>
                <TouchableOpacity style={styles.loginButton}>
                    <Typo fontWeight={"500"}>Sign in</Typo>
                </TouchableOpacity>

                <Image
                    source={require('../../assets/images/welcome.png')}
                    style={styles.WelcomeImage}
                    resizeMode="contain"
                />
            </view>

            {/* footer */}
            <view style={styles.footer}>
                <view style={{ alignItems: "center" }}>
                    <Typo size={30} fontWeight={"800"}>
                        Always take control 
                    </Typo>
                    <Typo size={30} fontWeight={"800"}>
                        of your finances 
                    </Typo>
                </view>
                <view style={{ alignItems:"center", gap: 2 }}>
                    <Typo size={17} color={Colors.textLight}>
                        Finances must be arranged to set a better
                    </Typo>
                    <Typo size={17} color={Colors.textLight}>
                        lifestyle in future
                    </Typo>
                </view>

                <view style={styles.buttonContainer}>
                    {/* button */}
                </view>
            </view>

        </view>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "space-between",
        paddingTop: spacingY._7,
    },
    WelcomeImage: {
        width: "100%",
        height: verticalScale(300),
        alignSelf: "center",
        marginTop: verticalScale(100),
    },
    loginButton: {
        alignSelf: "flex-end",
        marginRight: spacingX._20,
    },
    footer: {
        backgroundColor: Colors.neutral900,
        alignItems:"center",
        paddingTop:verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        shadowColor: "white",
        shadowOffset: {width: 0, height: -10},
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: spacingX._25,
    },
});