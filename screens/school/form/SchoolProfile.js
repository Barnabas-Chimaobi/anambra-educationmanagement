import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView, Picker} from "react-native";
import { Container, Content, Form, Button} from 'native-base';
import Logic from '../../../logic'

class SchoolProfile extends Component {

    constructor(props) {
        super(props);

        this.state ={
            Lgas: [],
            SchoolName: '',
            CoordinatesEle: '',
            ContactAddress: '',
            Village: '',
            Ward: '',
            Lga: '',
            Email: '',
            SchoolPhone: '',
            YearEst:'',
            LocationUR: '',
            LevelsOfEducation: '',
            TypeOfSchool: '',
            SchoolOperate: ''
        }
    }

    componentDidMount(){
        // lgas
        const lgas = new Logic()
        lgas.Lgas('http://97.74.6.243/anambra/api/Lgas')
        .then((res) => {
            this.setState({Lgas: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))

      }

      SchoolProfile = () => {
        const schoolprofile = new Logic()
        schoolprofile.Lgas('http://97.74.6.243/anambra/api/Lgas')
        .then((res) => {
            this.setState({Lgas: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))
      }
    
    

    render() {
        return (

            <Container>
                 <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                    <Content>
                    <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                        <Text style={styles.subText}>School Profile</Text>
                    </View>

                        
                    <Form onSubmit={this.SchoolProfile()} style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Name</Text>
                                <TextInput onChangeText={text => this.handleChangeText('SchoolName', text)} value={this.state.SchoolName} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Coordinates', text)} value={this.state.CoordinatesEle} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Contact Address</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Contact', text)} value={this.state.ContactAddress} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Village/Town</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Village', text)} value={this.state.Village} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Ward</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Ward', text)} value={this.state.Ward} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <Picker selectedValue={this.state.lgas}
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                {this.state.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })} 
                            </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email Address</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Email', text)} value={this.state.Email} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Phone Number</Text>
                                <TextInput onChangeText={text => this.handleChangeText('SchoolPhone', text)} value={this.state.SchoolPhone} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year of Estatblishment</Text>
                                <TextInput onChangeText={text => this.handleChangeText('YearEst', text)} value={this.state.YearEst} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Location</Text>
                                <Picker selectedValue={this.state.lgas}
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Urban' value='Urban' />
                                 <Picker.Item label='Rural' value='Rural' />
                            </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Levels of Education Offered</Text>
                                <TextInput style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of School</Text>
                                <Picker selectedValue={this.state.lgas}
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Regular' value='Regular' />
                                 <Picker.Item label='Islamiya Integrated' value='Islamiya Integrated' />
                               </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Does School Operate Shift</Text>
                                <Picker selectedValue={this.state.lgas}
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:10}}>
                               <Button block style={styles.button} small primary  onPress={()=>{this.props.navigation.navigate("Facility")}}>
                                    <Text style={styles.buttonText}>Next</Text>
                               </Button>
                            </View>

                    
                    </Form>
                    </Content>
            </Container>
        );
    }
}
export default SchoolProfile;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    button: { backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '25%',flex: 1,
    flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },
    buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

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