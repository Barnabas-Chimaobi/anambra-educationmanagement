// import React, { Component } from "react";
// import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker, TouchableOpacity } from "react-native";
// // import { Container, Content, Form, Button, DatePicker, Switch } from 'native-base';
// // import { styles } from "../../constants/styles";
// // import { connect } from 'react-redux'
// // import * as  biodataActions from "../../actions/index";
// // import * as Permissions from 'expo-permissions';
// // import { Camera } from 'expo-camera';
// // import * as FileSystem from 'expo-file-system';
// // import {documentDirectory} from "expo-file-system"


//  class Trial extends Component {


//             base64URL = FileSystem.readAsStringAsync(photo.uri, newer).then(data => {
//             const base64 = 'data:image/jpg;base64' + data;
//             return base64; // are you sure you want to resolve the data and not the base64 string? 
//              }).catch(err => {
//             console.log("​getFile -> err", err);
//              return err ;
//              });
            
//              let fileType = photo.uri.substring(photo.uri.lastIndexOf(".") + 1);

//              let formData = new FormData();
             
//              formData.append("photo", {
//                photo,
//                name: `photo.${fileType}`,
//                type: `image/${fileType}`
//              });
             

//   render(){
//     return(
//       <View>
//         <Text>Messsed up expo</Text>
//       </View>
//     )
//   }
// }

// export default Trial


import React, { Component } from "react";
import {View,Text,StyleSheet, TouchableHighlight,TextInput,Modal, Picker, KeyboardAvoidingView, Platform, NetInfo, Alert} from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import Logic from '../../../logic';
import MultiSelect from "../../../Components/MultiSelect";
import { NavigationActions } from 'react-navigation';
import { styles} from "../../constants/styles";
import { connect } from 'react-redux'
import * as  biodataActions from "../../actions/index";


class TeacherOtherData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            institutionModalVisible : false,
            SubjectAreaModalVisible: false,
            streamModalVisible: false,
            postingModalVisible: false,
            SubjectsTaught:[],
            StreamsTaught:[],
            postingHistories:[],
            institutionHistories:[]
        }
    }

    static navigationOptions =  {
        // title: 'New Teacher',
        header: null
    }

    componentDidMount() {
        this.props.fetchSchoolList();
        this.props.fetchGradeLevelList();
        this.props.fetchSubjectAreaList();
        this.props.fetchRankList();
        this.props.fetchStaffTypesList();
        this.props.fetchStaffClassesList();
        this.props.fetchSubjectsList();
        this.props.fetchStudentStreamsList();
        this.props.fetchQualificationList();

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
    updateQaulification = (Qualification) => {

       this.props.addTeacherQualificationdata({"qualificationId":Qualification});
    }

    updateSchool = (School) => {
        this.props.addTeacherRecorddata("schoolId",School);
    }

    updateGradeLevel = (GradeLevel) => {
        this.props.addTeacherRecorddata("gradeLevelId",GradeLevel);
    }

    updateStaffType = (staffType) => {
        this.props.addTeacherRecorddata("staffTypeId",staffType);
    }

    updateStaffClass = (staffClass) => {
        this.props.addTeacherRecorddata("StaffClassId",staffClass);
    }

    updateRank = (Rank) => {
        this.props.addTeacherRecorddata("rankId",Rank);
    }

    updateSubjectArea = (SubjectArea) => {
        this.props.addTeacherSpecialisationdata({"subjectAreaId":SubjectArea});
    }

    goBack = () =>{

        this.props.navigation.navigate("TeacherBiodata");

    }

    submitForm = () => {

      
        const StaffBiodata = {
            person: {
                FirstName: this.state.firstName,
                Surname: this.state.lastName,
                OtherName: this.state.OtherName,
                dateOfBirth: this.state.dateOfBirth,
                'stateId': 1, 
                "lgaId": 1,
                "sexId": 1,
                "alergy": "N/A",
                "hometown": this.state.hometown,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                nextOfKin: {
                    name: this.state.nextOfKinName,
                    phone: this.state.nextOfKinPhone,
                    "email": "",
                    address: this.state.nextOfKinAddress
                }
            },
            "teacherRecord": {
                "AcademicSessionId": 1,
                "schoolId": 1,
                "onPremises": true,
                "teacherQualifications": [
                ],
                "teacherSubjects": [
                ],
                "teacherStreams": [
                ],
                "teacherSpecialization": [
                ],
                "teacherInstitutions": [
                ],
                "specialization": "Teaching",
                "firstAppointment": "",
                "currentAppointment": "",
                "retirement": "",
                "yearsOfExperience": 0,
                "trainingsAttended": 0,
                "streamsTaught": 1,
                "gradeLevelId": 1,
                "rankId": 1,
                "postHeld": "Teacher",
                "datePosted": "",
                "postingHistories": [],
                "staffTypeId": 1,
                "StaffClassId": 1
            }
        };
  


        // const {Biodata} = this.props;

        // if(!Biodata.teacherRecord.teacherSubjects[0]){
        //     alert("Add the subject taught by teacher!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.postingHistories[0]){
        //     alert("Add the schools taught by teacher!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.teacherStreams[0]){
        //     alert("Add the streams taught by teacher!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.teacherInstitutions[0]){
        //     alert("Add the isntituions worked by teacher!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.firstAppointment){
        //     alert("Select First Appointment Date!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.currentAppointment){
        //     alert("Select Current Appointment Date!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.retirement){
        //     alert("Select Retirement Date!");
        //     return;
        // }

        // if(!Biodata.teacherRecord.datePosted){
        //     alert("Select Date posted to current school!");
        //     return;
        // }



        // if(this.props.Biodata.id){
        //     alert("Record Updated!");
        // }else{
        //     this.props.saveTeacherDataAsync(this.props.Biodata)
        //     this.props.navigation.navigate("TeacherBiodata");
        //     alert("Record Saved!");
        // }

    }

    setSubjectAreaModalVisible(visible) {
        this.setState({SubjectAreaModalVisible: visible});
    }

    setStreamModalVisible(visible) {
        this.setState({streamModalVisible: visible});
    }

    setInstitutionModalVisible(visible) {
        this.setState({institutionModalVisible: visible});
    }

    setPostingModalVisible(visible) {
        this.setState({postingModalVisible: visible});
    }

    handleChangeOtherText = (inputName, text) => {
        this.setState({ [inputName]: text });
    }

    setInstitutionDate = (newDate) => {
        // this.props.addTeacherRecorddata("InstitutionDate",newDate.toISOString());
        this.setState({ InstitutionDate: newDate.toISOString() });
    }

    addInstitution = () => {

        let institutionHistories = this.state.institutionHistories;
        if (this.state.InstitutionName && this.state.InstitutionDate){

            data = {institution:this.state.InstitutionName, date:this.state.InstitutionDate.substring(0,10)};
            this.props.addTeacherInstitutiondata(data);
            institutionHistories.push(data);
            this.setState({institutionHistories:institutionHistories})
        }

    }

    removeInstitution = (index) => {
        // const {Biodata} = this.state;
        // Biodata.teacherRecord.teacherInstitutions.splice(index,1);
        // this.props.addTeacherInstitutiondata({});
    }

    addPostingHistory = () => {

        let postingHistories = this.state.postingHistories;
        if (this.state.PostingName && this.state.PostingDate){

            data = {institution:this.state.PostingName, date: this.state.PostingDate.substring(0,10)};
            postingHistories.push(data);
            this.setState({postingHistories:postingHistories})
            this.props.addTeacherPostingData(data);

        }

    }

    removePostingHistory = (index) => {

        // const {Biodata} = this.state;
        // Biodata.teacherRecord.postingHistories.splice(index,1);
        // this.setState({Biodata:Biodata});

    }

    setAppoitmentDate = (newDate) => {
       this.props.addTeacherRecorddata("firstAppointment",newDate.toISOString());
    }




    setPostingDate = (newDate) => {
        // this.props.addTeacherRecorddata("PostingDate",newDate.toISOString());
        this.setState({ PostingDate: newDate.toISOString() });
    }

    setRetirementDate = (newDate) => {
        this.props.addTeacherRecorddata("retirement",newDate.toISOString());
    }

    setPresentAppointmentDate = (newDate) => {
        this.props.addTeacherRecorddata("currentAppointment",newDate.toISOString());
    }

    setPostedDate = (newDate) => {
        this.props.addTeacherRecorddata("datePosted",newDate.toISOString());
    }

    handleChangeText = (inputName, text) => {
        this.props.addTeacherRecorddata(inputName,text);
    }

    handleIntegerValueChangeText = (inputName, value) => {
        this.props.addTeacherRecorddata(inputName,(value));
    }


    onSelectedItemsChange = (subjectId,subjectName) => {

        let SubjectsTaught = this.state.SubjectsTaught;
        SubjectsTaught.push({id: subjectId, name: subjectName});
        this.setState({SubjectsTaught:SubjectsTaught})
        this.props.addTeacherSubjectdata({"subjectId": subjectId});
    };

    onSelectedStreamItemsChange = (streamId,streamName) => {

        let StreamsTaught = this.state.StreamsTaught;
        StreamsTaught.push({id: streamId, name: streamName});
        this.setState({StreamsTaught:StreamsTaught})
        this.props.addTeacherStreamdata({"streamId": streamId});

    };


    render() {

        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
                <Container>

                        <View style={{backgroundColor:'#E6DC82', padding :10}}>
                            <Text style={styles.headerText}>New Teacher Information</Text>
                        </View>

                        <Content >


                            <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                                <Text style={styles.subText}>Academic Details</Text>
                            </View>

                            <Form style={{width:'75%',justifyContent:'center', alignSelf:'center'}}>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Highest Qualification</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker  selectedValue={(this.props.Biodata.teacherRecord.teacherQualifications.length > 0) ? this.props.Biodata.teacherRecord.teacherQualifications[0].qualificationId: null}
                                         onValueChange={(QualificationId) => {this.updateQaulification( QualificationId)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.qualifications.map( (v,key)=>{
                                                return <Picker.Item label={v.name} key={key}  value={v.id} />
                                            })}
                                    </Picker>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Institution Attended</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setInstitutionModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: '#E6DC82'}}> Add Institutions</Text>
                                    </TouchableHighlight>
                                </View>
                                {
                                    this.state.institutionHistories.length > 0 ?
                                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                        <Text style={styles.labelTextCenter}>
                                            {
                                                this.state.institutionHistories.map((level,key) => {
                                                    return ( <Text key={key}
                                                        style={styles.displayItems}
                                                        >{level.institution} - {level.date}, </Text> )
                                                })

                                            }
                                        </Text>
                                    </View>
                                    : null
                                }


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Subject Area Specialisation</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                     selectedValue={(this.props.Biodata.teacherRecord.teacherSpecialization.length > 0) ? this.props.Biodata.teacherRecord.teacherSpecialization[0].subjectAreaId: null}

                                        onValueChange={(SubjectArea) => {this.updateSubjectArea( SubjectArea)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.subjectAreas.map( (v,key)=>{
                                                return <Picker.Item label={v.name} key={key}  value={v.id} />
                                            })}
                                    </Picker>
                                </View>
                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Date of First Appointment</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <DatePicker
                                    defaultDate={new Date(1960, 4, 4)}
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
                                    onDateChange={this.setAppoitmentDate}
                                    disabled={false}
                                />
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Date of Present Appointment</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <DatePicker
                                    defaultDate={new Date(1960, 4, 4)}
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
                                    onDateChange={this.setPresentAppointmentDate}
                                    disabled={false}
                                />
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Expected Retirement Date</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2100, 1, 1)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setRetirementDate}
                                    disabled={false}
                                />
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Years of Experience</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <TextInput  keyboardType="numeric" onChangeText={text => this.handleIntegerValueChangeText('yearsOfExperience',text)} value={`${this.props.Biodata.teacherRecord.yearsOfExperience}`} style={styles.textInput}/>
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>School</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker

                                        selectedValue={this.props.Biodata.teacherRecord.schoolId} onValueChange={(schoolId) => {this.updateSchool(schoolId)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.schools.map( (v,key)=>{
                                                return <Picker.Item label={v.name} key={key}  value={v.id} />
                                            })}
                                    </Picker>
                                </View>

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Grade Level</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                        selectedValue={this.props.Biodata.teacherRecord.gradeLevelId} onValueChange={(level) => {this.updateGradeLevel(level)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.gradeLevels.map( (v,key) => {
                                                return <Picker.Item label={v.name} key={key}  value={v.id} />
                                            })}
                                    </Picker>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Rank</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                        selectedValue={this.props.Biodata.teacherRecord.rankId} onValueChange={(Rank) => {this.updateRank(Rank)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.ranks.map( (v, key)=>{
                                                return <Picker.Item label={v.name} key={key} value={v.id} />
                                            })}
                                    </Picker>
                                </View>



                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Post Held in School</Text>
                                    <TextInput onChangeText={text => this.handleChangeText('postHeld',text)} value={this.props.Biodata.teacherRecord.postHeld} style={styles.textInput}/>
                                </View>
                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Year Posted to School</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <DatePicker
                                    defaultDate={new Date(1960, 4, 4)}
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
                                    onDateChange={this.setPostedDate}
                                    disabled={false}
                                    />
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Posting History with date</Text>
                                    <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPostingModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: '#E6DC82'}}>Add Posting History</Text>
                                    </TouchableHighlight>
                                </View>
                                {
                            this.state.postingHistories.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.postingHistories.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.institution} - {level.date}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Type of Staff</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                        selectedValue={this.props.Biodata.teacherRecord.staffTypeId} onValueChange={(TypeOfStaff) => {this.updateStaffType( TypeOfStaff)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.staffTypes.map( (v, key)=>{
                                                return <Picker.Item label={v.name} key={key} value={v.id} />
                                            })}
                                    </Picker>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Class of Staff</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <Picker
                                        selectedValue={this.props.Biodata.teacherRecord.StaffClassId} onValueChange={(ClassOfStaff) => {this.updateStaffClass(ClassOfStaff)}}
                                        style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                            {this.props.staffClasses.map( (v, key)=>{
                                                return <Picker.Item label={v.name} key={key} value={v.id} />
                                            })}
                                    </Picker>
                                </View>



                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Subject taught</Text>
                                    <Text style={styles.Asterix}>*</Text>
                                    <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setSubjectAreaModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Subjects</Text>
                                    </TouchableHighlight>
                                </View>
                                {
                            this.state.SubjectsTaught.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.SubjectsTaught.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.subText2}>{this.props.SubjectNames}</Text>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Streams taught</Text>
                                    <Text style={styles.Asterix}>*</Text>
                                    <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Streams</Text>
                                    </TouchableHighlight>
                                </View>
                                {
                            this.state.StreamsTaught.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.StreamsTaught.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }

                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.subText2}>{this.props.StreamNames}</Text>
                                </View>


                                <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Number of trainings attended</Text>
                                <Text style={styles.Asterix}>*</Text>
                                    <TextInput keyboardType="numeric" onChangeText={text => this.handleIntegerValueChangeText('trainingsAttended',text)} value={`${this.props.Biodata.teacherRecord.trainingsAttended}`}  style={styles.textInput}/>
                                </View>


                                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                    <View style={styles.buttonView}>
                                        <Button block style={styles.button2} onPress={()=>{this.goBack()}}>
                                                <Text style={styles.button2Text}>Previous</Text>
                                        </Button>
                                    </View>

                                    <View style={styles.buttonView}>
                                        <Button block style={styles.button} onPress={()=>{ this.submitForm(), CheckConnectivity() }}>
                                                <Text style={styles.buttonText}>Save</Text>
                                        </Button>
                                    </View>
                                </View>

                            </Form>

                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.SubjectAreaModalVisible}
                                onRequestClose={() => {
                                    this.setSubjectAreaModalVisible(false);
                                }}>
                                <View>

                                <MultiSelect data={this.props.subjectAreas} onSelectedItem={this.onSelectedItemsChange}  />

                                    <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setSubjectAreaModalVisible(!this.state.SubjectAreaModalVisible);}}>
                                            <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                                    </TouchableHighlight>
                                </View>
                            </Modal>

                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.streamModalVisible}
                                onRequestClose={() => {
                                    this.setStreamModalVisible(false);
                                }}>
                                <View style={{maxWidth: 600}}>

                                <MultiSelect data={this.props.streams} onSelectedItem={this.onSelectedStreamItemsChange}  />

                                    <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(!this.state.streamModalVisible);}}>
                                            <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                                    </TouchableHighlight>
                                </View>
                            </Modal>

                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.institutionModalVisible}
                                onRequestClose={() => {
                                    this.setInstitutionModalVisible(false);
                                }}>
                                <View>
                                    <View>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40, }}>Add Institution</Text>

                                        <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
                                            <Text style={styles.labelText}>Institution</Text>
                                            <Text style={styles.Asterix}>*</Text>
                                            <TextInput onChangeText={text => this.handleChangeOtherText('InstitutionName',text)}
                                                value={this.props.InstitutionName}  style={styles.textInput}/>
                                        </View>

                                        <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
                                            <Text style={styles.labelText}>Date</Text>
                                            <Text style={styles.Asterix}>*</Text>
                                            <DatePicker
                                                    defaultDate={new Date(2018, 4, 4)}
                                                    minimumDate={new Date(1900, 1, 1)}
                                                    maximumDate={new Date()}
                                                    locale={"en"}
                                                    timeZoneOffsetInMinutes={undefined}
                                                    modalTransparent={false}
                                                    animationType={"fade"}
                                                    androidMode={"default"}
                                                    placeHolderText="Select date"
                                                    textStyle={{ color: "green" }}
                                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                    onDateChange={this.setInstitutionDate}
                                                    disabled={false}
                                                />
                                        </View>

                                        <View style={styles.buttonViewRight}>
                                            <Button block style={styles.button} onPress={()=>{ this.addInstitution() }}>
                                                    <Text style={styles.buttonText}>Add</Text>
                                            </Button>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>All Institutions</Text>
                                        {
                                            this.props.Biodata.teacherRecord.teacherInstitutions.map((v,key)=>{
                                                return (
                                                    <View key={key}>
                                                        <View style={{backgroundColor: 'rgba(100, 100, 100, 0.34)', alignSelf: 'center', padding: 20, minWidth: 600, flexDirection: 'row'}} >
                                                            <Text style={styles.labelModalText}>{v.institution} - {v.date}</Text>

                                                            <Button block style={styles.buttonModal1} onPress={()=>{ this.removeInstitution(key) }}>
                                                                <Text style={styles.buttonModalText}>Remove</Text>
                                                            </Button>

                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>

                                <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setInstitutionModalVisible(!this.state.institutionModalVisible);}}>
                                            <Text style={{alignSelf:'center', fontSize: 15, color: '#fff', fontWeight: 'bold',}}>Save Records</Text>
                                    </TouchableHighlight>
                                </View>
                            </Modal>


                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.postingModalVisible}
                                onRequestClose={() => {
                                    this.setPostingModalVisible(false);
                                }}>
                                <View>
                                    <View>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40, }}>Add Posting History</Text>
                                        <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
                                            <Text style={styles.labelText}>Institution</Text>
                                            <Text style={styles.Asterix}>*</Text>
                                            <TextInput onChangeText={text => this.handleChangeOtherText('PostingName',text)}
                                                value={this.props.PostingName}  style={styles.textInput}/>
                                        </View>

                                        <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
                                            <Text style={styles.labelText}>Date</Text>
                                            <Text style={styles.Asterix}>*</Text>
                                            <DatePicker
                                                defaultDate={new Date(2018, 4, 4)}
                                                minimumDate={new Date(1900, 1, 1)}
                                                maximumDate={new Date()}
                                                locale={"en"}
                                                timeZoneOffsetInMinutes={undefined}
                                                modalTransparent={false}
                                                animationType={"fade"}
                                                androidMode={"default"}
                                                placeHolderText="Select date"
                                                textStyle={{ color: "green" }}
                                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                onDateChange={this.setPostingDate}
                                                disabled={false}
                                            />
                                        </View>

                                        <View style={styles.buttonViewRight}>
                                            <Button block style={styles.button} onPress={()=>{ this.addPostingHistory() }}>
                                                    <Text style={styles.buttonText}>Add</Text>
                                            </Button>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>All Posting</Text>
                                        {
                                            this.props.Biodata.teacherRecord.postingHistories.map((v,key)=>{
                                                return (
                                                    <View style={{backgroundColor: 'rgba(100, 100, 100, 0.34)', alignSelf: 'center', padding: 20, minWidth: 600, flexDirection: 'row'}} key={key}>

                                                        <Text style={styles.labelModalText}>{v.institution} - {v.date}</Text>
                                                        <Button block style={styles.buttonModal1} onPress={()=>{ this.removePostingHistory(key) }}>
                                                            <Text style={styles.buttonModalText}>Remove</Text>
                                                        </Button>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>

                                <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPostingModalVisible(!this.state.postingModalVisible);}}>
                                            <Text style={{alignSelf:'center', fontSize: 15, color: '#fff', fontWeight: 'bold',}}>Save Records</Text>
                                    </TouchableHighlight>
                                </View>
                            </Modal>

                        </Content>
                </Container>

            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    Biodata: state.teachers,
    schools:  state.utility.schools,
    streams:  state.utility.streams,
    subjects:  state.utility.subjects,
    gradeLevels:  state.utility.gradeLevels,
    subjectAreas:  state.utility.subjectAreas,
    qualifications:  state.utility.qualifications,
    ranks:  state.utility.ranks,
    staffTypes:  state.utility.staffTypes,
    staffClasses:  state.utility.staffClasses,
})

const mapDispatchToProps = (dispatch) => {
    return {

        addTeacherBiodata: (field,value) => dispatch(biodataActions.addTeacherBiodata(field,value)),
        addTeacherNokdata: (field, value) => dispatch(biodataActions.addTeacherNokdata(field, value)),
        addTeacherRecorddata: (field, value) => dispatch(biodataActions.addTeacherRecorddata(field, value)),
        addTeacherQualificationdata: (payload) => dispatch(biodataActions.addTeacherQualificationdata(payload)),
        addTeacherSubjectdata: (payload) => dispatch(biodataActions.addTeacherSubjectdata(payload)),
        addTeacherStreamdata: (payload) => dispatch(biodataActions.addTeacherStreamdata(payload)),
        addTeacherSpecialisationdata: (payload) => dispatch(biodataActions.addTeacherSpecialisationdata(payload)),
        addTeacherInstitutiondata: (payload) => dispatch(biodataActions.addTeacherInstitutiondata(payload)),
        addTeacherPostingData: (payload) => dispatch(biodataActions.addTeacherPostingData(payload)),
        saveTeacherDataAsync: (data) => dispatch(biodataActions.saveTeacherDataAsync(data)),


        fetchGradeLevelList: () => dispatch(biodataActions.fetchGradeLevelList()),
        fetchStudentStreamsList: () => dispatch(biodataActions.fetchStudentStreamsList()),
        fetchSubjectAreaList: () => dispatch(biodataActions.fetchSubjectAreaList()),
        fetchRankList: () => dispatch(biodataActions.fetchRankList()),
        fetchStaffTypesList: () => dispatch(biodataActions.fetchStaffTypesList()),
        fetchStaffClassesList: () => dispatch(biodataActions.fetchStaffClassesList()),
        fetchSubjectsList: () => dispatch(biodataActions.fetchSubjectsList()),
        fetchSchoolList: () => dispatch(biodataActions.fetchSchoolList()),
        fetchQualificationList: () => dispatch(biodataActions.fetchQualificationList()),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(TeacherOtherData);







// import React, { Component } from "react";
// import {View,Text,StyleSheet, TouchableHighlight,TextInput,Modal, Picker, KeyboardAvoidingView, Platform, NetInfo, Alert} from "react-native";
// import { Container, Content, Form, Button, DatePicker } from 'native-base';
// import Logic from '../../../logic';
// import MultiSelect from "../../../Components/MultiSelect";
// import { NavigationActions } from 'react-navigation';
// import { styles} from "../../constants/styles";
// import { connect } from 'react-redux'
// import * as  biodataActions from "../../actions/index";


// class TeacherOtherData extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             institutionModalVisible : false,
//             SubjectAreaModalVisible: false,
//             streamModalVisible: false,
//             postingModalVisible: false,
//             SubjectsTaught:[],
//             StreamsTaught:[],
//             postingHistories:[],
//             institutionHistories:[]
//         }
//     }

//     static navigationOptions =  {
//         // title: 'New Teacher',
//         header: null
//     }

//     componentDidMount() {
//         this.props.fetchSchoolList();
//         this.props.fetchGradeLevelList();
//         this.props.fetchSubjectAreaList();
//         this.props.fetchRankList();
//         this.props.fetchStaffTypesList();
//         this.props.fetchStaffClassesList();
//         this.props.fetchSubjectsList();
//         this.props.fetchStudentStreamsList();
//         this.props.fetchQualificationList();

//             CheckConnectivity = () => {
//                 // For Android devices
//                 if (Platform.OS === "android") {
//                   NetInfo.isConnected.fetch().then(isConnected => {
//                     if (isConnected) {;
//                     } else {
//                       Alert.alert("No internet connection");
//                     }
//                   });
//                 } else {
//                 //   // For iOS devices
//                 //   NetInfo.isConnected.addEventListener(
//                 //     "connectionChange",
//                 //     this.handleFirstConnectivityChange
//                 //   );
//                 }
//               };
        
//     }
//     updateQaulification = (Qualification) => {

//        this.props.addTeacherQualificationdata({"qualificationId":Qualification});
//     }

//     updateSchool = (School) => {
//         this.props.addTeacherRecorddata("schoolId",School);
//     }

//     updateGradeLevel = (GradeLevel) => {
//         this.props.addTeacherRecorddata("gradeLevelId",GradeLevel);
//     }

//     updateStaffType = (staffType) => {
//         this.props.addTeacherRecorddata("staffTypeId",staffType);
//     }

//     updateStaffClass = (staffClass) => {
//         this.props.addTeacherRecorddata("StaffClassId",staffClass);
//     }

//     updateRank = (Rank) => {
//         this.props.addTeacherRecorddata("rankId",Rank);
//     }

//     updateSubjectArea = (SubjectArea) => {
//         this.props.addTeacherSpecialisationdata({"subjectAreaId":SubjectArea});
//     }

//     goBack = () =>{

//         this.props.navigation.navigate("TeacherBiodata");

//     }

//     submitForm = () => {
       
//         const item = this.props.route.params.state
      
//         const StaffBiodata = {
//             person: {
//                 FirstName: item.firstName,
//                 Surname: item.lastName,
//                 OtherName: item.OtherName,
//                 dateOfBirth: item.dateOfBirth,
//                 'stateId': 1, 
//                 "lgaId": 1,
//                 "sexId": 1,
//                 "alergy": "N/A",
//                 "hometown": item.hometown,
//                 address: item.address,
//                 phone: item.phone,
//                 email: item.email,
//                 nextOfKin: {
//                     name: item.nextOfKinName,
//                     phone: item.nextOfKinPhone,
//                     "email": "",
//                     address: item.nextOfKinAddress
//                 }
//             },
//             "teacherRecord": {
//                 "AcademicSessionId": 1,
//                 "schoolId": 1,
//                 "onPremises": true,
//                 "teacherQualifications": [
//                 ],
//                 "teacherSubjects": [
//                 ],
//                 "teacherStreams": [
//                 ],
//                 "teacherSpecialization": [
//                 ],
//                 "teacherInstitutions": [
//                 ],
//                 specialization: this.state.Teaching,
//                 firstAppointment: this.state.firstAppointment,
//                 currentAppointment: this.state.currentAppointment,
//                 retirement: this.state.retirement,
//                 yearsOfExperience: 0,
//                 trainingsAttended: 0,
//                 streamsTaught: 1,
//                 gradeLevelId: 1,
//                 rankId: 1,
//                 postHeld: this.state.postHeld,
//                 datePosted: this.state.datePosted,
//                 postingHistories: [],
//                 "staffTypeId": 1,
//                 "StaffClassId": 1
//             }
//         };
  
       

      
//         fetch({
//             method: 'post',
//             url:  'http://asbemis.com/api/Teachers',
           
//             body: JSON.stringify(StaffBiodata)
//           }).then(res=> res.JSON()).then(res=> {
//               if(res.error){
//                 console.log(res)
//               }
//           }).catch(err=> {
//               console.log(err,  "there is an error")
//           })


//         // const {Biodata} = this.props;

//         // if(!Biodata.teacherRecord.teacherSubjects[0]){
//         //     alert("Add the subject taught by teacher!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.postingHistories[0]){
//         //     alert("Add the schools taught by teacher!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.teacherStreams[0]){
//         //     alert("Add the streams taught by teacher!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.teacherInstitutions[0]){
//         //     alert("Add the isntituions worked by teacher!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.firstAppointment){
//         //     alert("Select First Appointment Date!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.currentAppointment){
//         //     alert("Select Current Appointment Date!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.retirement){
//         //     alert("Select Retirement Date!");
//         //     return;
//         // }

//         // if(!Biodata.teacherRecord.datePosted){
//         //     alert("Select Date posted to current school!");
//         //     return;
//         // }



//         // if(this.props.Biodata.id){
//         //     alert("Record Updated!");
//         // }else{
//         //     this.props.saveTeacherDataAsync(this.props.Biodata)
//         //     this.props.navigation.navigate("TeacherBiodata");
//         //     alert("Record Saved!");
//         // }

//     }

//     setSubjectAreaModalVisible(visible) {
//         this.setState({SubjectAreaModalVisible: visible});
//     }

//     setStreamModalVisible(visible) {
//         this.setState({streamModalVisible: visible});
//     }

//     setInstitutionModalVisible(visible) {
//         this.setState({institutionModalVisible: visible});
//     }

//     setPostingModalVisible(visible) {
//         this.setState({postingModalVisible: visible});
//     }

//     handleChangeOtherText = (inputName, text) => {
//         this.setState({ [inputName]: text });
//     }

//     setInstitutionDate = (newDate) => {
//         // this.props.addTeacherRecorddata("InstitutionDate",newDate.toISOString());
//         this.setState({ InstitutionDate: newDate.toISOString() });
//     }

//     addInstitution = () => {

//         let institutionHistories = this.state.institutionHistories;
//         if (this.state.InstitutionName && this.state.InstitutionDate){

//             data = {institution:this.state.InstitutionName, date:this.state.InstitutionDate.substring(0,10)};
//             this.props.addTeacherInstitutiondata(data);
//             institutionHistories.push(data);
//             this.setState({institutionHistories:institutionHistories})
//         }

//     }

//     removeInstitution = (index) => {
//         // const {Biodata} = this.state;
//         // Biodata.teacherRecord.teacherInstitutions.splice(index,1);
//         // this.props.addTeacherInstitutiondata({});
//     }

//     addPostingHistory = () => {

//         let postingHistories = this.state.postingHistories;
//         if (this.state.PostingName && this.state.PostingDate){

//             data = {institution:this.state.PostingName, date: this.state.PostingDate.substring(0,10)};
//             postingHistories.push(data);
//             this.setState({postingHistories:postingHistories})
//             this.props.addTeacherPostingData(data);

//         }

//     }

//     removePostingHistory = (index) => {

//         // const {Biodata} = this.state;
//         // Biodata.teacherRecord.postingHistories.splice(index,1);
//         // this.setState({Biodata:Biodata});

//     }

//     setAppoitmentDate = (newDate) => {
//        this.props.addTeacherRecorddata("firstAppointment",newDate.toISOString());
//     }




//     setPostingDate = (newDate) => {
//         // this.props.addTeacherRecorddata("PostingDate",newDate.toISOString());
//         this.setState({ PostingDate: newDate.toISOString() });
//     }

//     setRetirementDate = (newDate) => {
//         this.props.addTeacherRecorddata("retirement",newDate.toISOString());
//     }

//     setPresentAppointmentDate = (newDate) => {
//         this.props.addTeacherRecorddata("currentAppointment",newDate.toISOString());
//     }

//     setPostedDate = (newDate) => {
//         this.props.addTeacherRecorddata("datePosted",newDate.toISOString());
//     }

//     handleChangeText = (inputName, text) => {
//         this.props.addTeacherRecorddata(inputName,text);
//     }

//     handleIntegerValueChangeText = (inputName, value) => {
//         this.props.addTeacherRecorddata(inputName,(value));
//     }


//     onSelectedItemsChange = (subjectId,subjectName) => {

//         let SubjectsTaught = this.state.SubjectsTaught;
//         SubjectsTaught.push({id: subjectId, name: subjectName});
//         this.setState({SubjectsTaught:SubjectsTaught})
//         this.props.addTeacherSubjectdata({"subjectId": subjectId});
//     };

//     onSelectedStreamItemsChange = (streamId,streamName) => {

//         let StreamsTaught = this.state.StreamsTaught;
//         StreamsTaught.push({id: streamId, name: streamName});
//         this.setState({StreamsTaught:StreamsTaught})
//         this.props.addTeacherStreamdata({"streamId": streamId});

//     };


//     render() {

//         return (
//             <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
//                 <Container>

//                         <View style={{backgroundColor:'#E6DC82', padding :10}}>
//                             <Text style={styles.headerText}>New Teacher Information</Text>
//                         </View>

//                         <Content >


//                             <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
//                                 <Text style={styles.subText}>Academic Details</Text>
//                             </View>

//                             <Form style={{width:'75%',justifyContent:'center', alignSelf:'center'}}>

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Highest Qualification</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker  selectedValue={(this.props.Biodata.teacherRecord.teacherQualifications.length > 0) ? this.props.Biodata.teacherRecord.teacherQualifications[0].qualificationId: null}
//                                          onValueChange={(QualificationId) => {this.updateQaulification( QualificationId)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.qualifications.map( (v,key)=>{
//                                                 return <Picker.Item label={v.name} key={key}  value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Institution Attended</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setInstitutionModalVisible(true);}}>
//                                         <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: '#E6DC82'}}> Add Institutions</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                                 {
//                                     this.state.institutionHistories.length > 0 ?
//                                     <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
//                                         <Text style={styles.labelTextCenter}>
//                                             {
//                                                 this.state.institutionHistories.map((level,key) => {
//                                                     return ( <Text key={key}
//                                                         style={styles.displayItems}
//                                                         >{level.institution} - {level.date}, </Text> )
//                                                 })

//                                             }
//                                         </Text>
//                                     </View>
//                                     : null
//                                 }


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Subject Area Specialisation</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker
//                                      selectedValue={(this.props.Biodata.teacherRecord.teacherSpecialization.length > 0) ? this.props.Biodata.teacherRecord.teacherSpecialization[0].subjectAreaId: null}

//                                         onValueChange={(SubjectArea) => {this.updateSubjectArea( SubjectArea)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.subjectAreas.map( (v,key)=>{
//                                                 return <Picker.Item label={v.name} key={key}  value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>
//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Date of First Appointment</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <DatePicker
//                                     defaultDate={new Date(1960, 4, 4)}
//                                     minimumDate={new Date(1960, 1, 1)}
//                                     maximumDate={new Date()}
//                                     locale={"en"}
//                                     timeZoneOffsetInMinutes={undefined}
//                                     modalTransparent={false}
//                                     animationType={"fade"}
//                                     androidMode={"default"}
//                                     placeHolderText="Select date"
//                                     textStyle={{ color: "green" }}
//                                     placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                     onDateChange={this.setAppoitmentDate}
//                                     disabled={false}
//                                 />
//                                 </View>

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Date of Present Appointment</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <DatePicker
//                                     defaultDate={new Date(1960, 4, 4)}
//                                     minimumDate={new Date(1960, 1, 1)}
//                                     maximumDate={new Date()}
//                                     locale={"en"}
//                                     timeZoneOffsetInMinutes={undefined}
//                                     modalTransparent={false}
//                                     animationType={"fade"}
//                                     androidMode={"default"}
//                                     placeHolderText="Select date"
//                                     textStyle={{ color: "green" }}
//                                     placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                     onDateChange={this.setPresentAppointmentDate}
//                                     disabled={false}
//                                 />
//                                 </View>

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Expected Retirement Date</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <DatePicker
//                                     defaultDate={new Date(2018, 4, 4)}
//                                     minimumDate={new Date(2018, 1, 1)}
//                                     maximumDate={new Date(2100, 1, 1)}
//                                     locale={"en"}
//                                     timeZoneOffsetInMinutes={undefined}
//                                     modalTransparent={false}
//                                     animationType={"fade"}
//                                     androidMode={"default"}
//                                     placeHolderText="Select date"
//                                     textStyle={{ color: "green" }}
//                                     placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                     onDateChange={this.setRetirementDate}
//                                     disabled={false}
//                                 />
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Years of Experience</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <TextInput  keyboardType="numeric" onChangeText={text => this.handleIntegerValueChangeText('yearsOfExperience',text)} value={`${this.props.Biodata.teacherRecord.yearsOfExperience}`} style={styles.textInput}/>
//                                 </View>

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>School</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker

//                                         selectedValue={this.props.Biodata.teacherRecord.schoolId} onValueChange={(schoolId) => {this.updateSchool(schoolId)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.schools.map( (v,key)=>{
//                                                 return <Picker.Item label={v.name} key={key}  value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Grade Level</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker
//                                         selectedValue={this.props.Biodata.teacherRecord.gradeLevelId} onValueChange={(level) => {this.updateGradeLevel(level)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.gradeLevels.map( (v,key) => {
//                                                 return <Picker.Item label={v.name} key={key}  value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Rank</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker
//                                         selectedValue={this.props.Biodata.teacherRecord.rankId} onValueChange={(Rank) => {this.updateRank(Rank)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.ranks.map( (v, key)=>{
//                                                 return <Picker.Item label={v.name} key={key} value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>



//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Post Held in School</Text>
//                                     <TextInput onChangeText={text => this.handleChangeText('postHeld',text)} value={this.props.Biodata.teacherRecord.postHeld} style={styles.textInput}/>
//                                 </View>
//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Year Posted to School</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <DatePicker
//                                     defaultDate={new Date(1960, 4, 4)}
//                                     minimumDate={new Date(1960, 1, 1)}
//                                     maximumDate={new Date()}
//                                     locale={"en"}
//                                     timeZoneOffsetInMinutes={undefined}
//                                     modalTransparent={false}
//                                     animationType={"fade"}
//                                     androidMode={"default"}
//                                     placeHolderText="Select date"
//                                     textStyle={{ color: "green" }}
//                                     placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                     onDateChange={this.setPostedDate}
//                                     disabled={false}
//                                     />
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Posting History with date</Text>
//                                     <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPostingModalVisible(true);}}>
//                                         <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: '#E6DC82'}}>Add Posting History</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                                 {
//                             this.state.postingHistories.length > 0 ?
//                             <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
//                                 <Text style={styles.labelTextCenter}>
//                                     {
//                                         this.state.postingHistories.map((level,key) => {
//                                             return ( <Text key={key}
//                                                 style={styles.displayItems}
//                                                 >{level.institution} - {level.date}, </Text> )
//                                         })

//                                     }
//                                 </Text>
//                             </View>
//                             : null
//                         }


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Type of Staff</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker
//                                         selectedValue={this.props.Biodata.teacherRecord.staffTypeId} onValueChange={(TypeOfStaff) => {this.updateStaffType( TypeOfStaff)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.staffTypes.map( (v, key)=>{
//                                                 return <Picker.Item label={v.name} key={key} value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Class of Staff</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <Picker
//                                         selectedValue={this.props.Biodata.teacherRecord.StaffClassId} onValueChange={(ClassOfStaff) => {this.updateStaffClass(ClassOfStaff)}}
//                                         style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
//                                             {this.props.staffClasses.map( (v, key)=>{
//                                                 return <Picker.Item label={v.name} key={key} value={v.id} />
//                                             })}
//                                     </Picker>
//                                 </View>



//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Subject taught</Text>

//                                     <Text style={styles.Asterix}>*</Text>
//                                     <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setSubjectAreaModalVisible(true);}}>
//                                         <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Subjects</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                                 {
//                             this.state.SubjectsTaught.length > 0 ?
//                             <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
//                                 <Text style={styles.labelTextCenter}>
//                                     {
//                                         this.state.SubjectsTaught.map((level,key) => {
//                                             return ( <Text key={key}
//                                                 style={styles.displayItems}
//                                                 >{level.name}, </Text> )
//                                         })

//                                     }
//                                 </Text>
//                             </View>
//                             : null
//                         }

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.subText2}>{this.props.SubjectNames}</Text>
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Streams taught</Text>
//                                     <Text style={styles.Asterix}>*</Text>
//                                     <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(true);}}>
//                                         <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Streams</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                                 {
//                             this.state.StreamsTaught.length > 0 ?
//                             <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
//                                 <Text style={styles.labelTextCenter}>
//                                     {
//                                         this.state.StreamsTaught.map((level,key) => {
//                                             return ( <Text key={key}
//                                                 style={styles.displayItems}
//                                                 >{level.name}, </Text> )
//                                         })

//                                     }
//                                 </Text>
//                             </View>
//                             : null
//                         }

//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.subText2}>{this.props.StreamNames}</Text>
//                                 </View>


//                                 <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
//                                     <Text style={styles.labelText}>Number of trainings attended</Text>
//                                 <Text style={styles.Asterix}>*</Text>
//                                     <TextInput keyboardType="numeric" onChangeText={text => this.handleIntegerValueChangeText('trainingsAttended',text)} value={`${this.props.Biodata.teacherRecord.trainingsAttended}`}  style={styles.textInput}/>
//                                 </View>


//                                 <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
//                                     <View style={styles.buttonView}>
//                                         <Button block style={styles.button2} onPress={()=>{this.goBack()}}>
//                                                 <Text style={styles.button2Text}>Previous</Text>
//                                         </Button>
//                                     </View>

//                                     <View style={styles.buttonView}>
//                                         <Button block style={styles.button} onPress={()=>{ this.submitForm(), CheckConnectivity() }}>
//                                                 <Text style={styles.buttonText}>Save</Text>
//                                         </Button>
//                                     </View>
//                                 </View>

//                             </Form>

//                             <Modal
//                                 animationType="slide"
//                                 transparent={false}
//                                 visible={this.state.SubjectAreaModalVisible}
//                                 onRequestClose={() => {
//                                     this.setSubjectAreaModalVisible(false);
//                                 }}>
//                                 <View>

//                                 <MultiSelect data={this.props.subjectAreas} onSelectedItem={this.onSelectedItemsChange}  />

//                                     <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setSubjectAreaModalVisible(!this.state.SubjectAreaModalVisible);}}>
//                                             <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                             </Modal>

//                             <Modal
//                                 animationType="slide"
//                                 transparent={false}
//                                 visible={this.state.streamModalVisible}
//                                 onRequestClose={() => {
//                                     this.setStreamModalVisible(false);
//                                 }}>
//                                 <View style={{maxWidth: 600}}>

//                                 <MultiSelect data={this.props.streams} onSelectedItem={this.onSelectedStreamItemsChange}  />

//                                     <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(!this.state.streamModalVisible);}}>
//                                             <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                             </Modal>

//                             <Modal
//                                 animationType="slide"
//                                 transparent={false}
//                                 visible={this.state.institutionModalVisible}
//                                 onRequestClose={() => {
//                                     this.setInstitutionModalVisible(false);
//                                 }}>
//                                 <View>
//                                     <View>
//                                         <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40, }}>Add Institution</Text>

//                                         <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
//                                             <Text style={styles.labelText}>Institution</Text>
//                                             <Text style={styles.Asterix}>*</Text>
//                                             <TextInput onChangeText={text => this.handleChangeOtherText('InstitutionName',text)}
//                                                 value={this.props.InstitutionName}  style={styles.textInput}/>
//                                         </View>

//                                         <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
//                                             <Text style={styles.labelText}>Date</Text>
//                                             <Text style={styles.Asterix}>*</Text>
//                                             <DatePicker
//                                                     defaultDate={new Date(2018, 4, 4)}
//                                                     minimumDate={new Date(1900, 1, 1)}
//                                                     maximumDate={new Date()}
//                                                     locale={"en"}
//                                                     timeZoneOffsetInMinutes={undefined}
//                                                     modalTransparent={false}
//                                                     animationType={"fade"}
//                                                     androidMode={"default"}
//                                                     placeHolderText="Select date"
//                                                     textStyle={{ color: "green" }}
//                                                     placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                                     onDateChange={this.setInstitutionDate}
//                                                     disabled={false}
//                                                 />
//                                         </View>

//                                         <View style={styles.buttonViewRight}>
//                                             <Button block style={styles.button} onPress={()=>{ this.addInstitution() }}>
//                                                     <Text style={styles.buttonText}>Add</Text>
//                                             </Button>
//                                         </View>
//                                     </View>

//                                     <View>
//                                         <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>All Institutions</Text>
//                                         {
//                                             this.props.Biodata.teacherRecord.teacherInstitutions.map((v,key)=>{
//                                                 return (
//                                                     <View key={key}>
//                                                         <View style={{backgroundColor: 'rgba(100, 100, 100, 0.34)', alignSelf: 'center', padding: 20, minWidth: 600, flexDirection: 'row'}} >
//                                                             <Text style={styles.labelModalText}>{v.institution} - {v.date}</Text>

//                                                             <Button block style={styles.buttonModal1} onPress={()=>{ this.removeInstitution(key) }}>
//                                                                 <Text style={styles.buttonModalText}>Remove</Text>
//                                                             </Button>

//                                                         </View>
//                                                     </View>
//                                                 )
//                                             })
//                                         }
//                                     </View>

//                                 <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setInstitutionModalVisible(!this.state.institutionModalVisible);}}>
//                                             <Text style={{alignSelf:'center', fontSize: 15, color: '#fff', fontWeight: 'bold',}}>Save Records</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                             </Modal>


//                             <Modal
//                                 animationType="slide"
//                                 transparent={false}
//                                 visible={this.state.postingModalVisible}
//                                 onRequestClose={() => {
//                                     this.setPostingModalVisible(false);
//                                 }}>
//                                 <View>
//                                     <View>
//                                         <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40, }}>Add Posting History</Text>
//                                         <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
//                                             <Text style={styles.labelText}>Institution</Text>
//                                             <Text style={styles.Asterix}>*</Text>
//                                             <TextInput onChangeText={text => this.handleChangeOtherText('PostingName',text)}
//                                                 value={this.props.PostingName}  style={styles.textInput}/>
//                                         </View>

//                                         <View style={{paddingTop: 5,margin:5, marginTop: 10, flexDirection:'row' }}>
//                                             <Text style={styles.labelText}>Date</Text>
//                                             <Text style={styles.Asterix}>*</Text>
//                                             <DatePicker
//                                                 defaultDate={new Date(2018, 4, 4)}
//                                                 minimumDate={new Date(1900, 1, 1)}
//                                                 maximumDate={new Date()}
//                                                 locale={"en"}
//                                                 timeZoneOffsetInMinutes={undefined}
//                                                 modalTransparent={false}
//                                                 animationType={"fade"}
//                                                 androidMode={"default"}
//                                                 placeHolderText="Select date"
//                                                 textStyle={{ color: "green" }}
//                                                 placeHolderTextStyle={{ color: "#d3d3d3" }}
//                                                 onDateChange={this.setPostingDate}
//                                                 disabled={false}
//                                             />
//                                         </View>

//                                         <View style={styles.buttonViewRight}>
//                                             <Button block style={styles.button} onPress={()=>{ this.addPostingHistory() }}>
//                                                     <Text style={styles.buttonText}>Add</Text>
//                                             </Button>
//                                         </View>
//                                     </View>

//                                     <View>
//                                         <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>All Posting</Text>
//                                         {
//                                             this.props.Biodata.teacherRecord.postingHistories.map((v,key)=>{
//                                                 return (
//                                                     <View style={{backgroundColor: 'rgba(100, 100, 100, 0.34)', alignSelf: 'center', padding: 20, minWidth: 600, flexDirection: 'row'}} key={key}>

//                                                         <Text style={styles.labelModalText}>{v.institution} - {v.date}</Text>
//                                                         <Button block style={styles.buttonModal1} onPress={()=>{ this.removePostingHistory(key) }}>
//                                                             <Text style={styles.buttonModalText}>Remove</Text>
//                                                         </Button>
//                                                     </View>
//                                                 )
//                                             })
//                                         }
//                                     </View>

//                                 <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPostingModalVisible(!this.state.postingModalVisible);}}>
//                                             <Text style={{alignSelf:'center', fontSize: 15, color: '#fff', fontWeight: 'bold',}}>Save Records</Text>
//                                     </TouchableHighlight>
//                                 </View>
//                             </Modal>

//                         </Content>
//                 </Container>

//             </KeyboardAvoidingView>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     Biodata: state.teachers,
//     schools:  state.utility.schools,
//     streams:  state.utility.streams,
//     subjects:  state.utility.subjects,
//     gradeLevels:  state.utility.gradeLevels,
//     subjectAreas:  state.utility.subjectAreas,
//     qualifications:  state.utility.qualifications,
//     ranks:  state.utility.ranks,
//     staffTypes:  state.utility.staffTypes,
//     staffClasses:  state.utility.staffClasses,
// })

// const mapDispatchToProps = (dispatch) => {
//     return {

//         addTeacherBiodata: (field,value) => dispatch(biodataActions.addTeacherBiodata(field,value)),
//         addTeacherNokdata: (field, value) => dispatch(biodataActions.addTeacherNokdata(field, value)),
//         addTeacherRecorddata: (field, value) => dispatch(biodataActions.addTeacherRecorddata(field, value)),
//         addTeacherQualificationdata: (payload) => dispatch(biodataActions.addTeacherQualificationdata(payload)),
//         addTeacherSubjectdata: (payload) => dispatch(biodataActions.addTeacherSubjectdata(payload)),
//         addTeacherStreamdata: (payload) => dispatch(biodataActions.addTeacherStreamdata(payload)),
//         addTeacherSpecialisationdata: (payload) => dispatch(biodataActions.addTeacherSpecialisationdata(payload)),
//         addTeacherInstitutiondata: (payload) => dispatch(biodataActions.addTeacherInstitutiondata(payload)),
//         addTeacherPostingData: (payload) => dispatch(biodataActions.addTeacherPostingData(payload)),
//         saveTeacherDataAsync: (data) => dispatch(biodataActions.saveTeacherDataAsync(data)),


//         fetchGradeLevelList: () => dispatch(biodataActions.fetchGradeLevelList()),
//         fetchStudentStreamsList: () => dispatch(biodataActions.fetchStudentStreamsList()),
//         fetchSubjectAreaList: () => dispatch(biodataActions.fetchSubjectAreaList()),
//         fetchRankList: () => dispatch(biodataActions.fetchRankList()),
//         fetchStaffTypesList: () => dispatch(biodataActions.fetchStaffTypesList()),
//         fetchStaffClassesList: () => dispatch(biodataActions.fetchStaffClassesList()),
//         fetchSubjectsList: () => dispatch(biodataActions.fetchSubjectsList()),
//         fetchSchoolList: () => dispatch(biodataActions.fetchSchoolList()),
//         fetchQualificationList: () => dispatch(biodataActions.fetchQualificationList()),
//     }
// }

// export default  connect(mapStateToProps,mapDispatchToProps)(TeacherOtherData);


import {ADD_TEACHER_BIODATA,ADD_TEACHER_NOKDATA,ADD_TEACHER_RECORD_DATA,
    ADD_TEACHER_QUALIFICATION_DATA,ADD_TEACHER_SUBJECT_DATA,ADD_TEACHER_STREAM_DATA,
    ADD_TEACHER_SPECIALISATION_DATA,ADD_TEACHER_INSTITUTION_DATA,ADD_TEACHER_POSTING_DATA
    ,SAVE_TEACHER_DATA,LOAD_TEACHER_DATA, RESET_DATA} from "../actions/actionTypes";
    
    const clearObjectValues = (objToClear) => {
            Object.keys(objToClear).forEach((param) => {
                if ( (objToClear[param]).toString() === "[object Object]" ) {
                    clearObjectValues(objToClear[param]);
                } else {
                        if(typeof objToClear[param] === "String"){
                            objToClear[param] = "";
                        }
                        else if(typeof objToClear[param] === "number"){
                            objToClear[param] = 0;
                        }
                        else{
                            objToClear[param] = null;
                        }
                }
            })
            return objToClear;
        };
    
    const StaffBiodata = {
            "person": {
                    "FirstName": "",
                    "Surname": "",
                    "OtherName": "",
                "dateOfBirth": "",
                "stateId": 1,
                "lgaId": 1,
                "sexId": 1,
                "alergy": "N/A",
                "hometown": "d",
                "address": "d",
                "phone": "2",
                "email": "",
                "nextOfKin": {
                    "name": "d",
                    "phone": "d",
                    "email": "",
                    "address": "d"
                }
            },
            "teacherRecord": {
                "AcademicSessionId": 1,
                "schoolId": 1,
                "onPremises": true,
                "teacherQualifications": [
                ],
                "teacherSubjects": [
                ],
                "teacherStreams": [
                ],
                "teacherSpecialization": [
                ],
                "teacherInstitutions": [
                ],
                "specialization": "Teaching",
                "firstAppointment": "",
                "currentAppointment": "",
                "retirement": "",
                "yearsOfExperience": 0,
                "trainingsAttended": 0,
                "streamsTaught": 1,
                "gradeLevelId": 1,
                "rankId": 1,
                "postHeld": "Teacher",
                "datePosted": "",
                "postingHistories": [{}],
                "staffTypeId": 1,
                "StaffClassId": 1
            }
        };
    
        const StaffBiodataTwo = {
            "person": {
                    "FirstName": "",
                    "Surname": "",
                    "OtherName": "",
                "dateOfBirth": "",
                "stateId": 1,
                "lgaId": 1,
                "sexId": 1,
                "alergy": "N/A",
                "hometown": "d",
                "address": "d",
                "phone": "2",
                "email": "",
                "nextOfKin": {
                    "name": "d",
                    "phone": "d",
                    "email": "",
                    "address": "d"
                }
            },
            "teacherRecord": {
                "AcademicSessionId": 1,
                "schoolId": 1,
                "onPremises": true,
                "teacherQualifications": [
                ],
                "teacherSubjects": [
                ],
                "teacherStreams": [
                ],
                "teacherSpecialization": [
                ],
                "teacherInstitutions": [
                ],
                "specialization": "Teaching",
                "firstAppointment": "",
                "currentAppointment": "",
                "retirement": "",
                "yearsOfExperience": 0,
                "trainingsAttended": 0,
                "streamsTaught": 1,
                "gradeLevelId": 1,
                "rankId": 1,
                "postHeld": "Teacher",
                "datePosted": "",
                "postingHistories": [{}],
                "staffTypeId": 1,
                "StaffClassId": 1
            }
        };
         
     
    //     INITIAL_STATE = {
    //         type : "RESET"
    //       }
    
        
    const teachers = (state ={}, action, INITIAL_STATE) => {
         
        switch (action.type) {
            case ADD_TEACHER_BIODATA:
                const pStateCopy = { ...state };
                pStateCopy.person[action.field] = action.text;
                return pStateCopy
            case ADD_TEACHER_NOKDATA:
                    const nStateCopy = { ...state };
                    nStateCopy.person.nextOfKin[action.field] = action.text;
                    return nStateCopy
            case ADD_TEACHER_RECORD_DATA:
                    const nStateCopy1 = { ...state };
                    nStateCopy1.teacherRecord[action.field] = action.text;
                    return nStateCopy1
            case ADD_TEACHER_QUALIFICATION_DATA:
                    const nStateCopy2 = { ...state };
                    nStateCopy2.teacherRecord.teacherQualifications = [action.payload];
                    console.log("Qualif",nStateCopy2.teacherRecord.teacherQualifications);
                    return nStateCopy2
            case ADD_TEACHER_SUBJECT_DATA:
                    const nStateCopy3 = { ...state };
                    nStateCopy3.teacherRecord.teacherSubjects.push(action.payload);
                    return nStateCopy3
            case ADD_TEACHER_STREAM_DATA:
                    const nStateCopy4 = { ...state };
                    nStateCopy4.teacherRecord.teacherStreams.push(action.payload);
                    return nStateCopy4
            case ADD_TEACHER_SPECIALISATION_DATA:
                    const nStateCopy5 = { ...state };
                    nStateCopy5.teacherRecord.teacherSpecialization =[action.payload];
                    return nStateCopy5
            case ADD_TEACHER_INSTITUTION_DATA:
                    const nStateCopy6 = { ...state };
                    nStateCopy6.teacherRecord.teacherInstitutions.push(action.payload);
                    return nStateCopy6
            case ADD_TEACHER_POSTING_DATA:
                    const nStateCopy7 = { ...state };
                    nStateCopy7.teacherRecord.postingHistories.push(action.payload);
                    return nStateCopy7
            case SAVE_TEACHER_DATA:
                    return StaffBiodata
            case LOAD_TEACHER_DATA:
                    return action.payload
            case RESET_DATA:
                    return state;
            default:
                return state
        }
    }
    
    export default teachers