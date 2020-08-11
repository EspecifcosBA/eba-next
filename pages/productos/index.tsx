import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Card from 'components/card';
import CategoryMenu from 'components/categoryMenu';

import { InferGetStaticPropsType } from 'next';

type Category = "Protección Intensiva" | "Higiene" | "Máscaras" | "Peeling" | "Ácido Hialurónico" | "Hombres" | "Activos Concentrados" | "Monodosis" | "Protección Solar" | "Corporales";
type CategoryUrl = "proteccion_intensiva" |
  "higiene" |
  "mascaras" |
  "peeling" |
  "acido_hialuronico" |
  "hombres" |
  "activos_concentrados" |
  "monodosis" |
  "proteccion_solar" |
  "corporales";

type Product = {
  name: string,
  category: Array<Category>,
  categoryUrl: Array<CategoryUrl>,
  desc: string,
  fullDesc: string,
  actives: Array<string>,
  ph: string,
  variants: {
    code: number,
    content: string,
    price: number,
    sellPrice: number,
    image: string
  }[],
  image: string,
  apply: string,
  url: string,
};

export default function Products({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
          <CategoryMenu />
        </div>
        <div className="mdl-cell mdl-cell--10-col mdl-cell--12-col-tablet">
          <div className="mdl-grid">
            {
              products.map(product => (
                <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone" key={product.name}>
                  <Card
                    title={product.name}
                    img={product.image}
                    onClick={() => router.push('/productos/detalle/[url]', `/productos/detalle/${product.url}`)}
                  >
                    { product.actives.join(', ')}
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
        <style jsx>{`
          .eba-tab {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            list-style: none;
            position: relative;
            flex-direction: column;
            margin-left: 0;
          }

          ul.eba-tab::before {
            content: '';
            top: 0;
            bottom: 0;
            left: auto;
            right: 0;
            border-left: 1px solid #e5e5e5;
            border-bottom: none;
            position: absolute;
          }

          .eba-tab > * {
            flex: none;
            position: relative;
            padding-left: 0;
          }
          .eba-tab > * > a {
            text-align: left;
            border-right: 1px solid transparent;
            border-bottom: none;
            display: block;
            padding: 5px 10px;
            color: #999;
            font-size: .875rem;
            text-transform: uppercase;
            transition: color .1s ease-in-out;
          }

          .eba-tab > * > a:hover {
            text-decoration: none;
            color: var(--secondaryDarkColor);
          }
        `}</style>
      </div>
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
