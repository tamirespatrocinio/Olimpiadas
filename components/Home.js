import * as React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Button, 
    TouchableOpacity
} from 'react-native';

export default function Home(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Olimpíadas de Tokio 2020/2021</Text>
            <Image style={styles.img} source={require('../assets/olimpiadas-toquio-2020.jpg')} />
            <Text style={styles.titleMedalhas}>Medalhas conquistadas</Text>

            <View style={styles.btncontainer}>  
                <TouchableOpacity>
                    <Button color="#ffd700" title='Ouro' onPress={()=>{props.navigation.navigate('Ouro')}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Button color="#c0c0c0" title="Prata" onPress={()=>{props.navigation.navigate('Prata')}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Button color="#cd7f32" title="Bronze" onPress={()=>{props.navigation.navigate('Bronze')}}/>
                </TouchableOpacity>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItens: 'center'
},
img: {
    width: 360,
    height: 300,
},
title: {
    margin: 10,
    marginTop: 30,
    color: '#191970',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    lineHeight: 34
},
titleMedalhas: {
    marginBottom: 20,
    color: '#191970',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    textTransform:'uppercase'
},
btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    marginLeft: 20, 
    marginRight: 20
}
});