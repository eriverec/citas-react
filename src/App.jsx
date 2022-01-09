import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";

import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPacientes = (id) => {
    // console.log('Eminando', id);
    const pacientesUpdate = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesUpdate);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPacientes={eliminarPacientes}
        />
      </div>
    </div>
  );
}

export default App;
