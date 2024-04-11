
"use client"
import React, { useEffect, useState } from 'react';
function UserTable({ refreshTable }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/usuario');
      const result = await response.json();
      setData(result.data);
      console.log(result.data);
    }

    fetchData();
  }, [refreshTable]);
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
          {data.map(item => (
            <tr key={item.id_ingeniero}>
              <td className="border border-gray-300 px-4 py-2">{item.nombre}</td>
              <td className="border border-gray-300 px-4 py-2">{item.apellido_paterno}</td>
              <td className="border border-gray-300 px-4 py-2">{item.apellido_materno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
