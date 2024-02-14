import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScreenTwo from './screens/ScreenTwo';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Other" component={ScreenTwo} />
        </Tab.Navigator>
    );
}