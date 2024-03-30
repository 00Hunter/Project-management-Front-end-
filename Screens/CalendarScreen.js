import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import moment from 'moment'
import Date from '../Components /Date'
import CustomCalendar from '../Components /CustomCalendar'
import {useSelector} from 'react-redux'


const CalendarScreen = ({ onSelectDate, selected }) => {
  


  const [dates, setDates] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState()

 


  useEffect(() => {
  })

  return (
    <View>
      <View style={styles.centered}>
        <Text style={styles.title}>Current month</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <CustomCalendar onDayPress={()=>console.log()} />
          {/* <Button title='press' onPress={()=>console.log()}/> */}
        </View>
      </View>
      </View>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  centered: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    width: '100%',
    padding: 20,
  },
  scroll: {
    // height: 150,
  },
})