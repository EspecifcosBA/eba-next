import { getAllProductsName, getProductData } from 'lib/products';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Product = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllProductsName();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params && params.name ? (params.name.length ? '' : params.name) : '';
  //@ts-ignore
  const product = getProductData(params.name);
  return {
    props: {
      product
    }
  }
}
export default Product;