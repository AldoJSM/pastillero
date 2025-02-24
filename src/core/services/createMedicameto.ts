import { ref, set, get } from "firebase/database";
import { db } from "./firebase";

interface Medicamento {
    userId: string,
    nombre: string,
    ciclo: string,
    primera: string,
}

export const registrarMedicamento = async ({ userId, nombre, ciclo, primera }: Medicamento) => {
    try {
        const medRef = ref(db, `usuarios/${userId}/paciente/medicamentos/${nombre}`);
        await set(medRef, { ciclo, primera });

        console.log(" Medicamento registrado con éxito en:", `usuarios/${userId}/paciente/medicamentos/${nombre}`);
    } catch (error) {
        console.error("Error", error);
    }
}