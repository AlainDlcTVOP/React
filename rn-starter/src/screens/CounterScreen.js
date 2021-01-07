import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);


    return (

        <View>
            <Button title="Increase" onPress={() => {
                if (counter >= 100) {
                    return;
                }
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                if (counter <= 0) {
                    return;
                }
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );

};
const style = StyleSheet.create({});

export default CounterScreen;