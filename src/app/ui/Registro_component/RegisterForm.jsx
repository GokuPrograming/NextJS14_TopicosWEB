function RegisterForm() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Registrar Usuario</h1>
            <form className="mb-4">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
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
                        name="apellidoPaterno"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Ingrese su apellido paterno"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-600">
                        Apellido Materno
                    </label>
                    <input
                        type="text"
                        id="apellidoMaterno"
                        name="apellidoMaterno"
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
    );
}

export default RegisterForm;
