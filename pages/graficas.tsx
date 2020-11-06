import { FunctionComponent } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { getGraphicAssets, GraphicAssets } from 'lib/graphic-assets';
import Section from 'components/section';

const Graficas: FunctionComponent<InferGetStaticPropsType<typeof getStaticProps>> = ({ graphics }) => {
  return (
    <div>
      <Section>
        <div>
          <h3>Graficas</h3>
          <p>Recursos graficos disponibles para descargar y utilizar en redes sociales, mensajeria o emails.</p>
          <div className='graphic_list'>
            {
              graphics.map(({name, size}, key) => (
                <div key={key} className='graphic_list__item'>
                  <Link href='/graphic-assets/[name]' as={`/graphic-assets/${name}`}>
                    <a>
                      <img src={`/graphic-assets/thumbs/${name}`} alt={name}/>
                      <p>
                        {name} ({size})
                      </p>
                    </a>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </Section>
      <style jsx>{`
        .graphic_list {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          gap: 3rem;
        }

        .graphic_list__item {
          flex: 1 1 auto;
          text-align: center;
          max-width: 200px;
        }

        .graphic_list__item img {
          border: 1px solid var(--secondaryLightColor);
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ graphics: GraphicAssets[] }> = async () => {
  return {
    props: {
      graphics: getGraphicAssets()
    }
  }
}

export default Graficas;