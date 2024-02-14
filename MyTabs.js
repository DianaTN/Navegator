import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScreenTwo from './screens/ScreenTwo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    )
                }} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Other" component={ScreenTwo} />
        </Tab.Navigator>
    );
}