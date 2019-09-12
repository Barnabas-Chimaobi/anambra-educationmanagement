
import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView, Picker} from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import Logic from '../../../logic'

class SchoolHeadTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            Sexes: [],
            States: [],
            Lgas: []
        }
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    componentDidMount(){
        // sex
       const sexes = new Logic()
       sexes.Sexes('http://97.74.6.243/anambra/api/Sexes')
       .then((res) => {
           this.setState({Sexes: res.data})
           console.warn('sex',this.state)
       })
       .catch((error) => console.warn(error))

       // states
       const states = new Logic()
       states.States('http://97.74.6.243/anambra/api/States')
       .then((res) => {
           this.setState({States: res.data})
           // console.warn('states',this.state)
       })
       .catch((error) => console.warn(error))

       // lgas
       const lgas = new Logic()
       lgas.Lgas('http://97.74.6.243/anambra/api/Lgas')
       .then((res) => {
           this.setState({Lgas: res.data})
           // console.warn('lgas',this.state)
       })
       .catch((error) => console.warn(error))

     }

    render() {
        return (
            <Container>
                <View style={{backgroundColor:'#E6DC82', padding :10}}>
                        <Text style={styles.headerText}>New School Information</Text>
                    </View>

                <Content style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>

                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Principal's Information</Text>
                    </View>

                    <Form style={{width:'75%',justifyContent:'center', alignSelf:'center'}}>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Full Name</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Name of current school</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Sex</Text>
                            <Picker 
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Male' value='Male' />
                                 <Picker.Item label='Female' value='Female' />
                               </Picker>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Birth</Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Phone Number</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>State of Origin</Text>
                            <Picker selectedValue={this.state.lgas}
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                {this.state.States.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })} 
                            </Picker>
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
                            <Text style={styles.labelText}>Hometown</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Male population</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Email Address</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Residential Address</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Academic Qualification</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Year Posted to School</Text>
                            <TextInput style={styles.textInput}/>
                        </View>


                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Posting History</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Area of Specialisation</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Length of Stay in school</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Number of years in position</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Grade Level</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Rank</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Post Held in School</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Year of First Appointment</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Present Appointment</Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Retirement</Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Number of Subjects Taught</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Number of trainings attended</Text>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("Profile")}}>
                                        <Text style={styles.buttonText}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("Facility2")}}>
                                        <Text style={styles.buttonText}>Submit</Text>
                                </Button>
                            </View>
                        </View>

                    </Form>
                </Content>
            </Container>
        );
    }
}
export default SchoolHeadTeacher;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: '#fff', alignItems: 'center' },
    
    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    inputView: { width: '100%', alignItems: 'stretch' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    },
    selectInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15, 
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7', 
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});