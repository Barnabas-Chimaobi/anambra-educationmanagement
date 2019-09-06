import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker } from "react-native";
import { Container, Content, Form, Button} from 'native-base';
import { CheckBox } from 'react-native-elements'

class Viewteacher extends Component {

    constructor(props) {
        super(props);

        this.state ={
            checked: false,
            checkedYes: false
        }
    }

    render() {
        return (

            <Container>
                  

            <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                <Text style={styles.headerText}>New Teacher Information</Text>
            </View>

                <Content>
                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Personal Details</Text>
                </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>First Name</Text>
                            <Text style={styles.labelText}>First Name</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Last Name</Text>
                            <Text style={styles.labelText}>Last Name</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Other Name</Text>
                            <Text style={styles.labelText}>Other Name</Text>
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Sex</Text>
                            <Text style={styles.labelText}>Sex</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of Birth</Text>
                            <Text style={styles.labelText}>Date of Birth</Text>
                        </View>


                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>State of Origin</Text>
                                    <Text style={styles.labelText}>State of Origin</Text>
                                </View>
                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>L.G.A</Text>
                                    <Text style={styles.labelText}>L.G.A</Text>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Hometown</Text>
                                    <Text style={styles.labelText}>Hometown</Text>
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Residential Address</Text>
                                    <Text style={styles.labelText}>Residential Address</Text>
                                </View>
                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Do you live within the school ?</Text>
                                    <Text style={styles.labelText}>Do you live within the school ?</Text>
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Phone Number</Text>
                                    <Text style={styles.labelText}>Phone Number</Text>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Next of Kin</Text>
                                    <Text style={styles.labelText}>Next of Kin</Text>
                                </View>
                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                                    <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Email</Text>
                                    <Text style={styles.labelText}>Email</Text>
                                </View>

                                 
                                <View style={{paddingTop: 5,margin:10}}>
                                   <Button style={styles.button} small primary onPress={() => { this.props.navigation.navigate("ViewBio") }}>
                                        <Text style={styles.buttonText}>Next</Text>
                                    </Button>
                                </View>
                     

                    </Form>
                </Content>
            </Container>



        );
    }
}
export default Viewteacher;

const styles = StyleSheet.create({
    // container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
    // buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '25%',flex: 1,
    flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },
    buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15, 
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7', 
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});