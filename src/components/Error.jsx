export const Error = ({children}) => {
  return (
    <>
      <div className="bg-red-500 text-white rounded-md p-3 mb-3 font-bold">
        <p>{children}</p>
      </div>
    </>
  );
}
