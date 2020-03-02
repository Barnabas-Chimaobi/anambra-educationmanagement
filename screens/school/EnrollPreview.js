import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import { CheckBox } from 'react-native-elements'
import SchoolProfile from "./form/SchoolProfile";
import { NavigationActions } from 'react-navigation';



class EnrollPreview extends Component {

    constructor(props) {
        super(props);
        state = Dimensions.get("window");

        this.state = {
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            data:{
                "name": "Test",
                "coordinatesId": 5,
                "coordinates": {
                  "elevation": 1,
                  "lattitudeNorth": 1,
                  "lattidtudeEast": 1,
                  "id": 5
                },
                "address": "a",
                "town": "a",
                "ward": "a",
                "lgaId": 70,
                "lga": {
                  "id": 70,
                  "state": null,
                  "name": "Aguata",
                  "active": true
                },
                "email": "",
                "phone": "32",
                "dateEstablished": "2005-05-03T23:00:00",
                "locationId": 2,
                "location": null,
                "schoolRecordId": null,
                "schoolRecord": null,
                "active": true,
                "id": 5
              }
        }
        this.setDate = this.setDate.bind(this);
    }

    componentDidMount(){
        const data = this.props.navigation.getParam('data', '');
        if (data){

            this.setState({ data:data })
        }
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
        // Important to stop updating state after unmount
        Dimensions.removeEventListener("change", this.handler);
      }


    render() {
        return (

            <Container>


                <View style={{ width: '100%', backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>Existing School Information</Text>
                </View>

                <Content>
                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>School Details</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>School Name</Text>
                            <Text style={styles.dataText}>{this.state.data.name}</Text>
                        </View>


                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Cordinates</Text>
                            <Text style={styles.dataText}>{this.state.data.coordinates.elevation},{this.state.data.coordinates.lattidtudeEast},{this.state.data.coordinates.lattitudeNorth}</Text>
                        </View>


                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Contact Address</Text>
                            <Text style={styles.dataText}>{this.state.data.address}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Village/Town</Text>
                            <Text style={styles.dataText}>{this.state.data.town}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Ward</Text>
                            <Text style={styles.dataText}>{this.state.data.ward}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>L.G.A</Text>
                            <Text style={styles.dataText}>{this.state.data.lga.name}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Email Address</Text>
                            <Text style={styles.dataText}>{this.state.data.email}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>School Phone Number</Text>
                            <Text style={styles.dataText}>{this.state.data.phone}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Establishment</Text>
                            <Text style={styles.dataText}>{this.state.data.dateEstablished.substring(0,10)}</Text>
                        </View>

                        {/* <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Location</Text>
                            <Text style={styles.dataText}>{this.state.data.locationId}</Text>
                        </View> */}



                        <View style={styles.buttonView}>
                            <Button block style={styles.button} onPress={()=>{       this.props.navigation.reset([NavigationActions.navigate({ routeName: 'School' })], 0);
     }}>
                                <Text style={styles.buttonText}>Finish</Text>
                            </Button>
                        </View>

                    </Form>
                </Content>
            </Container>

        );
    }
}
export default EnrollPreview;

const styles = StyleSheet.create({

    containerBtn: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      buttonContainer: {
        flex: 1,
      },

    buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' },
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },


    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },

    dataText: {height: 35, lineHeight: 35, paddingLeft: 5, flex: 1, fontWeight: '600', flexDirection: 'row', justifyContent: 'flex-end'},

    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});