import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View, StatusBar } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <>
      <View style={styles.statusbar}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
      </View>
      <WebView
        style={styles.container}
        source={{ uri: "http://localhost:3000/auth" }}
        allowsBackForwardNavigationGestures={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    backgroundColor: 'transparent',
  }
});
