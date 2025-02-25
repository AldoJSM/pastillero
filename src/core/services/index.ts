//Exportamos la incializacion de la base de datos y autenticacion
export * from './firebase';
//Exportamos la funcion para comprobar que hay una cuenta registrada en firebase con auth 
export * from './login';
//Funciones CRUD del usuario y paciente, 
//se registran en el mismo formulario
//(eso esta mal pero por tiempo asi quedara hasta optimizar el codigo)
export * from './createUsers';
export * from './readProfile';
export * from './updateMedicamento'
export * from './deleteUsers';
export * from './updateUsers'
//FuncionesCRUD para dar de alta un medicamento,
//aun falta la logica para que la alarma funcione,
//solo agrega el medicamento, registra la primeraa vez que se ingiere la dosis
//y cada cuanto se debe tomar la siguientes dosis,
//falta agregar las horas posteriores en las que se debe ingerir y que funcione como alarma
export * from './createMedicameto';
export * from './readMedicamentos';
export * from './updateMedicamento';
export * from './deleteMedicamento';