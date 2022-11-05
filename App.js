import HomeStackScreen from './navigation/stacks/HomeStackScreen';
import { BackgrounddProvider } from './context/BackgroundContext';

export default function App() {
  return (
    <BackgrounddProvider>
      <HomeStackScreen/>
    </BackgrounddProvider>
  );
}