import React, { useEffect, useState } from 'react';
import { getPersonas } from './api/strapi';

interface persona {
  id: number;
  attributes: {
    Nombre: string;
    Apellido: string;
    Correo: string;
    Foto?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}


function Demo() {
  const [personas, setpersonas] = useState<persona[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const personasData = await getPersonas();
        setpersonas(personasData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='h-screen p-8'>
      <h1 className='text-3xl font-bold mb-4'>Recopilar Datos de Strapi</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className='text-red-500'>Error: {error.message}</p>
      ) : (
        <div>
          <p className='mb-4'>Estos datos vienen de Strapi:</p>
          <ul className='space-y-4'>
            {personas.map(persona => (
              <li key={persona.id} className='border p-4 rounded shadow'>
                <h2 className='text-xl font-semibold'>{persona.attributes.Nombre}</h2>
                <p className='mt-2 text-gray-600'>{persona.attributes.Apellido}</p>
                <p className='mt-1 text-sm text-gray-500'>Correo: {persona.attributes.Correo}</p>
                {/* Mostrar la imagen si está disponible */}
                {persona.attributes.Foto && persona.attributes.Foto.data && (
                  <img  
                    /*src={`http://147.182.243.95:1337${persona.attributes.Foto.data.attributes.url}`}*/
                    src={`http://147.182.243.95:1337${persona.attributes.Foto.data.attributes.formats.small.url}`}
                    alt={`${persona.attributes.Nombre} ${persona.attributes.Apellido}`}
                    className='mt-4'
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  
}

export default Demo;
