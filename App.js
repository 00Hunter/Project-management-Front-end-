import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import storeconfig from './redux/store'
import BottomNavigation from './navigation/BottomNavigation';
import TaskScreen from './Screens/TaskScreen';



const store1=storeconfig();
export default function App() {
  return (
      <Provider store={store1}>
      <NavigationContainer>
      <BottomNavigation/>
      </NavigationContainer>
      </Provider>
  );
}


