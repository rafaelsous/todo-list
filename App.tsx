import { SafeAreaView } from 'react-native'
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      { fontsLoaded ? <Home /> : <Loading /> }
    </SafeAreaView>
  )
}