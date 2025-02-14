import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, child, onValue } from "firebase/database";
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

interface DatosDelPaciente {
    nombreDelPaciente: string;
    edadDelPaciente: string;
    generoDelPaciente: string;
    NumeroTelPaciente: string;
    lugarDeResidenciaDelPaciente: string;
};

interface Usuario {
    nombreDelCuidador: string;
    edadDelCuidador: string;
    relacionConElPaciente: string;
    NumeroTelCuidador: string;
    lugarDeResidenciaDelCuidador: string;
    correoElectronico: string;
    password: string;
};

//funciones para usar
const registrarPaciente = ( {nombreDelPaciente,edadDelPaciente,generoDelPaciente,NumeroTelPaciente,lugarDeResidenciaDelPaciente}:DatosDelPaciente ) => {
    push(ref(db, 'pacientes/'), {
        nombreDelPaciente,
        edadDelPaciente,
        generoDelPaciente,
        NumeroTelPaciente,
        lugarDeResidenciaDelPaciente,
        })
      .catch((error) => console.error("Error al guardar datos:", error));
};

const registrarUsuario = ( {nombreDelCuidador,edadDelCuidador,relacionConElPaciente,NumeroTelCuidador,lugarDeResidenciaDelCuidador,correoElectronico,password}:Usuario ) => {
    push(ref(db, 'usuarios/'), {
        nombreDelCuidador,
        edadDelCuidador,
        relacionConElPaciente,
        NumeroTelCuidador,
        lugarDeResidenciaDelCuidador,
        correoElectronico,
        password,
        })
      .catch((error) => console.error("Error al guardar datos:", error));
}
 export {registrarPaciente, registrarUsuario};