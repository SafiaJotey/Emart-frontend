import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import InitializationAuthentication from '../firebase/firebase.init';
InitializationAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
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
        setUserName(data.name);
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
  const signIn = (data, location, navigate) => {
    console.log(user);
    console.log(data);
    setLoading(true);

    const redirect_uri = location?.state?.from || '/';

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        // Signed in
        const user = result.user;

        navigate(redirect_uri);
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorAlert(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //sign in with google
  const signinWithGoogle = (location, navigate) => {
    const redirect_uri = location?.state?.from || '/';
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(redirect_uri);
      })
      .catch((error) => {});
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
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
        setUser({});
        console.log('no user');
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const setUserName = (name) => {
    console.log(name);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        console.log('update');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
