import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDkjLakymNC8qlkHv1ZufDB3sFNfyCRXio",
    authDomain: "flavourhealth-bb0be.firebaseapp.com",
    databaseURL: "https://flavourhealth-bb0be-default-rtdb.firebaseio.com",
    projectId: "flavourhealth-bb0be",
    storageBucket: "flavourhealth-bb0be.appspot.com",
    messagingSenderId: "582404863706",
    appId: "1:582404863706:web:feaf3f662c6cb569f597e3",
    measurementId: "G-73D57QN4D4"
  };

  const app =getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app,firestore,storage};
