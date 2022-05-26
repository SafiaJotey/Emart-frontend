import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
const InitializationAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default InitializationAuthentication;
