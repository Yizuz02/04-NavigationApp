import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <HamburgerMenu/>
      <Text>Tab1Screen</Text>
     <IonIcon name='rocket-outline'/>
    </View>
  )
}