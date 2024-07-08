// firebaseConfig.ts

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDyRvun2XW0wmv3Qk8TSHysjXQ0Hm4AWBw',
  authDomain: 'chillx-4c9e7.firebaseapp.com',
  projectId: 'chillx-4c9e7',
  storageBucket: 'chillx-4c9e7.appspot.com',
  messagingSenderId: '1036584526413',
  appId: '1:1036584526413:android:d10f65e7be4c6cb300b204',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
