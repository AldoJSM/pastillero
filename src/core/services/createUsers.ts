import { ref, push, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { db, auth } from "./firebase";

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

//funciones para usar
export const registrarPaciente = ({ nombreDelPaciente, edadDelPaciente, generoDelPaciente, numeroTelPaciente, lugarDeResidenciaDelPaciente }: DatosDelPaciente) => {


  push(ref(db, 'pacientes/'), {
    nombreDelPaciente,
    edadDelPaciente,
    generoDelPaciente,
    numeroTelPaciente,
    lugarDeResidenciaDelPaciente,
  })
    .catch((error) => console.error("Error al guardar datos:", error));
};

export const registrarUsuario = async ({ nombreDelCuidador, edadDelCuidador, relacionConElPaciente, numeroTelCuidador, lugarDeResidenciaDelCuidador, correoElectronico, password }: Usuario) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, correoElectronico, password);

    const userId = userCredential.user.uid;
    await set(ref(db, `usuarios/${userId}`), {
      nombreDelCuidador,
      edadDelCuidador,
      relacionConElPaciente,
      numeroTelCuidador,
      lugarDeResidenciaDelCuidador,
      userId,
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
}
