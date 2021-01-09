import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';



const reducer = (state, action) => {

    switch (action.type) {

        // state === {count : number}
        // action === {type : 'increment', 'decrement' ,payload}

        case 'increment':

            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return state.count + action.payload < 0 ? state : { ...state, count: state.count + action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (

        <View>
            <Button title="Increment" onPress={() =>
                dispatch({ type: 'increment', payload: 1 })}

            />

            <Button title="Decrement" onPress={() =>
                dispatch({ type: 'decrement', payload: -1 })}

            />
            <Text>Current Count: {state.count}</Text>
        </View>
    );


};
const style = StyleSheet.create({});

export default CounterScreen;