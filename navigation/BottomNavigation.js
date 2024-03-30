import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskDashboard from '../Screens/TaskDashboard';
import ReportScreen from '../Screens/ReportScreen';
import ScreenNavigation from './stacknavigator' 
import CalendarScreen from '../Screens/CalendarScreen';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="Home" component={ScreenNavigation} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Reports" component={ReportScreen} />
    </Tab.Navigator>
  );
}
export default BottomNavigation;