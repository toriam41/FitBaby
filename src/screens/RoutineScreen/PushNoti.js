import React, { Fragment } from 'react';
import PushController from './PushController';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, FlatList } from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';

// Dummy data for list, we'll replace this with data received from push
let pushData = [
  {
    title: "First push",
    message: "First push message"
  },
  {
    title: "Second push",
    message: "Second push message"
  }
];

_renderItem = ({ item }) => (
  <View key={item.title}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.message}>{item.message}</Text>
  </View>
);

const PushNoti = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        < Header/> 
        <View style={styles.listHeader}>
          <Text>Push Notifications</Text>
        </View>
        <View style={styles.body}>
        <FlatList
          data={pushData}
          renderItem={(item ) => this._renderItem(item)}
          keyExtractor={(item ) => item.title}
        />
        </View>
      </SafeAreaView>
      <PushController />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flexGrow: 1
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default PushNoti;
