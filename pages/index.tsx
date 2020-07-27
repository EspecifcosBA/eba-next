import { useEffect } from 'react';

import Section from 'components/section';
import ProductsShowcase from 'components/productsShowcase';

export default function Home() {
  
  return (
    
    <div className="page-content">
      <Section color='default' size='xlarge' style={{backgroundImage: 'url(/cover-photo.jpg)'}} img>
        <div className="row">
          <div className="column column-50 column-offset-50 text-right">
            <h1 className="uk-text-right">Cuidado específico para cada tipo de piel.</h1>
            <p className="subtitle-text uk-visible@s uk-text-right">Productos profesionales, elaborados con normas de calidad internacional GMP, basados en sustancias activas concentradas de gran pureza y vehículos específicos altamente eficaces que permiten optimizar la belleza y cuidados personalizados de la piel, con base científica.</p>
          </div>
        </div>
      </Section>
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
      
      <style jsx>{`
        .eba-top-section {
          height: 80vh;
          min-height: 460px;
          transition: height 0.25s;
        }
        
        .uk-subnav-pill > * > :first-child {
            padding: 0.5rem 1rem;
            background-color: rgba(0, 0, 0, 0.04);
        }
        
        .top-container {
          z-index: 2;
        }
        
        .subtitle-text {
          font-size: 1.2em;
          opacity: 0.7;
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}
