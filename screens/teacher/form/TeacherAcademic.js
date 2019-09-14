import React, { Component } from "react";
import {View,Text,StyleSheet, TouchableHighlight,TextInput,Modal, Picker, KeyboardAvoidingView} from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import Logic from '../../../logic';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MultipleSelectPicker } from 'react-native-multi-select-picker'
import MultiSelect from "../../../Components/MultiSelect";


class TeacherAcademic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ranks: [],
            Grades: [],
            Types:[],
            Schools:[],
            Subjects:[],
            TeacherClasses:[],
            SubjectsTaught:[],
            Qualifications:[],
            SubjectAreas:[],
            StreamsTaught:[],
            InstitutionsAttended:[],
            InstitutionName: '',
            InstitutionDate: '',
            PostingHistoryDate: [],
            PostingName: '',
            PostingDate: '',
            Streams:[],
            SubjectNames: '',
            StreamNames: '',
            modalVisible: false,
            streamModalVisible: false,
            institutionModalVisible: false,
            postingModalVisible: false,
            Biodata:{
                "person": {
                    "First_Name":"",
                    "Last_Name":"",
                    "Other_Name":"",
                    "name": "",
                    "dateOfBirth": "",
                    "stateId": 1,
                    "lgaId": 1,
                    "sexId": 1,
                    "alergy":"N/A",
                    "hometown": "",
                    "address": "",
                    "phone": "",
                    "email": "",
                    "nextOfKin": {
                      "name": "",
                      "phone": "",
                      "email": "",
                      "address": ""
                    }
                  },
                "teacherRecord": {
                  "AcademicSessionId": 1,
                  "schoolId": 1,
                  "onPremises": true,
                  "teacherQualifications": [
                    {
                      "qualificationId": 1
                    }
                  ],
                  "teacherSubjects": [
                  ],
                "teacherStreams": [
                ],
                  "teacherSpecialization": [
                    {
                      "subjectAreaId": 1
                    }
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
            }
        }
    }

    static navigationOptions =  {
        title: 'New Teacher',
        headerLeft: null
    }

    componentDidMount(){

      const Biodata = this.props.navigation.getParam('Biodata', '');
      if (Biodata){
          this.setState({Biodata: Biodata});
      }
      const gradelevels = new Logic()
      gradelevels.GradeLevels('http://97.74.6.243/anambra/api/GradeLevels')
      .then((res) => {
          this.setState({Grades: res.data})
     })
    .catch((error) => console.warn(error))

      const ranks = new Logic()
      ranks.Ranks('http://97.74.6.243/anambra/api/Ranks')
      .then((res) => {
          this.setState({Ranks: res.data})
        })
      .catch((error) => console.warn(error))

      const types = new Logic()
      types.StaffType('http://97.74.6.243/anambra/api/StaffTypes')
      .then((res) => {

          this.setState({Types: res.data})
     })
        .catch((error) => console.warn(error))

        const staffClass = new Logic()
        staffClass.StaffClass('http://97.74.6.243/anambra/api/StaffClasses')
        .then((res) => {

            this.setState({TeacherClasses: res.data})
      })
          .catch((error) => console.warn(error))

          const school = new Logic()
          school.StaffClass('http://97.74.6.243/anambra/api/Schools')
          .then((res) => {

              this.setState({Schools: res.data})
        })
            .catch((error) => console.warn(error))


            const subject = new Logic()
            subject.StaffClass('http://97.74.6.243/anambra/api/Subjects')
            .then((res) => {

                this.setState({Subjects: res.data})
            })
            .catch((error) => console.warn(error))

            const qualification = new Logic()
            qualification.StaffClass('http://97.74.6.243/anambra/api/Qualifications')
            .then((res) => {

                  this.setState({Qualifications: res.data})
            })
            .catch((error) => console.warn(error))

            const subjectArea = new Logic()
            subjectArea.StaffClass('http://97.74.6.243/anambra/api/SubjectAreas')
            .then((res) => {
                this.setState({SubjectAreas: res.data})
            })
            .catch((error) => console.warn(error))

            const stream = new Logic()
            stream.StaffClass('http://97.74.6.243/anambra/api/Streams')
            .then((res) => {
                this.setState({Streams: res.data})
            })
            .catch((error) => console.warn(error))



    }
    updateQaulification = (Qualification) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.teacherQualifications[0].qualificationId = Qualification;
        this.setState({ Biodata : Biodata})
    }

    updateSchool = (School) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.schoolId = School;
        this.setState({ Biodata : Biodata})
    }

    updateGradeLevel = (GradeLevel) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.gradeLevelId = GradeLevel;
        this.setState({ Biodata : Biodata})
    }

    updateStaffType = (staffType) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.staffTypeId = staffType;
        this.setState({ Biodata : Biodata})
    }

    updateStaffClass = (staffClass) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.StaffClassId = staffClass;
        this.setState({ Biodata : Biodata})
    }

    updateRank = (Rank) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.rankId = Rank;
        this.setState({ Biodata : Biodata})
    }

    updateSubjectArea = (SubjectArea) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.teacherSpecialization[0].subjectAreaId = SubjectArea;
        this.setState({ Biodata : Biodata})
    }
    goBack = () =>{

        const {Biodata} = this.state;
        this.props.navigation.navigate("Biodata", {Biodata});

    }
    submitForm = () => {
        const saveTeacher = new Logic()
        const {Biodata} = this.state;

        if(!Biodata.teacherRecord.teacherSubjects[0]){
            alert("Add the subject taught by teacher!");
            return;
        }

        if(!Biodata.teacherRecord.postingHistories[0]){
            alert("Add the schools taught by teacher!");
            return;
        }

        if(!Biodata.teacherRecord.teacherStreams[0]){
            alert("Add the streams taught by teacher!");
            return;
        }

        if(!Biodata.teacherRecord.teacherInstitutions[0]){
            alert("Add the isntituions worked by teacher!");
            return;
        }

        if(!Biodata.teacherRecord.firstAppointment){
            alert("Select First Appointment Date!");
            return;
        }

        if(!Biodata.teacherRecord.currentAppointment){
            alert("Select Current Appointment Date!");
            return;
        }

        if(!Biodata.teacherRecord.retirement){
            alert("Select Retirement Date!");
            return;
        }

        if(!Biodata.teacherRecord.datePosted){
            alert("Select Date posted to current school!");
            return;
        }


        saveTeacher.TeacherBiodata("http://97.74.6.243/anambra/api/Teachers",Biodata)
        .then((res) => {
            if (res.status == 201){
                alert("Record saved!");
            }
            this.props.navigation.navigate("Biodata");
        })
        .catch((error) => {
            alert("Phone number already exists");
        console.log("eRROR",error);
            // if (error.response.status == 400){
            //     alert(error.response.data);
            // }
        });

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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


    addInstitution = () => {
        if (this.state.InstitutionName && this.state.InstitutionDate){

            data = {institution:this.state.InstitutionName, date:this.state.InstitutionDate.substring(0,10)};

            const {Biodata} = this.state;
            Biodata.teacherRecord.teacherInstitutions.push(data);
            this.setState({ Biodata : Biodata,InstitutionName: null,InstitutionDate:null})

            // console.log("Existing Instituion",Biodata.teacherRecord.teacherInstitutions);
        }

    }

    removeInstitution = (index) => {

        const {Biodata} = this.state;
        Biodata.teacherRecord.teacherInstitutions.splice(index,1);
        this.setState({Biodata:Biodata});

    }

    addPostingHistory = () => {
        if (this.state.PostingName && this.state.PostingDate){

            data = {institution:this.state.PostingName, date: this.state.PostingDate};

            const {Biodata} = this.state;
            Biodata.teacherRecord.postingHistories.push(data);
            this.setState({ Biodata : Biodata,PostingName: null,PostingDate:null})

        }

    }

    removePostingHistory = (index) => {

        const {Biodata} = this.state;
        Biodata.teacherRecord.postingHistories.splice(index,1);
        this.setState({Biodata:Biodata});

    }

    setAppoitmentDate = (newDate) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.firstAppointment = newDate.toISOString();
        this.setState({ Biodata : Biodata})
    }

    setInstitutionDate = (newDate) => {
        let {InstitutionDate} = this.state;
        InstitutionDate = newDate.toISOString();
        this.setState({ InstitutionDate : InstitutionDate})
    }


    setPostingDate = (newDate) => {
        let {PostingDate} = this.state;
        PostingDate = newDate.toISOString();
        this.setState({ PostingDate : PostingDate})
    }

    setRetirementDate = (newDate) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.retirement = newDate.toISOString();
        this.setState({ Biodata : Biodata})
    }

    setPresentAppointmentDate = (newDate) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.currentAppointment = newDate.toISOString();
        this.setState({ Biodata : Biodata})
    }

    setPostedDate = (newDate) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.datePosted = newDate.toISOString();
        this.setState({ Biodata : Biodata})
    }

    handleChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord[inputName] = text;
        this.setState({Biodata:Biodata });
    }

    handleChangeOtherText = (inputName, text) => {
        this.setState({ [inputName]: text });
    }

    onSelectedItemsChange = (subjectId,subjectName) => {
        let SubjectsTaught = [];
        SubjectsTaught.push({id: subjectId, name: subjectName});

        const {Biodata} = this.state;
        let {SubjectNames} = this.state;
        SubjectNames = SubjectNames + ',' + subjectName;


        Biodata.teacherRecord.teacherSubjects.push({
            "subjectId": subjectId
          });
        this.setState({ Biodata : Biodata,SubjectNames})
    };

    onSelectedStreamItemsChange = (streamId,streamName) => {
        let StreamsTaught = [];
        StreamsTaught.push({id: streamId, name: streamName});

        const {Biodata} = this.state;
        let {StreamNames} = this.state;
        StreamNames = StreamNames + ',' + streamName;
        Biodata.teacherRecord.teacherStreams.push({
            "streamId": streamId
          });
        this.setState({ Biodata : Biodata,StreamNames:StreamNames})
    };


    render() {

        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
            <Container>

                    <View style={{backgroundColor:'#E6DC82', padding :10}}>
                        <Text style={styles.headerText}>New Teacher Information</Text>
                    </View>

                    <Content style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>


                        <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                            <Text style={styles.subText}>Academic Details</Text>
                        </View>

                        <Form style={{width:'75%',justifyContent:'center', alignSelf:'center'}}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Highest Qualification</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.teacherRecord.teacherQualifications[0].qualificationId} onValueChange={(QualificationId) => {this.updateQaulification( QualificationId)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Qualifications.map( (v,key)=>{
                                            return <Picker.Item label={v.name} key={key}  value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Institution Attended</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setInstitutionModalVisible(true);}}>
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.Biodata.teacherRecord.teacherInstitutions.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.Biodata.teacherRecord.teacherInstitutions.length > 0 ? " Selected": "Add Institutions"}</Text>
                                </TouchableHighlight>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject Area Specialisation</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.teacherRecord.teacherSpecialization[0].subjectAreaId} onValueChange={(SubjectArea) => {this.updateSubjectArea( SubjectArea)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.SubjectAreas.map( (v,key)=>{
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
                                <TextInput  keyboardType="number-pad" onChangeText={text => this.handleChangeText('yearsOfExperience',text)} value={this.state.Biodata.teacherRecord.yearsOfExperience} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.schoolId} onValueChange={(schoolId) => {this.updateSchool(schoolId)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Schools.map( (v,key)=>{
                                            return <Picker.Item label={v.name} key={key}  value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Grade Level</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.teacherRecord.gradeLevelId} onValueChange={(level) => {this.updateGradeLevel(level)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Grades.map( (v,key)=>{
                                            return <Picker.Item label={v.name} key={key}  value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Rank</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.teacherRecord.rankId} onValueChange={(Rank) => {this.updateRank(Rank)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Ranks.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Post Held in School</Text>
                                <TextInput onChangeText={text => this.handleChangeText('postHeld',text)} value={this.state.Biodata.teacherRecord.postHeld} style={styles.textInput}/>
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
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.Biodata.teacherRecord.postingHistories.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.PostingHistoryDate.length > 0 ? " Selected": "Add Posting History"}</Text>
                                </TouchableHighlight>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of Staff</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.teacherRecord.staffTypeId} onValueChange={(TypeOfStaff) => {this.updateStaffType( TypeOfStaff)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Types.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class of Staff</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.teacherRecord.StaffClassId} onValueChange={(ClassOfStaff) => {this.updateStaffClass(ClassOfStaff)}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.TeacherClasses.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject taught</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setModalVisible(true);}}>
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.Biodata.teacherRecord.teacherSubjects.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.SubjectsTaught.length > 0 ? " Selected": "Select Subjects"}</Text>
                                </TouchableHighlight>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                 <Text style={styles.subText2}>{this.state.SubjectNames}</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Streams taught</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(true);}}>
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.Biodata.teacherRecord.teacherStreams.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.StreamsTaught.length > 0 ? " Selected": "Select Streams"}</Text>
                                </TouchableHighlight>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                 <Text style={styles.subText2}>{this.state.StreamNames}</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of trainings attended</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('trainingsAttended',text)} value={this.state.Biodata.teacherRecord.trainingsAttended}  style={styles.textInput}/>
                            </View>


                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.goBack()}}>
                                            <Text style={styles.button2Text}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={()=>{ this.submitForm() }}>
                                            <Text style={styles.buttonText}>Save</Text>
                                    </Button>
                                </View>
                            </View>

                        </Form>

                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this.setModalVisible(false);
                            }}>
                            <View>

                              <MultiSelect data={this.state.SubjectAreas} onSelectedItem={this.onSelectedItemsChange}  />

                                <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setModalVisible(!this.state.modalVisible);}}>
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

                              <MultiSelect data={this.state.Streams} onSelectedItem={this.onSelectedStreamItemsChange}  />

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
                                        <Text style={styles.labelModalFormText}>Institution</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <TextInput onChangeText={text => this.handleChangeOtherText('InstitutionName',text)}
                                            value={this.state.InstitutionName}  style={styles.textModalInput}/>
                                    </View>

                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelModalFormText}>Date</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <DatePicker
                                                defaultDate={new Date(2018, 4, 4)}
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
                                                onDateChange={this.setInstitutionDate}
                                                disabled={false}
                                            />
                                    </View>

                                    <View style={styles.buttonView}>
                                        <Button block style={styles.button} onPress={()=>{ this.addInstitution() }}>
                                                <Text style={styles.buttonText}>Add</Text>
                                        </Button>
                                    </View>
                                </View>

                                <View>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>All Institutions</Text>
                                    {
                                        this.state.Biodata.teacherRecord.teacherInstitutions.map((v,key)=>{
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
                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelModalFormText}>Institution</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <TextInput onChangeText={text => this.handleChangeOtherText('PostingName',text)}
                                            value={this.state.PostingName}  style={styles.textModalInput}/>
                                    </View>

                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelModalFormText}>Date</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <DatePicker
                                            defaultDate={new Date(2018, 4, 4)}
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
                                            onDateChange={this.setPostingDate}
                                            disabled={false}
                                        />
                                    </View>

                                    <View style={styles.buttonView}>
                                        <Button block style={styles.button} onPress={()=>{ this.addPostingHistory() }}>
                                                <Text style={styles.buttonText}>Add</Text>
                                        </Button>
                                    </View>
                                </View>

                                <View>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 30}}>All Posting</Text>
                                    {
                                        this.state.Biodata.teacherRecord.postingHistories.map((v,key)=>{
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
export default TeacherAcademic;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    // buttonView:{width:'50%', alignSelf:'flex-end', margin:'3%'},
    // button: {
    //     backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '53%',
    //     marginRight: 10,
    // },
    // button2:{backgroundColor:'#E6DC82', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '73%',
    //  marginRight: 10,},
    // buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},

    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    buttonModalView: { width: '20%', alignSelf: 'center', margin: '5%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    buttonModal1: { backgroundColor: 'red' , alignContent: 'center', alignSelf: 'center', padding: 3},
    buttonModal2: { backgroundColor: 'green' , alignContent: 'center'},
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },
    buttonModalText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },
    buttonModalText2: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600', padding: 5, },

    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold',
        justifyContent: 'flex-start'
    },


    inputView: { width: '100%',alignItems: 'stretch'},
    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
    subText2: { fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'center' },

    labelText: { width: '45%', height: 35, lineHeight: 18, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    labelModalFormText: { width: '45%', height: 35, lineHeight: 18, textAlign: 'center', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    labelModalText: { width: '45%', height: 35, lineHeight: 18, textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginRight: 10, marginTop: 20, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    },
    textModalInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',
    }

});
