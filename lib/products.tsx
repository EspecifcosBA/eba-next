import ProductData from 'data/products.json';
import { uniq } from 'ramda';

export type Category = "Protección Intensiva" | "Higiene" | "Máscaras" | "Peeling" | "Ácido Hialurónico" | "Hombres" | "Activos Concentrados" | "Monodosis" | "Protección Solar" | "Corporales";
export type CategoryUrl = 
  "proteccion_intensiva" |
  "higiene" |
  "mascaras" |
  "peeling" |
  "acido_hialuronico" |
  "hombres" |
  "activos_concentrados" |
  "monodosis" |
  "proteccion_solar" |
  "corporales";

export type Product = {
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

export const getAllProductsPath = () => {
  return ProductData.map(product => ({
    params: {
      url: product.url
    }
  }))
}

export const getAllProductsName = () => {
  return ProductData.map(product => {
    const name = product.name.replace(/ /g, '_')
    return {
      params: {
        name
      }
    }
  })
}

export const getProductData = (url: string | string[]) => {
  return ProductData.find(product => product.url === url);
}

export const getProductsByCategory = (catUrl: string) => {
  return ProductData.filter(product => product.categoryUrl.includes(catUrl))
}

export const getAllProductsCategoryPath = () => {
  return uniq(ProductData.map(product => product.categoryUrl).flat()).map(cat => ({
    params: {
      category: cat
    }
  }));
}

export default getAllProductsName;