import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput} from "react-native";
import { Container, Header, Content, Button,Form, Item, Input, Label,Card, CardItem, Body } from 'native-base';
import { background } from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import Logic from '../../logic';

class SchoolStart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            data: {}
        }
    }

    lookupNumber = () =>{

        const url = `http://97.74.6.243/anambra/api/Schools/number/${this.state.number}`;
        console.log(url)
        const data = new Logic()
        data.TeacherGetBiodata(url)
        .then((res) => {
            if (res.status == 200 && res.data){
                console.log(res.data)
                this.props.navigation.navigate("EnrollPreview",{data:res.data})
                console.log(res.data)

            }

       })
      .catch((error) => console.warn(error))


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

                    <View style={{width:'60%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>

                        <View>
                            <Text style={styles.headerText}>School Information</Text>
                        </View>

                        <View style={{margin:'2%'}}>
                            <Text>School Phone Number</Text>
                            <TextInput  onChangeText={text => this.setState({number: text})} value={this.state.number}  keyboardType="number-pad" style={{borderColor:'#ffffff', borderWidth: 1,paddingTop: 5, marginTop: 5, backgroundColor:'#fff', color:'#000'}} />
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={styles.button} onPress={() => { this.lookupNumber() }}>
                                <Text style={styles.buttonText}>Proceed</Text>
                            </Button>
                        </View>

                    </View>

            </LinearGradient>
        );
    }
}
export default SchoolStart;

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
    mainText:{padding:3, fontSize:30,lineHeight:36,fontFamily: 'Roboto', fontWeight:'bold', textTransform:'uppercase',alignSelf:'center'},
    descriptionText:{padding:3,fontSize:24, lineHeight:29,fontFamily: 'Roboto', textTransform:'capitalize', alignSelf:'center'},
    // buttonView:{width:'30%', alignSelf:'center', margin:'3%'},
    // button:{backgroundColor:'#0884d2'},
    // buttonText:{fontSize:30, color:'#fff',alignSelf:'center'},

    buttonView: { width: '20%', alignSelf: 'center', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    inputView: {
        width: '100%',
        alignItems: 'stretch'
    },
    headerText:{fontSize:20, lineHeight:29,fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},


});