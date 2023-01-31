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
  // const [alertVisible, setIsAlertVisible] = useState(false);
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //register a new user
  const signUp = (data) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, data.email, data.password);
  };
  //sign in withEmailPassword
  const signinWithEmail = (data) => {
    setLoading(true);
    const { email, password } = data;
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const signinWithGoogle = (location, navigate) => {
    const redirect_uri = location?.state?.from || '/';
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console(user);

        navigate(redirect_uri);
      })
      .catch((error) => {});
    setLoading(false);
  };

  // Logout
  const logOut = () => {
    setLoading(true);

    return signOut(auth)
      .then(() => {
        setUser({});
        localStorage.removeItem('token');
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        // setSuccessAlert('');
        // setErrorAlert('');
        setLoading(false);
      });
  };
  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem('token'));

  //   fetch('https://emart-98vu.onrender.com/api/v1/auth/getUser', {
  //     headers: { authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setUser(data.others);
  //       setUser(data.data);
  //     });
  // }, [userTrue.email]);
  const updateUserProfile = (name) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  //observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = currentUser.uid;
        setUser(currentUser);
        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    loading,
    user,
    updateUserProfile,
    signinWithEmail,
    signinWithGoogle,
    signUp,
    logOut,
    // successAlert,
    // errorAlert,
    // alertVisible,
    // setIsAlertVisible,
  };
};
export default useFirebase;
