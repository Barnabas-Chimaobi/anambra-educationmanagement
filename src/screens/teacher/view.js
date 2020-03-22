import React, { Component } from "react";
import {View,Text,KeyboardAvoidingView, Image,TextInput, Platform, NetInfo, Alert, AsyncStorage} from "react-native";
import { Container, Header, Content, Button,Form, Item, Input, Label,Card, CardItem, Body } from 'native-base';
import { background } from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { styles} from "../../constants/styles";
import { connect } from 'react-redux'
import * as  biodataActions from "../../actions/index";

class TeacherView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            data: {}
        }
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount(){
        this.CheckConnectivity();
    }

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

    lookupNumber = () =>{

        this.props.loadTeacherDataAsync(this.state.number);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.Biodata && nextProps.Biodata.code && nextProps.Biodata.code.toLowerCase() !== this.state.number.toLowerCase()){
            alert("Unable to retrieve data!")
        }else{
            this.props.navigation.navigate("MainView") 
        }
    }
      

    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>

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
                            <Text style={styles.headerText}>Teacher Information</Text>
                        </View>
                        <View style={{margin:'2%'}}>
                            <Text>Teacher Code</Text>
                            <TextInput
                                onChangeText={text => this.setState({number: text})} value={this.state.number}
                                style={{borderColor:'#ffffff', borderWidth: 1,paddingTop: 5, marginTop: 5, backgroundColor:'#fff', color:'#000'}} />
                        </View>

                        <View style={styles.buttonViewRight}>
                            <Button block style={styles.button} onPress={() => {this.lookupNumber();}}>
                                <Text style={styles.buttonText}>Retrieve</Text>
                            </Button>
                        </View>
                    </View>

            </LinearGradient>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    Biodata: state.teachers,
    // States:  state.utility.states,
    // Lgas:  state.utility.lgas,
    // genders:  state.utility.genders
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadTeacherDataAsync: (code) => dispatch(biodataActions.loadTeacherDataAsync(code)),
        // updateBioDataField: (field,value) => dispatch(biodataActions.addTeacherBiodata(field,value)),
        // updateNokDataField: (field, value) => dispatch(biodataActions.addTeacherNokdata(field, value)),
        // fetchStates: () => dispatch(biodataActions.fetchStatesList()),
        // fetchLgas: () => dispatch(biodataActions.fetchLgasList()),
        // fetchGenders: () => dispatch(biodataActions.fetchGendersList()),
        // fetchLgasByState: (stateId) => dispatch(biodataActions.fetchStateLgasList(stateId)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TeacherView)
