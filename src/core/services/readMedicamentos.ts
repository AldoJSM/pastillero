import { Alert } from "react-native";
import { db } from "./firebase";
import { ref, get } from "firebase/database";

interface idDelUsuario{
    userId:string,
}

export const getMedicamentos= async ({userId}:idDelUsuario)=>{
    const usuariosRef = ref(db, `usuarios/${userId}/paciente/medicamentos`); 
    try {
        const snapshot = await get(usuariosRef); // Obtener los datos una sola vez
        if (snapshot.exists()) {
          console.log("Usuarios:", snapshot.val());
          return snapshot.val();
        } else {
          return Alert.alert("Error", "No se encontraron alarmas disponibles");
        }
      } catch (error) {
        console.error("Error obteniendo datos:", error);
      }
}