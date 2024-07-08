import {create} from 'zustand';
import {CombinedNavigationProp} from '../App';

type NavigationStore = {
  navigation: CombinedNavigationProp | null;
  setNavigation: (navigation: CombinedNavigationProp) => void;
};

const useNavigationStore = create<NavigationStore>(set => ({
  navigation: null,
  setNavigation: navigation => set({navigation}),
}));

export default useNavigationStore;
