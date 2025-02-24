import { Alert } from "react-native";
import { db } from "./firebase";
import { ref, get } from "firebase/database";

interface idDelUsuario{
    userId:string,
}

export const getDatosUsuario= async ({userId}:idDelUsuario)=>{
    const usuariosRef = ref(db, `usuarios/${userId}`); 
    try {
        const snapshot = await get(usuariosRef); // Obtener los datos una sola vez
        if (snapshot.exists()) {
          console.log("Usuarios:", snapshot.val());
          return snapshot.val();
        } else {
          console.log("No hay usuarios");
          return Alert.alert("Errror", "No se encontro el usuario");
        }
      } catch (error) {
        console.error("Error obteniendo datos:", error);
      }
}