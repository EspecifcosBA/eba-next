import Link from 'next/link';

const Navbar = () => (
  <header className="eba-header">
    <div className="container">
      <nav className="desktop-nav">
        <div>
          <Link href="/">
            <a className="eba-logo">
              <img src='/logo.svg' style={{height: '38px'}}></img>
            </a>
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <Link href="/">
                <a>nosotros</a>
              </Link>
            </li>
            <li>
              <Link href="/productos">
                <a>productos</a>
              </Link>
            </li>
            <li>
              <Link href="/distribuidoras">
                <a>distribuidoras</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a>contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-nav">
        <div>
          +
        </div>
      </nav>
    </div>
    <style jsx>{`
      .eba-header {
        position: sticky;
        top: 0px;
        background-color: white;
        z-index: 10;
        min-height: 5rem;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }

      .eba-header nav.mobile-nav {
        display: none;
      }

      .eba-header nav.desktop-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .eba-header nav.desktop-nav ul {
        list-style: none;
        display: flex;
        margin: 0;
      }

      .eba-header nav.desktop-nav ul li {
        padding: 1rem;
        margin-bottom: 0;
      }

      .eba-header a {
        text-transform: uppercase;
        transition: .1s ease-in-out;
        transition-property: color;
        color: #999;
        padding: 1rem;
        display: flex;
      }

      .eba-header a:hover {
        text-decoration: none;
        color: #666;
      }

      @media (max-width: 40.0rem) {
        .eba-header nav.mobile-nav {
          display: flex;
          align-items: center;
          height: 40px;
        }

        .eba-header nav.desktop-nav {
          display: none;
        }
      }

    `}</style>
  </header>
);

export default Navbar;