import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    
    <div className="page-content">
      <Fade cascade>
        <section className="intro-container">
          <div className="intro-content">
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

        <section className="us-certification">
          <div className="us-certification__logos">
            <img src="/logos/anmat.png" />
            <img src="/logos/gmp.png" />
            <img src="/logos/iso9000.png" />
            <img src="/logos/iso14000.png" />
          </div>
          <div className="us-certification__text">
            <h4>Estrictos controles bajo normas de calidad nacional e internacional son garantía de nuestros productos.</h4>
          </div>
        </section>

      </Fade>
      
      <style jsx>{`
        .intro-container {
          background-image: url(/intro-model-bg.jpg);
          background-attachment: fixed;
          background-position: right;
          height: 70vh;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 5rem;
        }
        .intro-content {
          width: 50%;
          padding: 2rem;
          background-color: rgba(255, 255, 255, 0.3);
          text-align: left;
        }

        .intro-content h1 {
          font-size: 4rem;
          font-family: 'Playfair Display', 'serif';
          font-weight: 600;
          line-height: 1.05;
          margin: 0.5rem 0;
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
        
        section.us-container .us-secondary {
          flex: 2;
          background: url(/monodosis-bg.jpg);
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 3rem;
        }

        section.us-container .us-secondary h3 {
          font-family: 'Playfair Display';
          width: 90%;
          padding: 2rem;
          text-align: center;
          margin: 0 auto;
          color: white;
          background: rgba(0,0,0,0.2);
        }

        section.us-certification {
          display: flex;
          flex-direction: column;
          padding: 3rem;
          background: var(--primaryXLightColor);
          backgro
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
          font-family: 'Playfair Display';
          text-align: center;
          color: var(--primaryDarkColor);
        }

        @media screen and (max-width: 769px) {
          .intro-container {
            background-image: url(/intro-model-centre.jpg);
            align-items: center;
            background-position: center;
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
          
          section.us-container .us-primary .us-primary__img {
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
        }
      `}</style>
    </div>
  )
}
