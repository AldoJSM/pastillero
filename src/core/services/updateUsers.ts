import { ref, update } from "firebase/database";
import { db } from "./firebase";

export const actualizarDatosUsuario = async (userId: string, datos: any) => {
  try {
    const usuarioRef = ref(db, `usuarios/${userId}`);
    await update(usuarioRef, datos);
    console.log("Datos actualizados correctamente en Firebase");
  } catch (error) {
    console.error("Error actualizando datos:", error);
  }
};
