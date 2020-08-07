import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const activePath = (href: string) => router.pathname === href ? 'active' : '';
  const [ openDrawer, toggleDrawer ] = useState<boolean>(false);

  const paths = [
    { href: '/', label: 'nosotros'},
    { href: '/productos', label: 'productos'},
    { href: '/distribuidoras', label: 'distribuidoras'},
    { href: '/contacto', label: 'contacto'},
  ];

  const handleDrawerLink = (url: string) => () => {
    toggleDrawer(!openDrawer);
    router.push(url);
  }

  return (
    <>
      <header className="eba-header mdl-layout__header is-casting-shadow">
        <div className="mdl-layout__header-row">
          <div role="button" className="mdl-layout__drawer-button mdl-cell--hide-desktop" onClick={() => toggleDrawer(!openDrawer)}>
            <span className="material-icons">menu</span>
          </div>
          <span className="mdl-layout-title">
            <Link href="/">
              <a className="eba-logo">
                <img src='/logo.svg' style={{height: '38px'}}></img>
              </a>
           </Link>
          </span>
          
          <div className="mdl-layout-spacer"></div>
          
          <nav className="mdl-navigation mdl-cell--hide-tablet mdl-cell--hide-phone">
            {
              paths.map(({ href, label }, key) => (
                <Link href={href} key={key}>
                  <a className={`mdl-navigation__link ${activePath(href)}`}>{label}</a>
                </Link>
              ))
            }
          </nav>
        </div>
      </header>
      <div className="mdl-cell--hide-desktop">
        <div className={`mdl-layout__drawer ${openDrawer ? 'is-visible' : ''}`}>
          <nav className="mdl-navigation">
            {
              paths.map(({ href, label }, key) => (
                <a 
                  key={key}
                  className={`mdl-navigation__link ${activePath(href) && 'active'}`}
                  onClick={handleDrawerLink(href)}
                >
                  {label}
                </a>
              ))
            }
          </nav>
          <div className="eba-social-links">
            <div className="mdl-navigation">
              <a className="mdl-navigation__link" href="https://www.facebook.com/Especificos-Buenos-Aires-326062297573907/" target="_blank">
                <img src="/facebook-50.png" alt="facebook" width={32}/>
              </a>
              <a className="mdl-navigation__link" href="https://www.instagram.com/especificosba/" target="_blank">
                <img src="/instagram-50.png" alt="instagram" width={32}/>
              </a>
              <a className="mdl-navigation__link" href="https://goo.gl/maps/hvv6FA2nvm4dzwtv5" target="_blank">
                <img src="/google-maps-50.png" alt="maps" width={32}/>
              </a>
            </div>
          </div>
        </div>
        <div className={`mdl-layout__obfuscator ${openDrawer ? 'is-visible' : ''}`} onClick={() => toggleDrawer(false)}></div>
      </div>
      <style jsx>{`
        header.eba-header.mdl-layout__header{
          background-color: #fff;

        }

        .eba-header .mdl-navigation__link {
          text-transform: uppercase;
          transition: .1s ease-in-out;
          transition-property: color;
          padding: 1rem;
        }

        .eba-header .mdl-navigation__link.active {
          color: var(--primaryColor);
        }

        .eba-header a:hover {
          text-decoration: none;
          color: var(--secondaryDarkColor);
        }

        .mdl-layout__drawer {
          justify-content: space-between;
        }

        .mdl-layout__drawer .mdl-navigation__link {
          text-transform: uppercase;
          border-bottom: 1px solid var(--secondaryLightColor);
        }

        .mdl-layout__drawer .mdl-navigation__link:last-child {
          border-bottom: 0;
        }

        .eba-social-links .mdl-navigation {
          display: flex;
          flex-direction: row;
        }

        .eba-social-links .mdl-navigation .mdl-navigation__link {
          border-bottom: 0;
        }
      `}</style>
    </>
  )
};

export default Navbar;