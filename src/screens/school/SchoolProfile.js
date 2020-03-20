import React, { Component } from "react";
import {View,Text,StyleSheet, KeyboardAvoidingView,TextInput,ScrollView, Picker, Platform, NetInfo, Alert} from "react-native";
import { Container, Content,DatePicker, Form, Button,Switch} from 'native-base';
import { styles} from "../../constants/styles";
import { connect} from 'react-redux'
import * as  biodataActions from "../../actions/index";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

class SchoolProfile extends Component {

    constructor(props) {
        super(props);
        state = {
            location: null,
            errorMessage: null,
          };
    }

    static navigationOptions = {
      header: null,
  };

  componentDidMount(){
    CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
          NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {;
            } else {
              Alert.alert("No internet connection");
            }
          });
        } else {
        //   // For iOS devices
        //   NetInfo.isConnected.addEventListener(
        //     "connectionChange",
        //     this.handleFirstConnectivityChange
        //   );
        }
      };
}

  componentWillMount() {
    this._getLocationAsync();
    console.log("Data",this.props.Profile.dateEstablished)
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      alert("Permission to access location was denied");
    }


    let location = await Location.getCurrentPositionAsync({});
    if(location){
        if (this.props.Profile.coordinates.elevation <= 0 && this.props.Profile.coordinates.lattitudeNorth <= 0 ){
            this.props.addSchoolCordinates("elevation",location.coords.altitude);
            this.props.addSchoolCordinates("lattitudeNorth",location.coords.latitude);
            this.props.addSchoolCordinates("lattidtudeEast",location.coords.longitude);
        }
        
    }
    console.log(location);
  };

  componentDidMount() {
    this._getLocationAsync();
    this.props.fetchLgasByState(4);
    this.props.fetchSchoolList();
    this.props.fetchStudentStreamsList();
    this.props.fetchStudentClassesList();
    this.props.fetchStudentStreamsList();
    this.props.fetchLocationsList();
    this.props.fetchSchoolTypesList();
  }

    nextPage = () =>{

        if (!this.props.Profile.name) {
            alert("School Name is compulsory!");
            return;
        }

        if (!this.props.Profile.address) {
            alert("School address is compulsory!");
            return;
        }

        if (!this.props.Profile.town) {
            alert("School town is compulsory!");
            return;
        }

        if (!this.props.Profile.ward) {
            alert("School ward is compulsory!");
            return;
        }

        if (!this.props.Profile.phone) {
            alert("School phone is compulsory!");
            return;
        }

        if (!this.props.Profile.dateEstablished) {
            alert("School date established is compulsory!");
            return;
        }


        this.props.navigation.navigate("SchoolOtherData");

    }

    updateLga = (Lga) => {
        this.props.addSchoolProfile("lgaId",Lga);
    }

    setEstablishedDate = (newDate) => {
        this.props.addSchoolProfile("dateEstablished",newDate.toISOString());
    }

    handleProfileChangeText = (inputName, text) => {
        this.props.addSchoolProfile(inputName,text);
    }

    handleCordChangeText = (inputName, text) => {
      this.props.addSchoolCordinates(inputName,text);
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
                                <TextInput onChangeText={text => this.handleProfileChangeText('name', text)} value={this.props.Profile.name} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates Elevation</Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.handleCordChangeText('elevation', text)} value={`${this.props.Profile.coordinates.elevation}`} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates Lattidtude East</Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.handleCordChangeText('lattitudeNorth', text)} value={`${this.props.Profile.coordinates.lattitudeNorth}`} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates Lattitude North</Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.handleCordChangeText('lattidtudeEast', text)} value={`${this.props.Profile.coordinates.lattidtudeEast}`} style={styles.textInput}/>
                            </View>




                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Contact Address</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('address', text)} value={this.props.Profile.address} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Village/Town</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('town', text)} value={this.props.Profile.town} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Ward</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('ward', text)} value={this.props.Profile.ward} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <Picker selectedValue={this.props.Profile.lgaId} onValueChange={(lga) => {this.updateLga(lga)}}
                                    style={styles.picker}>
                                    {this.props.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                            </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email Address</Text>
                                <TextInput  onChangeText={text => this.handleProfileChangeText('email', text)} value={this.props.Profile.email} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Phone Number</Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.handleProfileChangeText('phone', text)} value={this.props.Profile.phone} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year of Establishment</Text>
                                <DatePicker
                                defaultDate={new Date(2005, 4, 4)}
                                minimumDate={new Date(1800, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText={this.props.Profile.dateEstablished !== null ? this.props.Profile.dateEstablished: "Select Date"}
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setEstablishedDate}
                                disabled={false}
                            />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Location</Text>
                                <Picker selectedValue={this.props.Profile.locationId} onValueChange={(lga) => {this.handleProfileChangeText("locationId",lga)}}
                                    style={styles.picker}>
                                    {this.props.Locations.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            {/* <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Levels of Education Offered</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('name', text)} value={this.props.Profile.name} style={styles.textInput}/>
                            </View> */}

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of School</Text>
                                <Picker selectedValue={this.props.Profile.schoolRecord.schoolTypeId} onValueChange={(lga) => {this.props.addSchoolRecord("schoolTypeId",lga)}}
                                    style={styles.picker}>
                                    {this.props.SchoolTypes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Does School Operate Shift</Text>
                               <Switch onValueChange={(value) => this.props.addSchoolRecord("operatesShiftSystem",value)}
                                    value={this.props.Profile.schoolRecord.operatesShiftSystem} />

                            </View>



                            <View style={styles.buttonViewRight}>
                                <Button block style={styles.button}
                                    onPress={
                                        () => { this.nextPage(), CheckConnectivity() }}>
                                    <Text style={styles.buttonText}>Next</Text>
                                </Button>
                            </View>

                    </Form>
                    </Content>
            </Container>

            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
  Profile: state.schools,
  Lgas:  state.utility.lgas,
  Locations:  state.utility.locations,
  SchoolTypes:  state.utility.schoolTypes,
})

const mapDispatchToProps = (dispatch) => {
  return {
      addSchoolProfile: (field,value) => dispatch(biodataActions.addSchoolProfile(field,value)),
      addSchoolRecord: (field, value) => dispatch(biodataActions.addSchoolRecord(field, value)),
      addSchoolCordinates: (field, value) => dispatch(biodataActions.addSchoolCordinates(field, value)),
      addSchoolEducationLevels: (payload) => dispatch(biodataActions.addSchoolEducationLevels(payload)),
      addSchoolGrants: (payload) => dispatch(biodataActions.addSchoolGrants(payload)),
      addSchoolEnrolmentCertificates: (payload) => dispatch(biodataActions.addSchoolEnrolmentCertificates(payload)),
      addSchoolFacilities: (payload) => dispatch(biodataActions.addSchoolFacilities(payload)),
      addSchoolPowerSources: (payload) => dispatch(biodataActions.addSchoolPowerSources(payload)),
      addSchoolHealthFacilities: (payload) => dispatch(biodataActions.addSchoolHealthFacilities(payload)),
      addSchoolClasses: (payload) => dispatch(biodataActions.addSchoolClasses(payload)),
      addSchoolStreams: (payload) => dispatch(biodataActions.addSchoolStreams(payload)),

      fetchLgasByState: (stateId) => dispatch(biodataActions.fetchStateLgasList(stateId)),
      fetchStudentClassesList: () => dispatch(biodataActions.fetchStudentClassesList()),
      fetchStudentStreamsList: () => dispatch(biodataActions.fetchStudentStreamsList()),
      fetchSchoolList: () => dispatch(biodataActions.fetchSchoolList()),

      fetchLocationsList: () => dispatch(biodataActions.fetchLocationsList()),
      fetchSchoolTypesList: () => dispatch(biodataActions.fetchSchoolTypesList()),


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SchoolProfile)
