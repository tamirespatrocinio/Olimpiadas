import * as React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ScrollView 
} from 'react-native';

const Separador = () => <View style = {styles.separador} />

export default function Bronze() {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>Medalhas de Bronze</Text>

            <Text style={styles.name}>Rebeca Andrade</Text>
            <Image style={styles.img} source={require('../assets/rebeca.JPG')}/>

            <Text style={styles.name}>Kelvin Hoefler</Text>
            <Image style={styles.img} source={require('../assets/kelvin.JPG')}/>

            <Text style={styles.name}>Italo Ferreira</Text>
            <Image style={styles.img} source={require('../assets/italo.JPG')}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#cd7f32',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    fontSize: 26,
},
name: {
    fontWeight: 'bold',
    margin: 5,
    fontSize: 20,
},
img: {
    width: 280,
    height: 140,
    marginBottom: 30,
},
separador: {
    marginVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#1C1C1C'
}
});
