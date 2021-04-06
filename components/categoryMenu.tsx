import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useState, useCallback } from 'react';

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
    url: "espumas",
    label: "Espumas"
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
    url: "micellar_water",
    label: "Micellar Water"
  },{
    url: "tonico",
    label: "Tónico"
  }, {
    url: "therapy_rituals",
    label: "Therapy Rituals"
  }];

  const activeCategory = categories.find(cat => cat.url === active);

  const [ openMenu, setOpenMenu ] = useState<boolean>(false);
  const [ size, setSize ] = useState({ width: 0, height: 0});

  const measuredRef = useCallback(node => {
    if (node !== null) {
      const measurements = node.getBoundingClientRect();
      setSize({ width: measurements.width, height: measurements.height });
    }
  }, []);

  return (
    <>
    <ul className="eba-menu mdl-cell--hide-tablet mdl-cell--hide-phone">
      {
        categories.map(({ url, label }, i) => (
          <li key={i}>
            <Link href="/productos/[category]" as={`/productos/${url}`} passHref>
              <a className={active === url ? 'active' : ''}>{label}</a>
            </Link>
          </li>
        ))
      }
      <li>
        <Link href="/productos">
          <a className={active === undefined ? 'active' : ''}>todos</a>
        </Link>
      </li>
    </ul>
    <div className="mdl-cell--hide-desktop">
      <div className="eba-menu-mobile-title" onClick={() => setOpenMenu(!openMenu)}>
        <span >{activeCategory?.label || 'categorias'}</span>
        <button id="demo-menu-lower-left" className="mdl-button mdl-button--icon">
          <i className="material-icons">{openMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }</i>
        </button>
      </div>

      <div className={`mdl-menu__container is-upgraded ${openMenu ? 'is-visible' : ''}`}>
        <div className="mdl-menu__outline mdl-menu--bottom-left" style={ openMenu ? {width: size.width, height: size.height} : {} }></div>
        <ul className="eba-menu-mobile mdl-menu mdl-menu--bottom-left" ref={measuredRef} style={ openMenu ? { clip: `rect(0px, ${size.width}px, ${size.height}px, 0px)`} : {}}>
          {
            categories.map(({ url, label }, i) => (
              <li key={i} className={`mdl-menu__item ${active === url ? 'active' : ''}`} style={openMenu ? {transitionDelay: '0.19s'} : {}} onClick={() => setOpenMenu(false)}>
                <Link href="/productos/[category]" as={`/productos/${url}`}>
                  <a>{label}</a>
                </Link>
              </li>
            ))
          }
          <li className={`mdl-menu__item ${active === undefined ? 'active' : ''}`} style={openMenu ? {transitionDelay: '0.19s'} : {}} onClick={() => setOpenMenu(false)}>
            <Link href="/productos">
              <a>todos</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
        .eba-menu-mobile-title {
          display: flex;
          align-items: center;
          text-transform: uppercase;
        }
        .eba-menu-mobile-title > span {
          margin-right: 5px;
        }
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
        .eba-menu > * > a,
        .eba-menu-mobile > * > a {
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

        .eba-menu > * > a.active,
        .eba-menu-mobile > li.active {
          background-color: var(--secondaryXLightColor);
          border-color: var(--primaryColor);
          color: #666;
          text-decoration: none;
        }
      `}</style>  
    </>
  )
}

export default CategoryMenu;