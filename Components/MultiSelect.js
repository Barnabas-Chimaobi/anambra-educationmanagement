import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id,title)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#E6DC82' : '#F7F7F7' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function MultiSelect(props) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id,title) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
      props.onSelectedItem(id,title);
    },
    [selected],
  );

  return (
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.name}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 15,
  },
});
