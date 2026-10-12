import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import './global.css';
import Home from '@/pages/Home';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
