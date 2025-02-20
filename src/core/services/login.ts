import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@core";
//interfaces para obtener los datos de las vistas
interface Login {
    correo: string,
    password: string
}
//funciones para usar
export const loguearse = async ({ correo, password }: Login) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, correo, password);
        return { success: true, user: userCredential.user }
    } catch (error) {
        console.log("No logueado", error)
        return { success: false, error: error }
    }
}