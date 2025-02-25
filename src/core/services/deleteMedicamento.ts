import { ref, remove } from "firebase/database";
import { db } from "./firebase";

export const eliminarMedicamento = async (userId: string, medicamento: string) => {
  try {
    console.log(medicamento);
    console.log(userId);
    const medicamentoRef = ref(db, `usuarios/${userId}/paciente/medicamentos/${medicamento}`);
    await remove(medicamentoRef);
    console.log("Medicamento eliminado correctamente");
  } catch (error) {
    console.error("Error eliminando el medicamento:", error);
  }
};