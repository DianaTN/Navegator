import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScreenTwo from './screens/ScreenTwo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                // Esto es lo que heredará luego en el icono
                tabBarActiveTintColor: 'black'
            }}>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        // Hereda el tamaño y el color del padre; por defecto se pone azul
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Other" component={ScreenTwo} />
        </Tab.Navigator>
    );
}