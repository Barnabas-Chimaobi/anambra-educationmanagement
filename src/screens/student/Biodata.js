import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Picker,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import {
  Container,
  Content,
  Form,
  Button,
  DatePicker,
  Switch,
} from "native-base";
import { styles } from "../../constants/styles";
import { connect } from "react-redux";
import * as biodataActions from "../../actions/index";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import NetInfo from "@react-native-community/netinfo";

class StudentBiodata extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    isCameraVisible: false,
    photo: null,
  };
  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });

    this.props.fetchStates();
    this.props.fetchGenders();
    this.props.fetchLgas();

    if (this.props.Biodata && this.props.Biodata.stateId > 0) {
      this.props.fetchLgasByState(this.props.Biodata.stateId);
    }

    CheckConnectivity = () => {
      // For Android devices
      if (Platform.OS === "android") {
        NetInfo.fetch().then((state) => {
          if (state.isConnected) {
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

  snap = async () => {
    if (this.camera) {
      const options = {
        quality: 1,
        base64: false,
      };
      let photo = await this.camera.takePictureAsync(options);
      this.setState({ photo: photo });

      // construct
      let formData = new FormData();
      formData.append("UploadFile", photo);

      this.setState({
        latestImage: photo.uri, // preview the photo that was taken
        isCameraVisible: false, // close the camera UI after taking the photo
      });

      const personId = 1;
      // fetch(`http://asbemis.com/api/images/${personId}`, {
      //     method: "POST",
      //     headers: {
      //         'Content-Type': 'multipart/form-data'
      //     },
      //     body: formData
      // })
      // .then(res => res.json())
      // .then(res => {
      //     console.log(res);
      // })
      // .catch(error => {
      //     console.log(error);
      // });
    }
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  updateGender = (Sex) => {
    this.props.updateBioDataField("sexId", Sex);
  };

  updateStateOrigin = (StateOrigin) => {
    //Call Method to load LGA for the selected state
    console.log("State Changed!");
    this.getLgaForState(StateOrigin);
  };

  getLgaForState = (stateId) => {
    this.props.updateBioDataField("stateId", stateId);
    this.props.fetchLgasByState(stateId);
  };

  updateLga = (Lga) => {
    this.props.updateBioDataField("lgaId", Lga);
  };

  toggleliveIn = (value) => {
    this.props.addStudentRecdata("isBoarding", value);
  };

  setDate = (newDate) => {
    this.props.updateBioDataField("dateOfBirth", newDate.toISOString());
  };

  handleBioChangeText = (inputName, text) => {
    this.props.updateBioDataField(inputName, text);
  };

  handleChangeText = (inputName, text) => {
    this.props.updateNokDataField(inputName, text);
  };

  checkInputFields = () => {
    if (
      !this.props.Biodata.person.firstName &&
      !this.props.Biodata.person.surname
    ) {
      alert("First and Last Names are compulsory!");
      return;
    }

    if (!this.props.Biodata.person.dateOfBirth) {
      alert("Date of Birth is compulsory!");
      return;
    }

    if (
      !this.props.Biodata.person.stateId &&
      !this.props.Biodata.person.lgaId
    ) {
      alert("props of Origin & local government are compulsory!");
      return;
    }

    if (!this.props.Biodata.person.sexId) {
      alert("sex is compulsory!");
      return;
    }

    if (!this.props.Biodata.person.hometown) {
      alert("Hometown is compulsory!");
      return;
    }

    if (!this.props.Biodata.person.address) {
      alert("Residential Address is compulsory!");
      return;
    }

    if (this.props.Biodata.person.stateId <= 0) {
      alert("State is compulsory!");
      return;
    }

    if (this.props.Biodata.person.lgaId <= 0) {
      alert("LGA is compulsory!");
      return;
    }

    if (!this.props.Biodata.person.nextOfKin.name) {
      alert("Next of Kin Name is compulsory!");
      return;
    }

    if (!this.props.Biodata.person.nextOfKin.phone) {
      alert("Next of Kin Phone Number is compulsory!");
      return;
    } else {
      // let reg = /^\d+$/ ;
      // if (reg.test(this.props.Biodata.person.nextOfKin.phone) || this.props.Biodata.person.nextOfKin.phone === ''){
      //     const {Biodata} = this.props;
      //     Biodata.person.nextOfKin.phone = " ";
      //     this.setState({ Biodata : Biodata})
      //     alert("Phone number must be numeric");
      // }
    }

    if (!this.props.Biodata.person.nextOfKin.address) {
      alert("Next of Kin Adress is compulsory!");
      return;
    }

    if (!this.props.Biodata.person.email) {
      // const {Biodata} = this.props;
      // Biodata.person.email = "-";
      // this.setState({ Biodata : Biodata})
    } else {
      // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      // if(reg.test(this.props.Biodata.person.email) === false)
      // {
      //     alert("Email is Not valid!");
      //     return;
      // }
    }

    if (!this.props.Biodata.person.nextOfKin.email) {
      // const {Biodata} = this.props;
      // Biodata.person.nextOfKin.email = "-";
      // this.setState({ Biodata : Biodata})
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.props.Biodata.person.nextOfKin.email) === false) {
        alert("Email is Not valid!");
        return;
      }
    }

    this.props.navigation.navigate("OtherData");
  };

  render() {
    const { hasCameraPermission, isCameraVisible, photo } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <Container>
            <View
              style={{ width: "100%", backgroundColor: "#E6DC82", padding: 10 }}
            >
              <Text style={styles.headerText}>New Student Information</Text>
            </View>

            <Content>
              <View
                style={{
                  width: "85%",
                  borderBottomColor: "#333",
                  borderBottomWidth: 1,
                  margin: 10,
                  marginLeft: 30,
                }}
              >
                <Text style={styles.subText}>Personal Details</Text>
              </View>

              <Form
                style={{ width: "75%", marginBottom: 40, alignSelf: "center" }}
              >
                {hasCameraPermission === false ? (
                  <Text>No access to camera</Text>
                ) : !isCameraVisible ? (
                  <View
                    style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                  >
                    <Button
                      block
                      style={styles.button}
                      onPress={() =>
                        this.setState({
                          isCameraVisible: !this.state.isCameraVisible,
                        })
                      }
                    >
                      <Text>Add Image</Text>
                    </Button>
                  </View>
                ) : (
                  <Camera
                    style={{ flex: 1, height: 250 }}
                    type={this.state.type}
                    ref={(cam) => {
                      this.camera = cam;
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "transparent",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flex: 0.5,
                          alignSelf: "center",
                          alignItems: "center",
                          backgroundColor: "#098BD3",
                        }}
                        onPress={() => {
                          this.snap();
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            marginBottom: 10,
                            color: "white",
                          }}
                        >
                          {" "}
                          Take Picture{" "}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Camera>
                )}
                {photo !== null && photo.uri ? (
                  <View
                    style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                  >
                    <Image
                      style={{ height: 250 }}
                      source={{ uri: photo.uri }}
                    />
                  </View>
                ) : null}

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>First Name</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleBioChangeText("firstName", text)
                    }
                    value={this.props.Biodata.person.firstName}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Last Name</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleBioChangeText("surname", text)
                    }
                    value={this.props.Biodata.person.surname}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Other Name</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleBioChangeText("otherName", text)
                    }
                    value={this.props.Biodata.person.otherName}
                    style={styles.textInput}
                  />
                </View>
                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Gender</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <Picker
                    selectedValue={this.props.Biodata.person.sexId}
                    onValueChange={this.updateGender}
                    style={{
                      height: 35,
                      width: 150,
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {this.props.Genders.map((v, key) => {
                      return (
                        <Picker.Item label={v.gender} key={key} value={v.id} />
                      );
                    })}
                  </Picker>
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
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

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>State of Origin</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <Picker
                    selectedValue={this.props.Biodata.person.stateId}
                    onValueChange={this.updateStateOrigin}
                    style={{
                      height: 35,
                      width: 150,
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {this.props.States.map((v) => {
                      return (
                        <Picker.Item label={v.name} key={v.id} value={v.id} />
                      );
                    })}
                  </Picker>
                </View>
                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>L.G.A</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <Picker
                    selectedValue={this.props.Biodata.person.lgaId}
                    onValueChange={this.updateLga}
                    style={{
                      height: 35,
                      width: 150,
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {this.props.Lgas.map((v, key) => {
                      return (
                        <Picker.Item label={v.name} key={key} value={v.id} />
                      );
                    })}
                  </Picker>
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Hometown</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleBioChangeText("hometown", text)
                    }
                    value={this.props.Biodata.person.hometown}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Residential Address</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleBioChangeText("address", text)
                    }
                    value={this.props.Biodata.person.address}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Permanent Address</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleBioChangeText("permanentAddress", text)
                    }
                    value={this.props.Biodata.person.permanentAddress}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>
                    Do you live within the school ?
                  </Text>
                  <Switch
                    onValueChange={this.toggleliveIn}
                    value={this.props.Biodata.studentRecords[0].isBoarding}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Phone Number</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      this.handleBioChangeText("phone", text)
                    }
                    value={this.props.Biodata.person.phone}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Next of Kin</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) => this.handleChangeText("name", text)}
                    value={this.props.Biodata.person.nextOfKin.name}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Next of Kin Address</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleChangeText("address", text)
                    }
                    value={this.props.Biodata.person.nextOfKin.address}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                  <Text style={styles.Asterix}>*</Text>
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      this.handleChangeText("phone", text)
                    }
                    value={this.props.Biodata.person.nextOfKin.phone}
                    style={styles.textInput}
                  />
                </View>

                <View
                  style={{ paddingTop: 5, margin: 5, flexDirection: "row" }}
                >
                  <Text style={styles.labelText}>Email</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.handleChangeText("email", text)
                    }
                    value={this.props.Biodata.person.nextOfKin.email}
                    style={styles.textInput}
                  />
                </View>

                <View style={styles.buttonViewRight}>
                  <Button
                    block
                    style={styles.button}
                    onPress={() => {
                      this.checkInputFields(), CheckConnectivity();
                    }}
                  >
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
}

const mapStateToProps = (state) => ({
  Biodata: state.students,
  States: state.utility.states,
  Lgas: state.utility.lgas,
  Genders: state.utility.genders,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateBioDataField: (field, value) =>
      dispatch(biodataActions.addStudentBiodata(field, value)),
    updateNokDataField: (field, value) =>
      dispatch(biodataActions.addStudentNokdata(field, value)),
    addStudentRecdata: (field, value) =>
      dispatch(biodataActions.addStudentRecdata(field, value)),
    fetchStates: () => dispatch(biodataActions.fetchStatesList()),
    fetchLgas: () => dispatch(biodataActions.fetchLgasList()),
    fetchGenders: () => dispatch(biodataActions.fetchGendersList()),
    fetchLgasByState: (stateId) =>
      dispatch(biodataActions.fetchStateLgasList(stateId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentBiodata);
