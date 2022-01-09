import { useState, useEffect, useRef } from "react";
import { Error } from "./Error";

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacientes).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      // console.log("vacio");
      setError(true);
    } else {
      // console.log("lleno");
      setError(false);

      const objetoPacientes = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        // id: generateId()
      };

      if (paciente.id) {
        //editando el registro
        objetoPacientes.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPacientes : pacienteState
        );

        setPacientes(pacientesActualizados);
        setPaciente({});
      } else {
        //nuevo registro
        objetoPacientes.id = generateId();
        setPacientes([...pacientes, objetoPacientes]);
      }
      
      //resetear el formulario a vacio
      setNombre("");
      setPropietario("");
      setFecha("");
      setEmail("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 ">
      <h2 className="font-black text-3xl text-center">
        Seguimmiento de Pacientes
      </h2>

      <p className="m-5 font-bold text-lg text-center">Agrega Pacientes</p>
      <form
        onSubmit={handleSubmit}
        className="m-5 bg-white shadow-md rounded-md py-10 px-5 mt-5"
      >
        {error && <Error> Todos los campos son obligatorios </Error>}
        <div className=" mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-gray-400 focus:bg-white"
            type="text"
            placeholder="Mascota"
            value={nombre || ''}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-gray-400 focus:bg-white"
            type="text"
            placeholder="Propietario"
            value={propietario || ''}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-gray-400 focus:bg-white"
            type="email"
            placeholder="email"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-gray-400 focus:bg-white"
            type="date"
            value={fecha || ''}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            rows="5"
            className="border-2 w-full p-2 mt-2 rounded-md focus:outline-gray-400 focus:bg-white"
            value={sintomas || ''}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          value={paciente.id ? "Editar" : "Agregar"}
          type="submit"
          className="bg-blue-600 rounded-md p-2 w-full text-white font-bold hover:bg-blue-700 cursor-pointer transition-all "
        />
      </form>
    </div>
  );
};
