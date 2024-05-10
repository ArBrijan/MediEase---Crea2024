import React, { useEffect, useState } from 'react'

export function Preloader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Aplicar overflow hidden al body
        document.body.style.overflow = 'hidden';

        // Simular la carga de datos
        setTimeout(() => {
            setLoading(false);
            // Restaurar el overflow del body cuando se complete la carga
            document.body.style.overflow = '';
        }, 2000); // espera 2 segundos antes de ocultar el preloader

        // Limpieza al desmontar el componente
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (loading) {
        return <div className='bg-black h-[100vh] text-white flex justify-center items-center overflow-hidden'>Cargando...</div>;
    }
}