import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarCard = ({ heading, tag }) => {


  const PastelColors = [
    '#D7E7CD', // Pastel green
    '#F5F5F5', // Pastel gray
    '#E3ECD1', // Pastel olive
    '#F6F1D9', // Pastel cream
    '#FBF8D1', // Pastel yellow
    '#D6E9F5', // Pastel blue
    '#F7DEE8', // Pastel pink
    '#E8D7ED', // Pastel purple
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.tagsContainer}>
          <Text style={styles.tag}>{tag}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#ffffff',
    height:100,
    width:"95%",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth:1
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:3,
    // backgroundColor:""
  },
  tag: {
    color:"white",
    backgroundColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
});

export default CalendarCard;
