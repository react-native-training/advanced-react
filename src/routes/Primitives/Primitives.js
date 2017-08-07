import React from 'react';

import { View, Text, StyleSheet } from 'react-primitives';

/*
*  Animated: Pulled from the animated project.
*  StyleSheet: Follows React Native's StyleSheet API.
*  View: A base component for Layout.
*  Text: A base component for Text rendering.
*  Image: A base component for Image rendering.
*  Touchable: A base component for interaction.
*/

export default class Primitives extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  title: {
    fontSize: 34
  }
})
