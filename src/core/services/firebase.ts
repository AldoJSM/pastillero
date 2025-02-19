import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, child, onValue } from "firebase/database";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTI_c0VvtRWYrKgN2spyLEkmKM9biHwQw",
  authDomain: "pastillero-500bf.firebaseapp.com",
  databaseURL: "https://pastillero-500bf-default-rtdb.firebaseio.com",
  projectId: "pastillero-500bf",
  storageBucket: "pastillero-500bf.firebasestorage.app",
  messagingSenderId: "792384672960",
  appId: "1:792384672960:web:8c6913646a3fa8e8f64925",
  measurementId: "G-K28PZH6HCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth =getAuth(app);

//interfaces para obtener los datos de las vistas
interface DatosDelPaciente {
    nombreDelPaciente: string;
    edadDelPaciente: string;
    generoDelPaciente: string;
    numeroTelPaciente: string;
    lugarDeResidenciaDelPaciente: string;
};

interface Usuario {
    nombreDelCuidador: string;
    edadDelCuidador: string;
    relacionConElPaciente: string;
    numeroTelCuidador: string;
    lugarDeResidenciaDelCuidador: string;
    correoElectronico: string;
    password: string;
};

interface Login{
  correo:string,
  password:string
}
//funciones para usar
const registrarPaciente = ( {nombreDelPaciente,edadDelPaciente,generoDelPaciente,numeroTelPaciente,lugarDeResidenciaDelPaciente}:DatosDelPaciente ) => {
    push(ref(db, 'pacientes/'), {
        nombreDelPaciente,
        edadDelPaciente,
        generoDelPaciente,
        numeroTelPaciente,
        lugarDeResidenciaDelPaciente,
        })
      .catch((error) => console.error("Error al guardar datos:", error));
};

const registrarUsuario = async ( {nombreDelCuidador,edadDelCuidador,relacionConElPaciente,numeroTelCuidador,lugarDeResidenciaDelCuidador,correoElectronico,password}:Usuario ) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, correoElectronico, password);
    
    const userId = userCredential.user.uid;
    await push(ref(db, 'usuarios/'), {
      userId,
      nombreDelCuidador,
      edadDelCuidador,
      relacionConElPaciente,
      numeroTelCuidador,
      lugarDeResidenciaDelCuidador,
      })
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
}

const loguearse=async({correo,password}:Login)=>{
  try {
    const userCredential= await signInWithEmailAndPassword(auth, correo, password);
    return {success: true, user: userCredential.user}
  } catch (error) {
    console.log("No logueado", error)
    return {success: false, error: error}
  }
}

//exportamos las funciones
 export {registrarPaciente, registrarUsuario, loguearse};