import { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES} from '../constants'
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../components'

const Home = () => {
    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimensions = "60%"/>
                    ),
                    headerRight : () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimensions = "100"/>
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View 
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home