// @flow
import React, { Component } from 'react'
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to LumoHacks 2017</Text>
        <ScrollView>
          <Text>
            On iOS, a React Native ScrollView uses a native UIScrollView. On Android, it uses a native ScrollView. On
            iOS, a React Native Image uses a native UIImageView. On Android, it uses a native ImageView. React Native
            wraps the fundamental native components, giving you the performance of a native app, plus the clean design
            of React.
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
