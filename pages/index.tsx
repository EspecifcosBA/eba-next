import { Fade } from "react-awesome-reveal";

import Section from 'components/section';
import ProductsShowcase from 'components/productsShowcase';

export default function Home() {
  const introStyles = {
    
  }
  return (
    
    <div className="page-content">
      <Fade cascade>
        <section style={introStyles} className="intro-container">
          <div className="intro-content">
            <h1 className="">Cuidado específico para cada tipo de piel.</h1>
            <p className="subtitle-text">Productos profesionales, elaborados con normas de calidad internacional GMP, basados en sustancias activas concentradas de gran pureza y vehículos específicos altamente eficaces que permiten optimizar la belleza y cuidados personalizados de la piel, con base científica.</p>
          </div>
        </section>
        <Section color='default' id="us">
          <h3>Nosotros</h3>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae earum odit? Ducimus, ratione, deleniti eius sed cumque eaque rerum expedita in dolore debitis corporis perferendis, excepturi voluptates possimus repellat.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magnam nobis vel tempora, hic culpa quos tenetur consequatur rem sunt iste itaque dolores! Commodi eius temporibus culpa asperiores, assumenda illum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga consequatur ea illo exercitationem omnis repellendus aspernatur, cupiditate repellat nulla id expedita repudiandae eos perspiciatis sint qui maxime. Dignissimos, reiciendis?</p>
          </div>
        </Section>

        <Section color='default' id="productos">
          <ProductsShowcase />
        </Section>
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
          .intro-content p.subtitle-text {
            
          }
        }
      `}</style>
    </div>
  )
}
