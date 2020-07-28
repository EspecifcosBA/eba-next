import ProductData from 'data/products.json';

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

export default getAllProductsName;