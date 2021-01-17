import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.parentStyle}>
            <View style={style.viewOne} />
            <View style={style.viewTwo} />
            <View style={style.viewThree} />
        </View>
    );

};

const style = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwo: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThree: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    }

});

export default BoxScreen;