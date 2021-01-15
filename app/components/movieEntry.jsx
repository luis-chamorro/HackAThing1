import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";

class MovieEntry extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.movieText}>{this.props.title}</Text>
        <Image
          resizeMode="contain"
          source={require("../assets/stars.png")}
          style={styles.stars}
        />
        <Text style={styles.dateText}>{this.props.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 85,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
  dateText: {
    position: "absolute",
    fontSize: 15,
    right: 10,
    top: 15,
  },
  movieText: {
    width: "100%",
    height: "50%",
    fontSize: 25,
    left: 10,
    top: 10,
    paddingBottom: 5,
  },
  stars: {
    height: "40%",
    width: 100,
    left: 10,
  },
});

export default MovieEntry;
