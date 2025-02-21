import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.toptext}>123 Alm Street, USA</Text>
                <Image style={styles.button}
                    source={require("../assets/images/cart_icon.png")} />
            </View>
            <Text style={
                {
                    color: '#a9a9a9',
                    fontSize: 20,
                    fontWeight: 'bold',
                }
            }>Welcome back Alex</Text>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
    },
    toptext: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        flex: 2,
        height: 50,
        width: 50,
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
    }
});
