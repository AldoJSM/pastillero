import { ref, set, get  } from "firebase/database";
import { db } from "./firebase";

interface Medicamento {
    userId: string,
    nombre: string,
    ciclo: string,
    primera: string,
}

export const registrarMedicamento = async ({ userId, nombre, ciclo, primera }: Medicamento) => {
    try {
        if (!userId) {
            throw new Error("idUser es undefined");
        }

        // Verificar si el usuario existe antes de registrar el medicamento
        const userRef = ref(db, `usuarios/${userId}`);
        const snapshot = await get(userRef);

        if (!snapshot.exists()) {
            throw new Error(`El usuario con ID ${userId} no existe en Firebase.`);
        }

        // Registrar medicamento en la ruta correcta
        const medRef = ref(db, `usuarios/${userId}/medicamentos/${nombre}`);
        await set(medRef, { ciclo, primera });

        console.log(" Medicamento registrado con éxito en:", `usuarios/${userId}/medicamentos/${nombre}`);
    } catch (error) {
        console.error("Error", error);
    }
}