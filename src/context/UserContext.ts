import {create} from 'zustand';

type User = {
  user: any;
  setUser: (user: any) => void;
};

const useUserStore = create<User>(set => ({
  user: null,
  setUser: user => set({user}),
}));

export default useUserStore;
