import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native';

var thisObj;

export default class MultiSelect extends React.Component {
    constructor(props) {
      super(props);

  this.state = {
    selectedItems: {}
  };
}

onItemPressed(item) {
    var oldSelectedItems = this.state.selectedItems;
    var itemState = oldSelectedItems[item.key];
    if(!itemState) {
        oldSelectedItems[item.key] = true;
    }
    else {
        var newState = itemState? false: true;
        oldSelectedItems[item.key] = newState;
    }
    this.setState({
        selectedItems: oldSelectedItems,
    });
}

componentDidMount() {
    thisObj = this;
}

getStyle(item) {
    try {
        console.log(thisObj.state.selectedItems[item.key]);
        return thisObj.state.selectedItems[item.key]? styles.itemTextSelected : styles.itemText;
    } catch(e) {
        return styles.itemText;
    }
}

render() {
    return (
        <View style={styles.rootView}>
            <FlatList style={styles.list}
                extraData={this.state}
                data={this.props.data}
                  renderItem={({item}) =>
                    <TouchableHighlight onPress={this.onItemPressed.bind(this, item)} underlayColor='#f00'>
                        <Text style={this.getStyle(item)}>{item.key}</Text>
                    </TouchableHighlight>
                  }
                />
        </View>
        );
}
}

const styles = StyleSheet.create({
rootView : {

},
itemText: {
    padding: 16,
    color: "#fff"
},
itemTextSelected: {
    padding: 16,
    color: "#fff",
    backgroundColor: '#f00'
},
list: {

}
});