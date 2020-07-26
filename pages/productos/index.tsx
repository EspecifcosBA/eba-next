import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import { InferGetStaticPropsType } from 'next';

type Product = {
  name: string,
  _id: number,
  desc: string
};

export default function Products({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const parseName = (name: string) => name.replace(/ /g, '_');
  return (
    <div>
      <h1>Products</h1>
      {
        products.map(product => (
          <div key={product.name}>
            <Link href={`productos/${parseName(product.name)}`}>
              <a>{product.name}</a>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export const getStaticProps = async () => {
  const fileContent = fs.readFileSync(path.join(process.cwd(), 'data/products.json'), {encoding: 'utf8'});
  const products: Product[] = JSON.parse(fileContent);

  return {
    props: {
      products
    }
  }
}
