import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import MovieEntry from "./movieEntry";

class MovieEntryList extends Component {
  state = {
    movies: [
      { id: 1, title: "Toy Story", date: "12/20/2020", stars: 4 },
      { id: 2, title: "The Godfather", date: "3/11/1974", stars: 5 },
      { id: 3, title: "Star Wars", date: "7/26/1977", stars: 4 },
      { id: 4, title: "Titanic", date: "8/9/2000", stars: 4 },
      { id: 5, title: "Jurassic Park", date: "4/14/1990", stars: 5 },
      { id: 6, title: "Jaws", date: "10/22/1973", stars: 3 },
      { id: 7, title: "Forrest Gump", date: "9/1/1994", stars: 2 },
      { id: 8, title: "Back to the Future", date: "3/16/1985", stars: 5 },
      { id: 9, title: "Parasite", date: "11/11/2018", stars: 5 },
      { id: 10, title: "Indiana Jones", date: "3/12/1982", stars: 4 },
    ],
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.movies.map((movie) => (
          <MovieEntry
            key={movie.id}
            title={movie.title}
            date={movie.date}
            stars={movie.stars}
          />
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
