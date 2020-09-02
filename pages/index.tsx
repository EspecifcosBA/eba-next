import { useRouter } from 'next/router';
import { Fade } from "react-awesome-reveal";

import Button from 'components/button';
import Ball from 'components/ball';

export default function Home() {
  const router = useRouter();

  return (  
    <div className="page-content">
      <Fade cascade>
        <section className="intro-container">
          <div className="intro-content">
            <Ball size={[100, 100]} zIndex={-1} top="-6rem" left="35%" inert/>
            <h1 className="">Cuidado específico para cada tipo de piel.</h1>
            <p className="subtitle-text">Productos profesionales, elaborados con normas de calidad internacional GMP, basados en sustancias activas concentradas de gran pureza y vehículos específicos altamente eficaces que permiten optimizar la belleza y cuidados personalizados de la piel, con base científica.</p>
          </div>
        </section>
        
        <section className="us-container">
          <div className="us-primary">
            <Fade triggerOnce>
              <div className="us-primary__img">
                <img src="/img/us-photo-4.jpg"/>
              </div>
            </Fade>
            <div className="us-primary__text">
              <Fade delay={300} triggerOnce>
                <p>El diagnóstico previo personalizado y seguimiento por una profesional formada en tratamientos ESPECIFICOS Buenos Aires es nuestra filosofía de excelencia, ética, seriedad y apoyo constante para un perfecto resultado.</p>
              </Fade>
            </div>
          </div>
          <div className="us-secondary">
            <Fade delay={500} direction="down" triggerOnce >
              <h3>El alma de nuestros productos:<br/>autenticidad y excelencia</h3>
            </Fade>
          </div>
        </section>

        <section className="us-products">
          <div className="us-products__container">
            <div className="us-products__img">
              <Ball zIndex={-2} top="1rem" right="-30%" />
              <div className="us-products__img__bg"></div>
              <div className="us-products__img__product"></div>
            </div>
            <div className="us-products__text">
              <h3>Tratamientos pensados desde una profesional de la estética hacia sus colegas</h3>
              <Button accent raised onClick={() => { router.push('/productos') }}>Ver productos</Button>
            </div>
          </div>
        </section>
        {/* <section className="us-certification">
          <div className="us-certification__logos">
            <img src="/logos/anmat.png" />
            <img src="/logos/gmp.png" />
            <img src="/logos/iso9000.png" />
            <img src="/logos/iso14000.png" />
          </div>
          <div className="us-certification__text">
            <h4>Estrictos controles bajo normas de calidad nacional e internacional son garantía de nuestros productos.</h4>
          </div>
        </section> */}
        
      </Fade>
      
      <style jsx>{`
        .intro-container {
          background: no-repeat right/contain url(/img/us-photo-0.jpg);
          height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 5rem;
        }
        .intro-content {
          position: relative;
          width: 50%;
          padding: 2rem;
          background-color: rgba(255, 255, 255, 0.3);
          text-align: left;
        }

        .intro-content h1 {
          font-size: 4rem;
          font-family: var(--fontDisplay);
          font-weight: 600;
          line-height: 1.05;
          margin: 0.5rem 0;
          letter-spacing: unset;
        }
        .top-container {
          z-index: 2;
        }
        
        .subtitle-text {
          font-size: 1.2em;
          opacity: 0.7;
          font-weight: 300;
        }

        section.us-container {
          display: flex;
          background-color: var(--secondaryXLightColor);
          color: var(--secondaryDarkColor);
          margin: 5rem 0;
          height: 60vh;
        }

        section.us-container .us-primary {
          flex: 1.5;
          position: relative;
        }

        section.us-container .us-primary .us-primary__img {
          position: absolute;
          top: -3rem;
          overflow: hidden;
          height: 60%;
          margin: auto;
          left: 25%;
          width: 50%;
        }

        section.us-container .us-primary .us-primary__img img {
          width: 100%;
        }

        section.us-container .us-primary .us-primary__text {
          position: absolute;
          width: 90%;
          top: 60%;
          left: 5%;
          text-align: center;
        }

        section.us-container .us-primary .us-primary__text p {
          font-size: 1.1rem;
          font-weight: 300
        }
        
        section.us-container .us-secondary {
          flex: 2;
          background: url(/img/monodosis-bg-edit.jpg);
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 3rem;
        }

        section.us-container .us-secondary h3 {
          font-family: var(--fontDisplay);
          width: 90%;
          font-size: 3rem;
          font-weight: 600;
          padding: 2rem;
          text-align: center;
          margin: 0 auto;
          color: rgba(0,0,0,0.87);
        }

        section.us-certification {
          display: flex;
          flex-direction: column;
          padding: 3rem;
          background: var(--primaryXLightColor);
          margin: 0 0 2rem;
        }
        
        section.us-certification .us-certification__logos {
          display: flex;
          width: 100%;
          justify-content: center;
        }

        section.us-certification .us-certification__logos img {
          flex: 1;
          object-fit: contain;
          max-width: 200px;
        }
        section.us-certification .us-certification__text h4 {
          font-family: var(--fontDisplay);
          text-align: center;
          color: var(--primaryDarkColor);
        }

        section.us-products {
          height: 50vh;
          position: relative;
        }

        section.us-products .us-products__container {
          display: flex;
          height: 100%;
          width: 60%;
          margin: auto;
        }

        section.us-products .us-products__container .us-products__img {
          flex: 1 0 33%;
          position: relative;
        }

        section.us-products .us-products__container .us-products__img .us-products__img__bg {
          background: no-repeat center/cover url(/img/us-photo-5-blue.jpg);
          height: 100%;
        }

        section.us-products .us-products__container .us-products__img .us-products__img__product {
          background: no-repeat url(/products/sublime-uvit-60.png);
          width: 200px;
          height: 170px;
          position: absolute;
          background-size: contain;
          bottom: 0;
          right: -40%;
        }

        section.us-products .us-products__container .us-products__text {
          padding: 1rem;
        }
        section.us-products .us-products__container .us-products__text h3 {
          font-family: var(--fontDisplay);
          font-weight: 600;
        }

        @media screen and (max-width: 769px) {
          .intro-container {
            background: no-repeat center/cover url(/img/us-photo-0-mb.jpg);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            height: 90vh;
          }

          .intro-content {
            width: 100%;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.6);
          }

          section.us-container {
            flex-direction: column-reverse;
          }

          section.us-container .us-primary {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          section.us-container .us-primary .us-primary__img,
          section.us-container .us-secondary h3 {
            display: none;
          }

          section.us-container .us-primary .us-primary__text {
            position: inherit;
            top: auto;
            left: auto;
          }

          section.us-container .us-secondary {
            padding: 0;
            padding-bottom: 2rem;
            flex: 1;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: top;
          }
          section.us-container .us-secondary h3 {
            width: 100%;
            padding: 1rem;
          }

          section.us-certification .us-certification__logos {
            overflow-x: scroll;
            justify-content: flex-start;
          }

          section.us-certification .us-certification__logos img {
            max-width: 150px;
          }

          section.us-products .us-products__container {
            width: 90%;
            height: 80%;
          }

          section.us-products .us-products__container .us-products__img .us-products__img__product {
            height: 35%;
            right: -70%;
          }
        }

        @media screen and (max-width: 425px) {
          .intro-container {
            height: 75vh;
            padding: 0;
          }
          .intro-content {
            width: auto;
            text-align: left;
            padding: 2rem;
          }
          .intro-content h1 {
            font-size: 2.5rem;
          }
          section.us-products .us-products__container {
            display: flex;
            flex-direction: column;
          }
          section.us-products .us-products__container .us-products__img .us-products__img__product {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
