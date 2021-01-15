import React from 'react';
import { ScrollView, StyleSheet, View, Text, Platform } from 'react-native';
import MovieEntryList from '../components/movieEntryList';

function MoviesListScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.appTitle}>Hack a Thing</Text>
            </View>
            <MovieEntryList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center"
    },

    titleBox: {
        width: "100%",
        height: "13%",
        backgroundColor: "#1fa5ff",
        flexDirection: "column",
        alignItems: "center",
        borderBottomColor: "blue",
        borderBottomWidth: 3
    },

    appTitle: {
        fontSize: 40,
        fontWeight: "bold",
        top: Platform.OS === "android" ? 30 : 50
    }
})

export default MoviesListScreen;