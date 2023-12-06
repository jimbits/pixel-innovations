  
  
  import admin from "firebase-admin"
  import  {initializeApp, getApps} from "firebase-admin/app"
  import {serviceKey }from "./serviceKey" 
  
  
  
  
  if(!getApps().length){
    initializeApp({
      credential: admin.credential.cert(serviceKey),
      databaseURL: "https://pixel-innovations-default-rtdb.firebaseio.com/",
      databaseAuthVariableOverride: {
        uid: "your-service-worker"
      }
    });
  }

  // app/api/test/route.js
  const db = admin.database()
  
  export {db}
 