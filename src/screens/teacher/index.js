import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput, Platform, NetInfo, Alert, AsyncStorage} from "react-native";
import { Button} from 'native-base';
import { background } from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { connect} from 'react-redux'
import * as  biodataActions from "../../actions/index";

class TeacherIndex extends Component {

    constructor(props) {
        super(props);
        this.state={
            myName: "Barnabas"
        }
    }
    static navigationOptions = {
        header: null,
    };
   
   
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

      componentDidMount(){
       this.CheckConnectivity();
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
                            <Text style={styles.headerText}>Teacher Information</Text>
                        </View>

                        <View style={styles.buttonView}>
                            <Button large block style={{backgroundColor:'rgba(56, 96, 236, 0.35)'}} onPress={() => { this.props.resetForm();this.props.navigation.navigate("MainView") }}>
                                <Text style={styles.buttonText}>Add New</Text>
                            </Button>
                        </View>

                        <View style={styles.buttonView}>
                            <Button large block style={{backgroundColor:'rgba(236, 56, 196, 0.35)', padding: 10,}} onPress={() => { this.props.navigation.navigate("TeacherView") }}>
                                <Text style={styles.buttonText}>View Data</Text>
                            </Button>
                        </View>

                    </View>


            </LinearGradient>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => {
return {
  resetForm : () => dispatch(biodataActions.resetForm()),

}
}

export default connect(mapStateToProps,mapDispatchToProps)(TeacherIndex)

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
    mainText:{padding:'1%', fontSize:19, textAlign: 'center',
              fontWeight:'bold', textTransform:'uppercase',alignSelf:'center'},
    descriptionText:{padding:'0.5%',fontSize:15, textAlign: 'center', lineHeight:29,
                     textTransform:'capitalize', alignSelf:'center'},
    buttonView:{width:'100%', alignSelf:'center', marginBottom:'3%', padding: '1%'},
    button:{backgroundColor:'#fff', padding: '50'},
    buttonText:{fontSize:20, color:'#000', alignSelf:'center'},
    inputView: {
        width: '100%',
        alignItems: 'stretch'
    },
    headerText:{marginBottom:'5%',fontSize:25, lineHeight:29, fontWeight:'bold',textTransform:'capitalize', textAlign: 'center', alignSelf:'center'},

    buttonViewOne:{margin: '2%', width:'30%'},
    buttonOne:{backgroundColor:'#0884d2', padding: 9, alignItems: 'center', textAlign: 'center'},
    buttonTextOne:{fontSize:17, color:'#fff', paddingLeft: 20, alignSelf:'center', textAlign: 'center'}



});