import React from 'react';
import { Text, View, StyleSheet, SectionList, Button, Alert, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {pokemonList} from "./Data";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  headertext: {
    fontSize: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  opacityStyle: {
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 250,
    width: 200,
    resizeMode: 'stretch',
    backgroundColor:'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});


const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => {
                                  navigation.navigate('Edit', {index:index, type: section.title, object: item});
                              }
                              }>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Image source={{uri: item.image}} style={styles.imageStyle} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={styles.buttonContainer}>
                <StatusBar/>
                <Button title="Add Pokemon" onPress={()=> navigation.navigate('AddPokemon')} />
            </View>
            <SectionList
                sections={pokemonList}
                renderItem={renderItem}
                renderSectionHeader={({section: {icon, title, bgcolor, color}}) => (
                    <Text style={[styles.headertext, {backgroundColor: bgcolor, color: color}]}>
                      <Icon name={icon} size={20} />{title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;

