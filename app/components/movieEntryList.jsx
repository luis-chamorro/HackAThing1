import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import MovieEntry from "./movieEntry";

class MovieEntryList extends Component {
  state = {
    movies: [
      { id: 1, title: "Soul", date: "12/20/2020" },
      { id: 2, title: "The Godfather", date: "3/11/1974" },
      { id: 3, title: "Star Wars", date: "7/26/1977" },
      { id: 4, title: "Titanic", date: "8/9/2000" },
      { id: 5, title: "Jurassic Park", date: "4/14/1990" },
      { id: 6, title: "Jaws", date: "10/22/1973" },
    ],
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.movies.map((movie) => (
          <MovieEntry key={movie.id} title={movie.title} date={movie.date} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
});

export default MovieEntryList;
