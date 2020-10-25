import DistributorsData from 'data/distributors.json';

export type Group = "capital federal y GBA" | "interior del pais" | "internacional";

const _data = DistributorsData as Distributor[];
const _groups: Group[] = ["capital federal y GBA", "interior del pais", "internacional"];

export type Distributor = {
  group: Group | 'casa central';
  country: string;
  province: string;
  place: string;
  name: string;
  address: string;
  phone: string[];
  whatsapp?: string;
};

export type ByGroups = {
  [key in Group] : Distributor[]
}

export const getAllDistributors = () => {
  return _data;
}

export const getDistributorsByGroup = () => {
  return _data.reduce((groups, distributor) => {
    const { group } = distributor;
    return group === 'casa central' ? groups : {
      ...groups,
      [group]: [
        ...groups[group] || [],
        distributor
      ]
    }
  }, {} as ByGroups);
}

export const getGroups = () => {
  return _groups;
}

export const getHeadquarters = () => {
  return _data.find(distributor => distributor.group === 'casa central') || {
    group: "casa central",
    country: "argentina",
    province: "capital federal",
    place: "capital federal",
    name: "casa central",
    address: "Leopoldo Marechal 914",
    phone: [
      "01141396860",
      "01141396861"
    ]
  };
}

export default {
  getAllDistributors,
  getDistributorsByGroup,
  getGroups,
  getHeadquarters,
};
