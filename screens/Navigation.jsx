import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CityListScreen} from "./CityListScreen";
import {CityScreen} from "./CityScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

//<Routes> ... </Routes> => stack.nav
export const Navigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name="CityListScreen" component={CityListScreen} options={{title:'Города'}}/>
                    <Stack.Screen name="CityScreen" component={CityScreen} options={{title:'Город'}}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
}