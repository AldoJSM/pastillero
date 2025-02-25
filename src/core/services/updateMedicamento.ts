import { ref, update } from "firebase/database";
import { db } from "./firebase";

interface Medicamento{
    userId: string, 
    medicamento: string,
    ciclo: string,
    primera: string,
}

export const actualizarMedicamento = async ({userId,medicamento,ciclo,primera}:Medicamento) => {
    try {
        const medicamentoRef = ref(db, `usuarios/${userId}/medicamentos/${medicamento}`);
        await update(medicamentoRef,{
            ciclo,primera
        });
        console.log("Medicamento actualizado correctamente");
    } catch (error) {
        console.error("Error actualizando el medicamento:", error);
    }
};
