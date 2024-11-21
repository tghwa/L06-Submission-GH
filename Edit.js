import React, { useState } from 'react';
import {Button, Text, TextInput, View, Alert, StyleSheet} from 'react-native';
import {pokemonList} from "./Data";

const Edit = ({navigation, route}) => {
    const pokemon = route.params.object;
    const [pokemonName, setPokemonName] = useState(pokemon.name);
    const [pokemonImage, setPokemonImage] = useState(pokemon.image);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pokemon Name:</Text>
            <TextInput
                style={styles.input}
                value={pokemonName}
                onChangeText={setPokemonName}
                placeholder="Enter Pokémon Name"
            />
            <Text style={styles.label}>Pokemon Image URL:</Text>
            <TextInput
                style={styles.input}
                value={pokemonImage}
                onChangeText={setPokemonImage}
                placeholder="Enter Pokémon Image URL"
            />
            <View style={{flexDirection: 'row'}}>
                <View style={{margin:10, flex:1}}>
                    <Button title="Save" onPress={() => {
                        let indexnum = 0
                        if (route.params.type === "Water") {
                            indexnum = 1;
                        } else if (route.params.type === 'Fire') {
                            indexnum = 2;
                        }
                        const updatedPokemon = {
                            ...pokemon, // Preserve other properties (if any)
                            name: pokemonName,
                            image: pokemonImage,
                        };

                        pokemonList[indexnum].data[route.params.index] = updatedPokemon;

                        navigation.navigate("Home");
                    }
                    }/>
                </View>
                <View style={{margin:10, flex:1}}>
                    <Button title="Delete" onPress={()=>{
                        let indexnum = 0
                        if (route.params.type === "Water") {
                            indexnum = 1;
                        } else if (route.params.type  === 'Fire') {
                            indexnum = 2;
                        }
                        Alert.alert("Are you sure?",'',
                            [{text:'Yes', onPress:() => {
                                    pokemonList[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate("Home");
                                }},
                                {text: 'No'}])
                    }
                    }/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default Edit;
