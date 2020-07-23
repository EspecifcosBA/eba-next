import ProductData from '../data/products.json';

export const getAllProductsName = () => {
  return ProductData.map(product => ({
    params: {
      name: product.name.replace(/ /g, '_')
    }
  }))
}

export const getProductData = (parsedName: string) => {
  const name = parsedName.replace(/_/g, ' ');
  return ProductData.find(product => product.name === name);
}

export default getAllProductsName;