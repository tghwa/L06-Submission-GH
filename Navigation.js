import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import AddPokemon from './AddPokemon';
import Edit from "./Edit";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddPokemon" component={AddPokemon} />
                <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
