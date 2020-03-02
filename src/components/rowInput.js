import { View, Text, TextInput,StyleSheet} from "react-native";
import {styles} from "../constants/styles";

export const RowInput = (props) => {
    
    return (
        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
        <Text style={styles.labelText}>{props.displayName}</Text>
        <Text style={styles.Asterix}>*</Text>
        <TextInput  onChangeText={text => this.handleBioChangeText('First_Name', text)} value={this.state.Biodata.person.First_Name} style={styles.textInput}/>
        </View>
    );

}


