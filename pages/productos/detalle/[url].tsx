import { getAllProductsPath, getProductData } from 'lib/products';
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
export default Product;