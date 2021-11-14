import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB-xiKbFwyFtMXyerWELJEhshlHbs5e1hE',
  authDomain: 'netflix-clone-7c6c3.firebaseapp.com',
  projectId: 'netflix-clone-7c6c3',
  storageBucket: 'netflix-clone-7c6c3.appspot.com',
  messagingSenderId: '195872509056',
  appId: '1:195872509056:web:b26069618881423fa5ea65',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
