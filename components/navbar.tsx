import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className="eba-header mdl-layout__header">
        <div className="mdl-layout__header-row">
          
          <span className="mdl-layout-title">
            <Link href="/">
              <a className="eba-logo">
                <img src='/logo.svg' style={{height: '38px'}}></img>
              </a>
           </Link>
          </span>
          
          <div className="mdl-layout-spacer"></div>
          
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link href="/">
              <a className="mdl-navigation__link">nosotros</a>
            </Link>
            <Link href="/productos">
              <a className="mdl-navigation__link">productos</a>
            </Link>
            <Link href="/distribuidoras">
              <a className="mdl-navigation__link">distribuidoras</a>
            </Link>
            <Link href="/contacto">
              <a className="mdl-navigation__link">contacto</a>
            </Link>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <nav className="mdl-navigation">
          <Link href="/">
            <a className="mdl-navigation__link">nosotros</a>
          </Link>
          <Link href="/productos">
            <a className="mdl-navigation__link">productos</a>
          </Link>
          <Link href="/distribuidoras">
            <a className="mdl-navigation__link">distribuidoras</a>
          </Link>
          <Link href="/contacto">
            <a className="mdl-navigation__link">contacto</a>
          </Link>
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

        .eba-header a:hover {
          text-decoration: none;
          color: var(--secondaryDarkColor);
        }
      `}</style>
    </>
  )
};

export default Navbar;