import { useEffect } from "react";
import PacienteCard from "./PacienteCard";

export  const ListadoPacientes = ({ pacientes, setPaciente, paciente, eliminarPacientes }) => {
  /*useEffect(() => {
    if (pacientes.length) {
      console.log("nuevo");
    }
  }, [pacientes]);*/

  return (
    <div className="md:w-1/2">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="mt-5 font-bold text-lg text-center">
            Administra Pacientes
          </p>
          <div className="overflow-y-auto md:h-screen">
            {pacientes.map((paciente) => {
              return (
                <PacienteCard
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPacientes={eliminarPacientes}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="mt-5 font-bold text-lg text-center">Agrega Pacientes</p>
        </>
      )}
    </div>
  );
};
