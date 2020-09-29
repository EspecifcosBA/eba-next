import { getAllProductsPath, getProductData, Product, getRelated } from 'lib/products';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import Slider from 'components/slider';
import Section from 'components/section';
import Label from 'components/label';
import Card from 'components/card';

const ProductPage: NextPage<{product: Product, related: Product[]}> = ({ product, related }) => {
  const images = [
    product.image,
  ].concat(product.variants.length > 1 ? product.variants.map(variant => variant.image) : []);

  const router = useRouter();
  return (
    <div className="eba-product-page">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <ul className="eba-breadcrumb">
            <li>
              <Link href="/productos">
                <a>Productos</a>
              </Link>
            </li>
            <li>
              <Link href="/productos/[category]" as={`/productos/${product.categoryUrl[0]}`}>
                <a>{product.category[0]}</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mdl-cell mdl-cell--4-col eba-image-list mdl-cell--4-col-phone mdl-cell--8-col-tablet">
          <Slider>
            {
              images.map((image, key) => (
                <div key={key} className="eba-card-image mdl-card" style={{backgroundImage: `url(/products/${image})`}}>
                  <div className="mdl-card__title mdl-card--expand"></div>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="mdl-cell mdl-cell--8-col">
          <Section size="xsmall">
            <h3>{product.name}</h3>
            <p className="product-intro">{product.desc}</p>
            <div className="product-description">
              <div>
                <h4>Aplicación</h4>
                <p>{ product.apply }</p>
              </div>
              <div>
                <h4>Activos</h4>
                <p>
                  {product.actives.map((active, i) => (
                    <Label color="secondary" key={i}>{active}</Label>
                  ))}
                </p>
              </div>
            </div>
          </Section>
        </div>
        <div className="product-highlight">
          <p>
            {product.fullDesc}
          </p>
        </div>
        <Section size="xsmall">
          <h4>Productos relacionados</h4>
          <div className="related-products__list">
            <Slider maxItemsPerSlide={4}>
              {
                related.map((product, key) => (
                  <Card
                    key={key}
                    title={product.name}
                    suppText={product.actives.join(', ')}
                    img={product.image}
                    onClick={() => router.push('/productos/detalle/[url]', `/productos/detalle/${product.url}`)}
                  />
                ))
              }
            </Slider>
          </div>
        </Section>
      </div>
      <style jsx>{`

        .eba-product-page {
          padding: 0 5rem;
        }

        .eba-breadcrumb {
          display: flex;
          flex-wrap: nowrap;
          padding: 0;
          list-style: none;
          overflow: hidden;
        }

        .eba-breadcrumb > * {
          flex: none;
        }

        .eba-breadcrumb > * > * {
          display: inline-block;
          font-size: 14px;
          color: var(--secondaryColor);
          min-width: 0;
        }

        .eba-breadcrumb>:nth-child(n+2)::before {
          content: "/";
          display: inline-block;
          margin: 0 10px;
          font-size: 14px;
          color: var(--secondaryColor);
        }
        .eba-breadcrumb > * > span {
          color: var(--secondaryDarkColor);
        }

        .eba-card-image.mdl-card {
          width: 250px;
          height: 400px;
          background: center / contain no-repeat;
        }

        .eba-card-image-small.mdl-card {
          width: 100px;
          height: 275px;
          background: center / contain no-repeat;
        }
      
        .product-intro {
          font-size: 1.2rem;
          color: var(--secondaryDarkColor)
        }

        .product-highlight {
          background: var(--secondaryXLightColor);
          padding: 2rem;
          margin-top: 2rem;
        }

        .product-highlight > p {
          width: 80%;
          margin: auto;
          font-size: 1.3rem;
          font-weight: 300;
          text-align: center;
        }

        @media screen and (max-width: 769px) {
          .eba-product-page {
            padding: 0rem;
            text-align: center;
          }

          .product-highlight > p{
            width: 100%;
          }
        }
      `}</style>
    
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllProductsPath();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const product = (params !== undefined && params.url !== undefined) ? getProductData(params.url) : undefined;
  const related = product ? getRelated(product.url) : [];

  return {
    props: {
      product,
      related
    }
  }
}
export default ProductPage;