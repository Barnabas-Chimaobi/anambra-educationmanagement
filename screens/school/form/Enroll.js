import React, { Component } from "react";
import {View,Text,StyleSheet, KeyboardAvoidingView,TextInput,ScrollView, Picker} from "react-native";
import { Container, Content,DatePicker, Form, Button} from 'native-base';
import Logic from '../../../logic';
import { NavigationActions } from 'react-navigation';

class Enroll extends Component {

    constructor(props) {
        super(props);

        this.state ={
            Lgas: [],
            Locations: [],
            SchooTypes: [],
            Profile:{
                "name": "",
                "coordinates": {
                  "elevation": 1,
                  "lattitudeNorth": 1,
                  "lattidtudeEast": 1,
                },
                "address": "",
                "town": "",
                "ward": "",
                "lgaId": 0,
                "email": "",
                "phone": "",
                "dateEstablished": "",
                "locationId": 0,
                "active": true,
              }
        }
    }

    static navigationOptions =  {
        title: 'New School',
        headerLeft: null
    }


   
    componentDidMount(){

        const Profile = this.props.navigation.getParam('Profile', '');
        if (Profile){
            this.setState({Profile: Profile});
        }

        // lgas
        const lgas = new Logic()
        lgas.Lgas('http://97.74.6.243/anambra/state/4')
        .then((res) => {
            this.setState({Lgas: res.data})
        })
        .catch((error) => console.warn(error))

        const location = new Logic()
        location.Lgas('http://97.74.6.243/anambra/api/Locations')
        .then((res) => {
            this.setState({Locations: res.data})
        })
        .catch((error) => console.warn(error))

        const schoolType = new Logic()
        schoolType.Lgas('http://97.74.6.243/anambra/api/SchoolTypes')
        .then((res) => {
            this.setState({SchooTypes: res.data})
        })
        .catch((error) => console.warn(error))

    }


    submit = () =>{
        const {Profile} = this.state;
        console.log(Profile);

        if (!this.state.Profile.name){
            alert("School Name is compulsory!");
            return;
        }

        if (!this.state.Profile.address){
            alert("School Address is compulsory!");
            return;
        }

        if (!this.state.Profile.town){
            alert("School Town is compulsory!");
            return;
        }

        if (!this.state.Profile.phone){
            alert("School Phone Number is compulsory!");
            return;
        }

        if (!this.state.Profile.email){
        }
        else
        {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.Profile.email) === false)
            {
                alert("Email is Not valid!");
                return;
            }
        }

        if (!this.state.Profile.dateEstablished){
            alert("Date Established is compulsory!");
            return;
        }

        const saveSchool = new Logic()
        saveSchool.TeacherBiodata("http://97.74.6.243/anambra/api/Schools",Profile)
        .then((res) => {
            if (res.status == 201){
                alert("Record saved!");
            }
            // this.props.navigation.navigate("Enroll");
            this.props.navigation.reset([NavigationActions.navigate({ routeName: 'School' })], 0);
        })
        .catch((error) => {
            alert("Phone number already exists");

        });


    }



    updateLocation = (loc) => {
        const {Profile} = this.state;
        Profile.locationId = loc;
        this.setState({ Profile : Profile})
    }


    updateLga = (Lga) => {
        const {Profile} = this.state;
        Profile.lgaId = Lga;
        this.setState({ Profile : Profile})
    }

    setEstablishedDate=(newDate)=> {
        const {Profile} = this.state;
        Profile.dateEstablished = newDate.toISOString();
        this.setState({ Profile : Profile})
    }

    handleProfileChangeText = (inputName, text) => {
        const {Profile} = this.state;
        Profile[inputName] = text;
        this.setState({Profile:Profile });
    }

    handleCordChangeText = (inputName, text) => {
        const {Profile} = this.state;
        Profile.coordinates[inputName] = text;
        this.setState({Profile:Profile });
    }



    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>

            <Container>
                 <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                    <Content>
                    <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                        <Text style={styles.subText}>School Profile</Text>
                    </View>


                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Name</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('name', text)} value={this.state.Profile.name} style={styles.textInput}/>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Contact Address</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('address', text)} value={this.state.Profile.address} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Village/Town</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('town', text)} value={this.state.Profile.town} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Ward</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('ward', text)} value={this.state.Profile.ward} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <Picker selectedValue={this.state.Profile.lgaId} onValueChange={(lga) => {this.updateLga(lga)}}
                                    style={styles.selectInput}>
                                    {this.state.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                            </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email Address</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('email', text)} value={this.state.Profile.email} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Phone Number</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleProfileChangeText('phone', text)} value={this.state.Profile.phone} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year of Establishment</Text>
                                <DatePicker
                                defaultDate={new Date(2005, 4, 4)}
                                minimumDate={new Date(1960, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setEstablishedDate}
                                disabled={false}
                            />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Location</Text>
                                <Picker selectedValue={this.state.Profile.locationId} onValueChange={(lga) => {this.updateLocation(lga)}}
                                    style={styles.selectInput}>
                                    {this.state.Locations.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>




                            <View style={styles.buttonView}>
                               <Button block style={styles.button} small primary  onPress={()=>{this.submit()}}>
                                    <Text style={styles.buttonText}>Save</Text>
                               </Button>
                            </View>


                    </Form>
                    </Content>
            </Container>

            </KeyboardAvoidingView>
        );
    }
}
export default Enroll;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    // buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    // button: { backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '25%',flex: 1,
    // flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },
    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    // buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

    inputView: { width: '100%',alignItems: 'stretch'},

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center'},

    selectInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});