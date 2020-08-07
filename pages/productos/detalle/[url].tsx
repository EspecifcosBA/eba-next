import { getAllProductsPath, getProductData, Product } from 'lib/products';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';

import Slider from 'components/slider';
import Section from 'components/section';
import Label from 'components/label';

const ProductPage: NextPage<{product: Product}> = ({ product }) => {
  const images = [
    product.image,
  ].concat(product.variants.length > 1 ? product.variants.map(variant => variant.image) : []);

  return (
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
          <dl className="product-description-list">
            <dt>Descripcion</dt>
            <dd>{ product.fullDesc }</dd>

            <dt>Aplicacion</dt>
            <dd>{ product.apply }</dd>

            <dt>Activos</dt>
            <dd>{product.actives.map((active, i) => (
              <Label color="secondary" key={i}>{active}</Label>
            ))}</dd>

            <dt>Presentacion</dt>
            <dd>{product.variants.map(({ code, content }) => (
              <Label color="muted" key={code}>{content}</Label>
            ))}</dd>
          </dl>
        </Section>
      </div>
    <style jsx>{`
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
        color: var(--secondaryDarkColor);
        font-style: italic;
      }
      .product-description-list > dt {
        color: var(--primaryDarkColor);
        font-weight: normal;
        text-transform: uppercase;
      }

      .product-description-list > dd {
        margin-left: 0;
        margin-bottom: 1rem;
      }
      .product-description-list > dd:last-child {
        margin-bottom: 0;
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
  
  const product = params !== undefined && params.url !== undefined ? getProductData(params.url) : {};
  return {
    props: {
      product
    }
  }
}
export default ProductPage;