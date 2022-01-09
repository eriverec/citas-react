const PacienteCard = ({ paciente, setPaciente, eliminarPacientes }) => {
  // console.log(paciente);
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar?')
    if (respuesta) {
      eliminarPacientes(id)
    }
  }

  return (
    <div className="m-5 bg-white shadow-md rounded-md py-10 px-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div>
        <button 
        className="bg-blue-600 p-2 rounded-md text-white m-2"
        type="button"
        onClick={() => setPaciente(paciente) }        
        >Editar</button>

        <button 
        className="bg-red-500 p-2 rounded-md text-white m-2"
        type="button"
        onClick={handleEliminar}
        >Delete</button>

        
      </div>
    </div>
  );
};

export default PacienteCard;
