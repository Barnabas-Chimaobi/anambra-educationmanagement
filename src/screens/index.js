import React, { Component } from "react";
import {View,Text,StyleSheet, Image, TouchableOpacity} from "react-native";
import { background } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from '../constants/styles';

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
                        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("Main") }}>
                            <Text style={styles.buttonText}>Enter</Text>
                        </TouchableOpacity>
                    </View>

            </LinearGradient>
        );
    }
}
export default Welcome;