import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { movies } from "./data";
import MoviePoster from "./MoviePoster";
import MoviePopup from "./MoviePopup";

export default class Movies extends Component {
  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0, // choose first day by default
    // Time chosen by user
    chosenTime: null
  };

  openMovie = movie => {
    this.setState({
      popupIsOpen: true,
      movie
    });
  };
  chooseDay = day => {
    this.setState({
      chosenDay: day
    });
  };

  chooseTime = time => {
    this.setState({
      chosenTime: time
    });
  };
  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
      chosenDay: 0,
      chosenTime: null
    });
  };
  bookTicket = () => {
    // Make sure they selected time
    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      // Close popup
      this.closeMovie();
      // Navigate away to Confirmation route
     this.props.navigation.navigate('Confirmation', {code: Math.random().toString(36).substring(6).toUpperCase()})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => (
            <MoviePoster movie={movie} onOpen={this.openMovie} key={index} />
          ))}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook={this.bookTicket}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
