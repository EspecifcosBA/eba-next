import { getAllProductsCategoryPath, getAllProductsPath } from '../lib/products';
import { uniq } from 'ramda';

describe('getAllProductsCategoryPath', () => {
  const paths = [
    'proteccion_intensiva',
    'higiene',
    'mascaras',
    'peeling',
    'acido_hialuronico',
    'hombres',
    'activos_concentrados',
    'monodosis',
    'proteccion_solar',
    'corporales'
  ];

  const result = getAllProductsCategoryPath();
  
  it('Returns array with specific path format for Next (params and url keys)', () => {
    result.forEach(path => {
      expect(path).toHaveProperty('params.category');
    })
  })

  it('Creates all categories', () => {
    const _categoriesPath = uniq(result.map(r => r.params.category));
    expect(_categoriesPath).toEqual(paths);
  })

  it('Path does not contain spaces', () => {
    result.forEach(({ params }) => {
      expect(params.category).not.toMatch(/ /g);
    })
  })
});

describe('getAllProductsPath', () => {
  const result = getAllProductsPath();

  it('Returns array with specific path format for Next (params and url keys)', () => {
    result.forEach(path => {
      expect(path).toHaveProperty('params.url')
    })
  });

  it('Path does not contain spaces', () => {
    result.forEach(({ params }) => {
      expect(params.url).not.toMatch(/ /g);
    })
  })
});
