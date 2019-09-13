import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions,Alert } from "react-native";
import { Container, Content, Form, Button,DatePicker,Switch} from 'native-base';
import { CheckBox } from 'react-native-elements';
import Logic from '../../../logic'


class StudentBiodata extends Component {

    constructor(props) {
        super(props);

        state = Dimensions.get("window");

        this.state = {

            age: '',
            selectedValue: '',
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            input: '',
            Sexes: [],
            States: [],
            Lgas: [],
            First_Name: '',
            Last_Name: '',
            Other_Name: '',
            Sex: '',
            Dob: '',
            StateOrigin: '',
            Lga: '',
            Hometown: '',
            Residential: '',
            PermanentAddress: '',
            liveIn: false,
            NextofKin: '',
            NextofKinPhone: '',
            NextofKinAddress: '',
            Email: '',
            Phone: ''
        }
        this.setDate = this.setDate.bind(this);

    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };

      updateGender = (Sex) => {
        this.setState({ Sex: Sex })
    }


    updateStateOrigin = (StateOrigin) => {
        //Call Method to load LGA for the selected state
        this.getLgaForState(StateOrigin);
    }

    getLgaForState = (stateId) => {
        const lgas = new Logic()
        lgas.Lgas(`http://97.74.6.243/anambra/state/${stateId}`)

            .then((res) => {
                this.setState({ Lgas: res.data,StateOrigin: stateId })
            })
            .catch((error) => console.warn(error))

    }

    updateLga = (Lga) => {
        this.setState({ Lga: Lga })
    }


    toggleliveIn = (value) => {
        this.setState({ liveIn: value })
    }


    setDate(newDate) {
        this.setState({ Dob: newDate });
    }

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
        // Important to stop updating state after unmount
        Dimensions.removeEventListener("change", this.handler);
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
        lgas.Lgas('http://97.74.6.243/anambra/state/1')
        .then((res) => {
            this.setState({Lgas: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))

      }


    handleChangeText = (inputName, text) => {
        this.setState({ [inputName]: text });
    }

    checkInputFields = () => {

        if (!this.state.First_Name && !this.state.Last_Name){
            alert("First and Last Names are compulsory!");
            return;
        }

        if (!this.state.Dob){
            alert("Date of Birth is compulsory!");
            return;
        }

        if (!this.state.StateOrigin && !this.state.Lga){
            alert("State of Origin & local government are compulsory!");
            return;
        }

        if (!this.state.Sex){
            alert("sex is compulsory!");
            return;
        }

        if (!this.state.Hometown){
            alert("Hometown is compulsory!");
            return;
        }

        if (!this.state.Residential){
            alert("Residential Address is compulsory!");
            return;
        }

        if (!this.state.Phone){
            alert("Phone number is compulsory!");
            return;
        }

        if (!this.state.NextofKin){
            alert("Next of Kin is compulsory!");
            return;
        }

        if (!this.state.NextofKinPhone){
            alert("Next of Kin Phone Number is compulsory!");
            return;
        }


        if (!this.state.NextofKinAddress){
            alert("Next of Kin Adress is compulsory!");
            return;
        }


        if (!this.state.Email){
            this.setState({Email: "-"})
            return;
        }
        else
        {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(text) === false)
            {
                alert("Email is Not valid!");
                return;
            }
        }

        const bioData = {
            name: `${this.state.First_Name} ${this.state.Other_Name} ${this.state.Last_Name}`,
            dateOfBirth: this.state.Dob,
            sex: this.state.Sex,
            StateOrigin: this.state.StateOrigin,
            Lga: this.state.Lga,
            Hometown: this.state.Hometown,
            Residential: this.state.Residential,
            liveIn: this.state.liveIn,
            phone: this.state.Phone,
            NextofKin: this.state.NextofKin,
            NextofKinPhone: this.state.NextofKinPhone,
            NextofKinAddress: this.state.NextofKinAddress,
            Email: this.state.Email
        };

        this.props.navigation.navigate("NextOfKin", {bioData});
    }


    render() {
        return (

        <Container>

            <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                <Text style={styles.headerText}>New Student Information</Text>
            </View>

            <Content>
                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Personal Details</Text>
                </View>

                <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>First Name</Text>
                            <Text style={styles.Asterix}>*</Text>
                            <TextInput  onChangeText={text => this.handleChangeText('First_Name', text)} value={this.state.First_Name} style={styles.textInput}/>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Last Name</Text>
                            <Text style={styles.Asterix}>*</Text>
                            <TextInput onChangeText={text => this.handleChangeText('Last_Name', text)} value={this.state.Last_Name} style={styles.textInput} />
                     </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Other Name</Text>
                            <TextInput onChangeText={text => this.handleChangeText('Other_Name', text)} value={this.state.Other_Name} style={styles.textInput} />
                     </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Sex</Text>
                            <Text style={styles.Asterix}>*</Text>
                            <Picker
                                   selectedValue={this.state.Sex} onValueChange={this.updateGender}
                                   style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Sexes.map((v, key)=>{
                                            return <Picker.Item label={v.gender} key={key} value={v.id} />
                                        })}
                                </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of Birth</Text>
                            <Text style={styles.Asterix}>*</Text>

                            <DatePicker
                                defaultDate={new Date(2005, 4, 4)}
                                minimumDate={new Date(1990, 1, 1)}
                                maximumDate={new Date()}
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
                                    <Text style={styles.labelText}>State of Origin</Text>
                            <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                     selectedValue={this.state.StateOrigin} onValueChange={this.updateStateOrigin}
                                     style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                {this.state.States.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                            </Picker>
                                </View>
                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>L.G.A</Text>
                            <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                    selectedValue={this.state.Lga} onValueChange={this.updateLga}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Hometown</Text>
                            <Text style={styles.Asterix}>*</Text>
                                    <TextInput onChangeText={text => this.handleChangeText('Hometown', text)} value={this.state.Hometown} style={styles.textInput} />
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Residential Address</Text>
                                    <Text style={styles.Asterix}>*</Text>
                                    <TextInput onChangeText={text => this.handleChangeText('Residential', text)} value={this.state.Residential} style={styles.textInput} />
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Permanent Address</Text>
                                    <Text style={styles.Asterix}>*</Text>
                                    <TextInput onChangeText={text => this.handleChangeText('PermanentAddress', text)} value={this.state.PermanentAddress} style={styles.textInput} />
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Do you live within the school ?</Text>
                                    <Switch onValueChange={this.toggleliveIn}
                                value={this.state.liveIn} />

                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Phone Number</Text>
                                    <Text style={styles.Asterix}>*</Text>
                                    <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('Phone', text)} value={this.state.Phone} style={styles.textInput} />
                       </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Next of Kin</Text>
                            <Text style={styles.Asterix}>*</Text>
                            <TextInput onChangeText={text => this.handleChangeText('NextofKin', text)} value={this.state.NextofKin} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Next of Kin Address</Text>
                            <Text style={styles.Asterix}>*</Text>
                            <TextInput onChangeText={text => this.handleChangeText('NextofKinAddress', text)} value={this.state.NextofKinAddress} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                            <Text style={styles.Asterix}>*</Text>
                            <TextInput onChangeText={text => this.handleChangeText('NextofKinPhone', text)} value={this.state.NextofKinPhone} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Email</Text>
                            <TextInput onChangeText={text => this.handleChangeText('Email', text)} value={this.state.Email} style={styles.textInput} />
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={styles.button}
                                onPress={
                                () => { this.checkInputFields()}}>
                                <Text style={styles.buttonText}>Next</Text>
                            </Button>
                        </View>

                    </Form>
                </Content>
            </Container>



        );
    }
}
export default StudentBiodata;

const styles = StyleSheet.create({
    // container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
    // buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    // button: { backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '25%',flex: 1,
    //     flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },

    // buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    // button:{backgroundColor:'#098BD3'},
    // buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},

    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold'
    },
    // buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});