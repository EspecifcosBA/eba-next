import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { getProductsByCategory, getAllProductsCategoryPath, Product } from 'lib/products';
import { useRouter } from 'next/router';

import Card from 'components/card';
import CategoryMenu from 'components/categoryMenu';

const ProductsPerCategory: NextPage<{products: Product[]}> = ({ products }) => {
  const { query, push } = useRouter();
  const activePath = query && query.category && typeof query.category === 'string' ? query.category : undefined;

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
        <CategoryMenu active={activePath} />
      </div>
      <div className="mdl-cell mdl-cell--10-col mdl-cell--12-col-tablet">
        <div className="mdl-grid">
          {
            products.map(product => (
              <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone" key={product.name}>
                <Card
                  title={product.name}
                  img={product.image}
                  onClick={() => push(`/productos/detalle/${product.url}`)}
                >
                </Card>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const validParam = (
  params: string | string[] | undefined,
): params is string => {
  return params !== undefined && typeof params === 'string';
} 

export const getStaticPaths: GetStaticPaths = async() => {
  const paths = getAllProductsCategoryPath();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = params && validParam(params.category) ? getProductsByCategory(params.category) : [];
  return {
    props: {
      products
    }
  }
}

export default ProductsPerCategory;