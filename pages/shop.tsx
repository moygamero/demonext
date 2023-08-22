import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Productos } from './api/banner';

export default function Shop() {

    const [productos, setProductos] = useState<any[]>([]);


    useEffect(() => {

        Productos().then((resp) => {
            setProductos(resp)
        })

    }, []);

    return (
        <>
            <section style={{ fontFamily: '"Anton", sans-serif' }}
                className='flex flex-col h-full 2xl:h-screen w-3/4 m-auto pb-5 '>

                <div className='mt-32 pl-20'>

                    <h2 className='text-black text-left text-4xl lg:text-5xl xl:text-7xl scale-y-75'>
                        <strong className='text-blue-600-500 relative right-1 bottom-1'>▼</strong>
                        Productos
                    </h2>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 mt-24 h-3/6 gap-y-12 2xl:gap-4'>

                    {productos.map((producto) => (
                        <div key={producto.id} className='flex flex-col items-center justify-center 2xl:block'>

                            {/* <Image className='object-cover object-center h-64 2xl:m-auto shadow-2xl' src='' alt="imagen construccion" width={295} height={0} /> */}

                            
                            <img className='object-contain object-center h-64 2xl:m-auto' src={`http://147.182.243.95:1337${producto.attributes.imagen.data.attributes.formats.thumbnail.url}`} alt="imagen de producto" />    

                            <h5 className='text-left text-2xl'> {producto.attributes.Nombre}
                             </h5>

                            <p className=' text-sm w-72' >
                            {producto.attributes.descripcion}    
                             </p>

                        </div>

                    ))
                    }
                </div>


            </section>
        </>
    );
}


