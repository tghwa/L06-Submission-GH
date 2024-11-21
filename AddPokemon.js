import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { pokemonList } from './Data';

const AddPokemon = ({ navigation }) => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage, setPokemonImage] = useState('https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png');
    const [category, setCategory] = useState('Electric');


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
            <Text style={styles.label}>Category:</Text>
            <RNPickerSelect
                onValueChange={setCategory}
                value={category}
                items={[
                    { label: 'Electric', value: 'Electric' },
                    { label: 'Water', value: 'Water' },
                    { label: 'Fire', value: 'Fire' },
                ]}
            />
            <Button title="Submit" onPress={() => {
                let item = {key: pokemonName};
                let indexnum = 0;
                if (category === "Water") {
                    indexnum = 1;
                } else if (category === 'Fire') {
                    indexnum = 2;
                }
                const newPokemon = {
                    name: pokemonName,
                    image: pokemonImage,
                };

                pokemonList[indexnum].data.push(newPokemon);
                navigation.navigate("Home");
            }}
            />
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

export default AddPokemon;
