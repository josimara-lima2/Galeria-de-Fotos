import { initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIBASE_PROFECTID,
    storageBucket: process.env.REACT_APP_FIBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIBASE_MESSAGEINGSENDERID,
    appId: process.env.REACT_APP_FIBASE_APPID
  
  };

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)
  