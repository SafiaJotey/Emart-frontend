import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import InitializationAuthentication from '../firebase/firebase.init';
InitializationAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [successAlert, setSuccessAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //register a new user
  const signUp = (data) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        // Signed in
        const user = result.user;
        user.displayName = data.name;
        console.log(user);
        setSuccessAlert('user created successfully');
        setErrorAlert('');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setSuccessAlert('');
        setErrorAlert(errorMessage);
      })
      .finally(() => {
        setSuccessAlert('');
        setErrorAlert('');
        setLoading(false);
      });
  };
  //Signin with email and password
  const signIn = (email, password) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSuccessAlert('successfully signed in');
        setErrorAlert('');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccessAlert('');
        setErrorAlert(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //sign in with google
  const signinWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {});
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setSuccessAlert('');
        setErrorAlert('');
        setLoading(false);
      });
  };

  //observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log('user state');
      } else {
        console.log('no user');
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    loading,
    user,
    signUp,
    signIn,
    signinWithGoogle,
    logOut,
    successAlert,
    errorAlert,
  };
};
export default useFirebase;
