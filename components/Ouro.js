import * as React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ScrollView 
} from 'react-native';

const Separador = () => <View style = {styles.separador} />

export default function Ouro() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Medalhas de Ouro</Text>

                <Text style={styles.name}>Rebeca Andrade</Text>
                <Image style={styles.img} source={require('../assets/rebeca.JPG')}/>
                <Separador />

                <Text style={styles.name}>Kelvin Hoefler</Text>
                <Image style={styles.img} source={require('../assets/kelvin.JPG')}/>
                <Separador />
                
                <Text style={styles.name}>Italo Ferreira</Text>
                <Image style={styles.img} source={require('../assets/italo.JPG')}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#ffd700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    marginBottom: 20,
    marginTop: 40,
    fontSize: 26,
},
name: {
    margin: 5,
    fontSize: 20,
},
img: {
    width: 280,
    height: 140,
    marginBottom: 30
},
separador: {
    marginVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#1C1C1C'
}
});
