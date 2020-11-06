import GraphicAssetsData from 'data/graphic-assets.json';

export type GraphicAssets = {
  name: string,
  size: string,
}

export const getGraphicAssets = () => {
  return GraphicAssetsData as GraphicAssets[]
};

export default {
  getGraphicAssets
}
