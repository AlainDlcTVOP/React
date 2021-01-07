import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const babes = [

        { name: 'Amanda #1 ', age: 25 },
        { name: 'Ida #2 ', age: 23 },
        { name: 'Julia #3 ', age: 20 },
        { name: 'Andi #4 ', age: 21 },
        { name: 'Hanna #5 ', age: 22 },
        { name: 'Kalena #6 ', age: 26 },

    ];

    return (
        <FlatList
            keyExtractor={(babes) => babes.name} // key for data list
            data={babes} renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                    {item.name} - Age {item.age}</Text>;
            }} />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "black",
        marginVertical: 50

    }
});
export default ListScreen;