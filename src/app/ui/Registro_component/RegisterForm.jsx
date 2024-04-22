"use client"
import React, { useState } from 'react';
import UserTable from './UserTable'; // Asegúrate de que la ruta sea correcta
//recibimos los valores del formulario
function RegisterForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',

    });
    // nos ayuda a administrar la actualizacion de la tabla
    const [refreshTable, setRefreshTable] = useState(false);
    ///ayuda a que los datos se ongresen
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    ///evento para cuando se ejecute el registro
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api-presentacion-topicos.onrender.com/usuario/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);
            //alert(data);
            alert("se registro exitosamente, gracias")
            // Actualizar el estado para refrescar la tabla
            setRefreshTable(!refreshTable);
            setFormData({
                nombre: '',
                apellido_paterno: '',
                apellido_materno: '',
            
            });
            console.log("este es form data: ",formData)
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl mb-4">Registrar Usuario</h1>
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Ingrese su nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-600">
                            Apellido Paterno
                        </label>
                        <input
                            type="text"
                            id="apellidoPaterno"
                            name="apellido_paterno"
                            value={formData.apellido_paterno}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Ingrese su apellido paterno"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-600">
                            Apellido Materno
                        </label>
                        <input
                            type="text"
                            id="apellidoMaterno"
                            name="apellido_materno"
                            value={formData.apellido_materno}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Ingrese su apellido materno"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
            {/* va a almacenar lo que le mandemos */}
            <UserTable refreshTable={refreshTable} />
        </>
    );
}

export default RegisterForm;