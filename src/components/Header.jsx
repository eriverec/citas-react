function Header({numers,isAdmin}) {
  // console.log(isAdmin);
  return (
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
      Seguimientos Pacientes {''}
      <span className="text-green-500">Veterinaria</span>
    </h1>
  );
}

export default Header;
