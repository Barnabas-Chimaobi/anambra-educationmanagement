import React, { Component } from "react";
import {View,Text,StyleSheet, TouchableHighlight,TextInput,Modal, Picker, Alert} from "react-native";
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
            Qualification: '',
            Institutions: '',
            SubjectArea: '',
            SubjectTaught: '',
            DateOfFirstApt: '',
            DateOfPresentApt: '',
            ExpectedDateofRetirement: '',
            YearsOfExperience: '',
            GradeLevel: '',
            Rank: '',
            PostHeld: '',
            PostHeldYear: '',
            TypeOfStaff: '',
            ClassOfStaff: '',
            NoOfSubjects: '',
            NoOfStreams: '',
            NoOfTraining: '',
            schoolId: '',
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
            modalVisible: false,
            streamModalVisible: false,
            institutionModalVisible: false,
            postingModalVisible: false,
            biodata: {}
        }
    }


    componentDidMount(){

      const biodata = this.props.navigation.getParam('bioData', '');
      if (biodata){
          this.setState({biodata: biodata});
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

    submitForm = () => {
        const saveTeacher = new Logic()
        const formData = {
            "person": {
              "name": this.state.biodata.name,
              "dateOfBirth": this.state.biodata.dateOfBirth,
              "stateId" :this.state.biodata.StateOrigin,
              "lgaId":this.state.biodata.Lga,
              "sexId":this.state.biodata.sex,
              "hometown": this.state.biodata.Hometown, //this.state.biodata.Hometown,
              "address": this.state.biodata.Residential,
              "phone": this.state.biodata.phone,
              "email": this.state.biodata.Email,
              "nextOfKin": {
                "name": this.state.biodata.NextofKin,
                "phone": this.state.biodata.NextofKinPhone,
                "email": this.state.biodata.Email,
                "address": this.state.biodata.Residential,
              },
            },
            "teacherRecord": {
              "AcademicSessionId": 1,
              "schoolId": this.state.schoolId,
              "onPremises": this.state.biodata.liveIn,
              "qualifications": [
                {
                  "courseName": this.state.Qualification,
                  "startDate": "2016-09-08", //this.state.biodata.Residential
                  "endDate": "2016-09-08", //this.state.biodata.Residential
                  "grade": "-", //this.state.biodata.Residential
                }
              ],
              "specialization": this.state.SubjectArea,
              "firstAppointment": this.state.DateOfFirstApt,
              "currentAppointment": this.state.DateOfPresentApt,
              "retirement": this.state.ExpectedDateofRetirement,
              "yearsOfExperience": this.state.YearsOfExperience,
              "trainingsAttended": this.state.NoOfTraining,
              "streamsTaught": this.state.NoOfStreams,
              "gradeLevelId": this.state.GradeLevel,
              "rankId": this.state.Rank,
              "postHeld": this.state.PostHeld,
              "datePosted": this.state.PostHeldYear,
              "postingHistories": [
                {

                  "schoolId": this.state.schoolId,
                  "startDate": this.state.PostHeldYear,
                  "endDate": this.state.PostHeldYear,
                  "comments": "-",
                }
                ],
                "staffTypeId": this.state.TypeOfStaff,
                "StaffClassId": this.state.ClassOfStaff,
                "teacherSubjects":[
                    {"subjectId": this.state.SubjectTaught},
                ],
            },
          };

        console.log("Form Data",formData);
        saveTeacher.TeacherBiodata("http://97.74.6.243/anambra/api/Teachers",formData)
        .then((res) => {
            console.log(res);
            if (res.status == 201){
                alert("Record saved!");
            }
            this.props.navigation.navigate("Home");
        })
        .catch((error) => console.warn(error));

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
            data = {name:this.state.InstitutionName, date: this.state.InstitutionDate};
            InstitutionsAttended = this.state.InstitutionsAttended;
            InstitutionsAttended.push(data);
            this.setState({InstitutionsAttended:InstitutionsAttended, InstitutionName: null,InstitutionDate:null});
        }

    }

    removeInstitution = (index) => {

        InstitutionsAttended = this.state.InstitutionsAttended;
        InstitutionsAttended.splice(index,1);
        this.setState({InstitutionsAttended:InstitutionsAttended});

    }

    addPostingHistory = () => {
        if (this.state.PostingName && this.state.PostingDate){
            data = {name:this.state.PostingName, date: this.state.PostingDate};
            PostingHistoryDate = this.state.PostingHistoryDate;
            PostingHistoryDate.push(data);
            this.setState({PostingHistoryDate:PostingHistoryDate, PostingName: null,PostingDate:null});
        }

    }

    removePostingHistory = (index) => {

        PostingHistoryDate = this.state.PostingHistoryDate;
        PostingHistoryDate.splice(index,1);
        this.setState({PostingHistoryDate:PostingHistoryDate});

    }

    setAppoitmentDate = (newDate) => {
        this.setState({ DateOfFirstApt: newDate.toISOString() });
    }

    setRetirementDate = (newDate) => {
        this.setState({ ExpectedDateofRetirement: newDate.toISOString() });
    }

    setPresentAppointmentDate = (newDate) => {
        this.setState({ DateOfPresentApt: newDate.toISOString() });
    }

    setPostedDate = (newDate) => {
        this.setState({ PostHeldYear: newDate.toISOString() });
    }

    handleChangeText = (inputName, text) => {
        this.setState({ [inputName]: text });
    }

    onSelectedItemsChange = (subjectId,subjectName) => {
        let SubjectsTaught = this.state.SubjectsTaught;
        SubjectsTaught.push({id: subjectId, name: subjectName});
        this.setState({ SubjectsTaught:SubjectsTaught });
    };

    onSelectedStreamItemsChange = (streamId,streamName) => {
        let StreamsTaught = this.state.StreamsTaught;
        StreamsTaught.push({id: streamId, name: streamName});
        this.setState({ StreamsTaught:StreamsTaught });
    };


    render() {

        return (

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
                                    selectedValue={this.state.Qualification} onValueChange={(QualificationId) => {this.setState({ Qualification: QualificationId })}}
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
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.InstitutionsAttended.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.InstitutionsAttended.length > 0 ? " Selected": "Add Institutions"}</Text>
                                </TouchableHighlight>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject Area Specialisation</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.SubjectArea} onValueChange={(SubjectArea) => {this.setState({ SubjectArea: SubjectArea })}}
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
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
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
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
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
                                <TextInput  keyboardType="number-pad" onChangeText={text => this.handleChangeText('YearsOfExperience',text)} value={this.state.YearsOfExperience} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.schoolId} onValueChange={(schoolId) => {this.setState({ schoolId: schoolId })}}
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
                                    selectedValue={this.state.GradeLevel} onValueChange={(level) => {this.setState({ GradeLevel: level })}}
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
                                    selectedValue={this.state.Rank} onValueChange={(Rank) => {this.setState({ Rank: Rank })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Ranks.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Post Held in School</Text>
                                <TextInput onChangeText={text => this.handleChangeText('PostHeld',text)} value={this.state.PostHeld} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year Posted to School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
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
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.PostingHistoryDate.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.PostingHistoryDate.length > 0 ? " Selected": "Add Posting History"}</Text>
                                </TouchableHighlight>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of Staff</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.TypeOfStaff} onValueChange={(TypeOfStaff) => {this.setState({ TypeOfStaff: TypeOfStaff })}}
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
                                    selectedValue={this.state.ClassOfStaff} onValueChange={(ClassOfStaff) => {this.setState({ ClassOfStaff: ClassOfStaff })}}
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
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.SubjectsTaught.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.SubjectsTaught.length > 0 ? " Selected": "Select Subjects"}</Text>
                                </TouchableHighlight>

                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Streams taught</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(true);}}>
                                    <Text style={{alignSelf:'center', fontSize: 15, backgroundColor: this.state.StreamsTaught.length > 0 ? '#E6DC82': '#F7F7F7'}}>{this.state.StreamsTaught.length > 0 ? " Selected": "Select Streams"}</Text>
                                </TouchableHighlight>

                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of trainings attended</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('NoOfTraining',text)} value={this.state.NoOfTraining}  style={styles.textInput}/>
                            </View>


                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.props.navigation.goBack()}}>
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

                              <MultiSelect data={this.state.Subjects} onSelectedItem={this.onSelectedItemsChange}  />

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
                            <View>

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
                                    <Text>Add Institution</Text>
                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelText}>Institution</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <TextInput onChangeText={text => this.handleChangeText('InstitutionName',text)} value={this.state.InstitutionName}  style={styles.textInput}/>
                                    </View>

                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelText}>Date</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('InstitutionDate',text)} value={this.state.InstitutionDate}  style={styles.textInput}/>
                                    </View>

                                    <View style={styles.buttonView}>
                                        <Button block style={styles.button} onPress={()=>{ this.addInstitution() }}>
                                                <Text style={styles.buttonText}>Add</Text>
                                        </Button>
                                    </View>
                                </View>

                                <View>
                                    <Text>All Institutions</Text>
                                    {
                                        this.state.InstitutionsAttended.map((v,key)=>{
                                            return (
                                                <View key={key}>
                                                    <Text>{v.name} - {v.date}</Text>
                                                    <Button onPress={()=>{ this.removeInstitution(key) }}>
                                                        <Text>Remove</Text>
                                                    </Button>
                                                </View>
                                            )
                                        })
                                    }
                                </View>

                               <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setInstitutionModalVisible(!this.state.institutionModalVisible);}}>
                                        <Text style={{alignSelf:'center', fontSize: 20}}>Save Records</Text>
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
                                    <Text>Add Posting History</Text>
                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelText}>Institution</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <TextInput onChangeText={text => this.handleChangeText('PostingName',text)} value={this.state.PostingName}  style={styles.textInput}/>
                                    </View>

                                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                        <Text style={styles.labelText}>Date</Text>
                                        <Text style={styles.Asterix}>*</Text>
                                        <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('PostingDate',text)} value={this.state.PostingDate}  style={styles.textInput}/>
                                    </View>

                                    <View style={styles.buttonView}>
                                        <Button block style={styles.button} onPress={()=>{ this.addPostingHistory() }}>
                                                <Text style={styles.buttonText}>Add</Text>
                                        </Button>
                                    </View>
                                </View>

                                <View>
                                    <Text>All Posting</Text>
                                    {
                                        this.state.PostingHistoryDate.map((v,key)=>{
                                            return (
                                                <View key={key}>
                                                    <Text>{v.name} - {v.date}</Text>
                                                    <Button onPress={()=>{ this.removePostingHistory(key) }}>
                                                        <Text>Remove</Text>
                                                    </Button>
                                                </View>
                                            )
                                        })
                                    }
                                </View>

                               <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPostingModalVisible(!this.state.postingModalVisible);}}>
                                        <Text style={{alignSelf:'center', fontSize: 20}}>Save Records</Text>
                                </TouchableHighlight>
                            </View>
                        </Modal>

                    </Content>
            </Container>
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
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold'
    },


    inputView: { width: '100%',alignItems: 'stretch'},
    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 18, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }

});
