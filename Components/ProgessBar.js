import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ percentage }) {
  // Calculate the width of the progress bar based on the percentage
  const progressWidth = `${percentage}%`;

  // Determine the color of the progress bar based on the percentage
  let progressBarColor = 'black'; // Default color
  if (percentage >= 70) {
    progressBarColor = 'black'; // Change color to green when 70% or more completed
  } else if (percentage >= 50) {
    progressBarColor = 'black'; // Change color to yellow when 50% or more completed
  } else if (percentage >= 30) {
    progressBarColor = 'black'; // Change color to orange when 30% or more completed
  } else {
    progressBarColor = 'black'; // Change color to red when less than 30% completed
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: progressWidth, backgroundColor: progressBarColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
});
