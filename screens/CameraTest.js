import React, { Component } from 'react'
import { Text, View, TouchableOpacity ,Dimensions} from 'react-native';
import { Button } from 'native-base';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraTest extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        isCameraVisible: false,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        if (this.camera) {
            const options = {
                quality: 1,
                base64: false
            };
            let photo = await this.camera.takePictureAsync(options)
            console.log("Photo", photo);

            // construct
            let formData = new FormData();
            formData.append("UploadFile", photo);

            this.setState({
                latestImage: photo.uri, // preview the photo that was taken
                isCameraVisible: false // close the camera UI after taking the photo
            });

            const personId = 1;
            fetch(`http://asbemis.com/api/images/${personId}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });

        }
    };

    render() {
        const { hasCameraPermission, isCameraVisible } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {!isCameraVisible
                        ?
                        <Button onPress={() => this.setState({ isCameraVisible: !this.state.isCameraVisible })}>
                            <Text>Capture Image</Text>
                        </Button>
                        :
                        <Camera style={{ flex: 1 }} type={this.state.type} ref={(cam) => {
                            this.camera = cam;
                        }}>
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                    flexDirection: 'row',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        flex: 0.5,
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        this.snap();
                                    }}>
                                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Take Picture </Text>
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    }
                </View>
            );
        }
    }
}

