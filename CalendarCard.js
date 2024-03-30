import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarCard = ({ heading, tag }) => {
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
  card: {
    height:100,
    width:"95%",
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
});

export default CalendarCard;
