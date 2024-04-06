import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import moment from 'moment'
import Date from '../Components /Date'
import CustomCalendar from '../Components /CustomCalendar'
import {useSelector} from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign';

const CalendarScreen = ({ onSelectDate, selected }) => {
  


  const [dates, setDates] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState()

 


  useEffect(() => {
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        {/* <View></View> */}
      <Icon name='left' size={20} />
        <Text style={styles.title}>Schedule</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <CustomCalendar onDayPress={()=>console.log()} />
          {/* <Button title='press' onPress={()=>console.log()}/> */}
        </View>
      </View>
      </SafeAreaView>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  container:{

  },
  centered: {
    // justifyContent: 'center',
    marginLeft:20,
    flexDirection:"row",
    alignItems: 'center',
  },
  title: {
    alignItems:"center",
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:20
  },
  dateSection: {
    width: '100%',
    padding: 20,
  },
  scroll: {
    // height: 150,
  },
})