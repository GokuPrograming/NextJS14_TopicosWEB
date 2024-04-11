function UserTable() {
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
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Juan</td>
                        <td className="border border-gray-300 px-4 py-2">Pérez</td>
                        <td className="border border-gray-300 px-4 py-2">González</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">María</td>
                        <td className="border border-gray-300 px-4 py-2">López</td>
                        <td className="border border-gray-300 px-4 py-2">Hernández</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Carlos</td>
                        <td className="border border-gray-300 px-4 py-2">Gómez</td>
                        <td className="border border-gray-300 px-4 py-2">Ramírez</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
