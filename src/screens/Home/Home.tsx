import React from "react"
import { View, Text, StyleSheet } from "react-native"
export default function HomeScreen() {
    return(
        <>
        <View style={styles.conatneir}>
            <Text>this is home page</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    conatneir: {
        justifyContent: "center",
        flex: 1,
    }
})