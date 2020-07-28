import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const activePath = (href: string) => router.pathname === href ? 'active' : '';
  const paths = [
    { href: '/', label: 'nosotros'},
    { href: '/productos', label: 'productos'},
    { href: '/distribuidoras', label: 'distribuidoras'},
    { href: '/contacto', label: 'contacto'},
  ];

  return (
    <>
      <header className="eba-header mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div role="button" className="mdl-layout__drawer-button">
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
          
          <nav className="mdl-navigation mdl-layout--large-screen-only">
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
      <div className="mdl-layout__drawer">
        <nav className="mdl-navigation">
          {
            paths.map(({ href, label }, key) => (
              <Link href={href} key={key}>
                <a className={`mdl-navigation__link ${activePath(href) && 'active'}`}>{label}</a>
              </Link>
            ))
          }
        </nav>
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
        @media screen and (min-width: 1025px) {
          .eba-header .mdl-layout__drawer-button {
            display: none;
          }
        }
      `}</style>
    </>
  )
};

export default Navbar;