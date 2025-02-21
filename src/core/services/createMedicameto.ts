import { ref, set, get  } from "firebase/database";
import { db } from "./firebase";

interface Medicamento {
    idUser: string,
    nombre: string,
    ciclo: string,
    primera: string,
}

export const registrarMedicamento = async ({ idUser, nombre, ciclo, primera }: Medicamento) => {
    try {
        if (!idUser) {
            throw new Error("idUser es undefined");
        }

        // Verificar si el usuario existe antes de registrar el medicamento
        const userRef = ref(db, `usuarios/${idUser}`);
        const snapshot = await get(userRef);

        if (!snapshot.exists()) {
            throw new Error(`El usuario con ID ${idUser} no existe en Firebase.`);
        }

        // Registrar medicamento en la ruta correcta
        const medRef = ref(db, `usuarios/${idUser}/medicamentos/${nombre}`);
        await set(medRef, { ciclo, primera });

        console.log(" Medicamento registrado con éxito en:", `usuarios/${idUser}/medicamentos/${nombre}`);
    } catch (error) {
        console.log("Error");
    }
}