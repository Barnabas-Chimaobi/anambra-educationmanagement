import React, { Component } from "react";
import {View,KeyboardAvoidingView, FlatList,TextInput} from "react-native";
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { connect } from 'react-redux'
import * as  biodataActions from "../../actions/index";

class CodeView extends Component {

    static navigationOptions = {
        header: null,
    };

   componentDidMount() {
    this.props.fetchSchoolList();
   }

    render() {

        console.log("Biodata",this.props.schools)
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
                 {/* <FlatList data={this.props.schools}
          renderItem={({item}) => <Text style={{padding:10, height:44, fontSize:18}}>{item.name}  - {item.code}</Text>}
        /> */}

                <Content>
                <List>
                   {
                       this.props.schools.map((school) => {

                            return (
                                <ListItem key={school.id}>
                                    <Text>{school.name} - {school.code}</Text>
                                </ListItem>
                            )

                       })
                   }
                </List>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    schools:  state.utility.schools
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSchoolList: () => dispatch(biodataActions.fetchSchoolList()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CodeView)
