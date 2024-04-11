function UserTable({ users }) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Lista de Usuarios</h1>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Apellido Paterno</th>
              <th className="border border-gray-300 px-4 py-2">Apellido Materno</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{user.nombre}</td>
                <td className="border border-gray-300 px-4 py-2">{user.apellidoPaterno}</td>
                <td className="border border-gray-300 px-4 py-2">{user.apellidoMaterno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default UserTable;
  