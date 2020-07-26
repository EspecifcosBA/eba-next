import ProductData from 'data/products.json';

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

export const getProductData = (parsedName: string) => {
  const name = parsedName.replace(/_/g, ' ');
  return ProductData.find(product => product.name === name);
}

export default getAllProductsName;