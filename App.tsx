import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Home } from './src/screen/Home';


import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter'
import { Loading } from './src/Components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <Home/> : <Loading/> }
    </ThemeProvider>
  )
}

