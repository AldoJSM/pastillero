import { ref, remove } from "firebase/database";
import { auth, db } from "./firebase";
import { deleteUser } from "firebase/auth";

export const eliminarUsuario = async (userId: string,) => {
  try {
    const usuarioRef = ref(db, `usuarios/${userId}`);
    await remove(usuarioRef);
    const user = auth.currentUser; // Obtiene el usuario autenticado
    if (user) {
      await deleteUser(user);
      console.log("Usuario eliminado de Auth correctamente");
    } else {
      console.log("No hay un usuario autenticado");
    }
  } catch (error) {
    console.error("Error eliminando el medicamento:", error);
  }
};