import { BarChart,PieChart } from "react-native-gifted-charts";
import {View} from 'react-native'
 
    
       
    export default function GraphTest({data}){
        return (
            <View>
                <PieChart
        donut
        showText
        textColor="black"
        innerRadius={70}
        // showTextBackground
        // textBackgroundColor="white"
        // textBackgroundRadius={22}
        data={data}
        />
            </View>
        );
    }
    
