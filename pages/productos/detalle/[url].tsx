import { getAllProductsPath, getProductData, Product } from 'lib/products';
import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { useState, useRef } from 'react';
import Slider from 'components/slider';

const ProductPage: NextPage<{product: Product}> = ({ product }) => {
  const images = [
    product.image,
    ...product.variants.map(variant => variant.image)
  ];
  const [ current, setCurrent ] = useState(0);
  const slides = useRef(null);
  const nextSlider = (current: number) => {
    const next = current + 1 < images.length ? current + 1 : 0;
    console.log(next);
    console.log(slides);
    setCurrent(next);
  }

  const prevSlider = (current: number) => {
    const prev = current - 1 >= 0 ? current - 1 : images.length - 1;
    console.log(prev)
    setCurrent(prev);
  }

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <ul className="eba-breadcrumb">
          <li>
            <Link href="/productos">
              <a>productos</a>
            </Link>
          </li>
          <li>
            <Link href={`/productos/${product.categoryUrl[0]}`}>
              <a>{product.category[0]}</a>
            </Link>
          </li>
          <li>
            <span>{product.name}</span>
          </li>
        </ul>
      </div>
      <div className="mdl-cell mdl-cell--4-col eba-image-list">
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
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
      </div>
    <style jsx>{`
      .eba-breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;
      }

      .eba-breadcrumb > * {
        flex: none;
      }

      .eba-breadcrumb > * > * {
        display: inline-block;
        font-size: 14px;
        color: var(--secondaryColor);
      }

      .eba-breadcrumb>:nth-child(n+2)::before {
        content: "/";
        display: inline-block;
        margin: 0 20px;
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