import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <div className='eba-not-found'>
        <section>
          <h5>404<br/>Página no encontrada</h5>
          <p>Parece que la página que está intentando acceder no existe, revise la dirección ingresada e intente nuevamente</p>
          <Link href='/'>Volver al inicio</Link>
        </section>
      </div>
      <style jsx>{`
        .eba-not-found {
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          padding: 1rem;
        }
      `}</style>
    </>
  )
};
