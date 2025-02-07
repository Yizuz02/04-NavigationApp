import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor: globalColors.background,
    }}
    screenOptions={{
        //headerShown: false,
        tabBarLabelStyle: {
            marginBottom: 5,
        },
        headerStyle: {
            elevation:0,
            borderColor: 'transparent',
            shadowColor: 'transparent',
        }, tabBarStyle:{
            borderTopWidth: 0,
            elevation:0,
        }
    }}>
      <Tab.Screen name="Tab1" options={{title:'Tab1', tabBarIcon: ({color})=>(<IonIcon name="fast-food-outline" color={color}/>)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title:'Tab2', tabBarIcon: ({color})=>(<IonIcon name="person-circle-outline" color={color}/>)}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{title:'Tab3', tabBarIcon: ({color})=>(<IonIcon name="grid-outline" color={color}/>)}} component={StackNavigator} />
    </Tab.Navigator>
  );
}