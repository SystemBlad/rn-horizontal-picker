/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import _ from 'lodash';
import HorizontalScrollPicker from './HorizontalScrollPicker/HorizontalScrollPicker';

const App: () => React$Node = () => {
  const timeItems = _.map(
    ['2018-2019', '2019-2020', '2020-2021'],
    (time, idx) => {
      return {
        label: time,
        value: idx,
      };
    },
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HorizontalScrollPicker
        items={timeItems}
        selectedTextStyle={styles.emoSelected}
        initialIdx={2}
        onSelect={(selectI) => console.log(selectI)}
        rowItems={3}
      />

      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 18,
  },
  selectedItem: {
    flex: 1,
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    borderWidth: 0, //indicator line
    borderColor: '#000',
    borderRadius: 12,
  },
  emoSelect: {
    fontFamily: 'AGaramondPro-Regular',
  },
  emoSelected: {
    fontFamily: 'AGaramondPro-Regular',
    fontWeight: 'bold',
  },
});

export default App;
