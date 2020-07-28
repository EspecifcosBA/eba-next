import { FunctionComponent } from 'react';
import Link from 'next/link';

type CategoryMenuProps = {
  active?: string
}

const CategoryMenu: FunctionComponent<CategoryMenuProps> = ({ active }) => {
  const categories = [{
    url: "proteccion_intensiva",
    label: "Protección Intensiva"
  }, {
    url: "higiene",
    label: 'Higiene'
  }, {
    url: "mascaras",
    label: "Máscaras"
  }, {
    url: "peeling",
    label: "Peeling"
  }, {
    url: "acido_hialuronico",
    label: "Ácido Hialurónico"
  }, {
    url: "hombres",
    label: "Hombres"
  }, {
    url: "activos_concentrados",
    label: "Activos Concentrados"
  }, {
    url: "monodosis",
    label: "Monodosis"
  }, {
    url: "proteccion_solar",
    label: "Protección Solar"
  }, {
    url: "corporales",
    label: "Corporales"
  }, {
    url: "therapy_rituals",
    label: "Therapy Rituals"
  }];

  return (
    <ul className="eba-menu">
      {
        categories.map(({ url, label }, i) => (
          <li key={i}>
            <Link href={`/productos/${url}`}>
              <a className={active === url ? 'active' : ''}>{label}</a>
            </Link>
          </li>
        ))
      }
      <style jsx>{`
        .eba-menu {
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          list-style: none;
          position: sticky;
          flex-direction: column;
          margin-left: 0;
          top: 30px
        }

        ul.eba-menu::before {
          content: '';
          top: 0;
          bottom: 0;
          left: auto;
          right: 0;
          border-left: 1px solid #e5e5e5;
          border-bottom: none;
          position: absolute;
        }

        .eba-menu > * {
          flex: none;
          position: relative;
          padding-left: 0;
        }
        .eba-menu > * > a {
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

        .eba-menu > * > a:hover {
          text-decoration: none;
          color: var(--secondaryDarkColor);
        }

        .eba-menu > * > a.active {
          background-color: var(--secondaryXLightColor);
          border-color: var(--primaryColor);
          color: #666;
          text-decoration: none;
        }
      `}</style>  
    </ul>
  )
}

export default CategoryMenu;