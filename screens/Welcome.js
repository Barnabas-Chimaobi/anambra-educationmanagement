import React, { Component } from "react";
import {View,Text,StyleSheet, Image} from "react-native";
import { Container, Header, Content, Button } from 'native-base';
import { background } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";

class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <LinearGradient colors={['#098BD3', '#469aa0', '#64a085','#8daa64','#b4b446','#fec608']}
                            style={styles.container}
                            locations={[-5.7,22.72,53.6,73.16,86.22,97.8]}>
                   <View>
                        <Image source={background.logo} resizeMode="center" style={styles.logo} />
                    </View>
                    <View>
                        <Text style={styles.mainText}>Ministry of Basic Education</Text>
                        <Text style={styles.descriptionText}>Student, Teacher and School Infromation Base</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button block small style={styles.button} onPress={() => { this.props.navigation.navigate("Login") }}>
                            <Text style={styles.buttonText}>Enter</Text>
                        </Button>
                    </View>

            </LinearGradient>
        );
    }
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'rgba(254, 198, 8, 0.17)',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: '5%',
    },
    mainText:{padding:'1%', fontSize:19, textAlign: 'center', fontFamily: 'Roboto', 
              fontWeight:'bold', textTransform:'uppercase',alignSelf:'center'},
    descriptionText:{padding:'0.5%',fontSize:15, textAlign: 'center', lineHeight:29,fontFamily: 'Roboto', textTransform:'capitalize', alignSelf:'center'},
    buttonView:{margin: '2%', width:'30%'},
    button:{backgroundColor:'#0884d2', padding: 9},
    buttonText:{fontSize:20, color:'#fff',alignSelf:'center'}

});