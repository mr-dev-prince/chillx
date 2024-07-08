import {firebase} from '../config/firebaseConfig';

export interface UserData {
  email: string;
  password: string;
}

export const signup = async ({email, password}: UserData) => {
  try {
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    return {message: 'User Created!', data};
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('Email address is invalid!');
    }

    console.error('signup error', error);
  }
};

export const login = async ({email, password}: UserData) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log('User login successfully!!');
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      console.log('No user found with that email!');
    }

    if (error.code === 'auth/wrong-password') {
      console.log('Incorrect password!');
    }

    console.error('Login error', error);
  }
};
