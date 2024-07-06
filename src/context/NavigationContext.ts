import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { create } from 'zustand';
import { RootStackParamList } from '../App';

type NavigationStore = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> | null;
  setNavigation: (navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>) => void;
};

const useNavigationStore = create<NavigationStore>((set) => ({
  navigation: null,
  setNavigation: (navigation) => set({ navigation }),
}));

export default useNavigationStore;
