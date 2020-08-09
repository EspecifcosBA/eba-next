import { FunctionComponent } from 'react';
import Link from 'next/link';

const Footer: FunctionComponent = () => {
  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        <div className="mdl-logo">
          <img src='/logo-light.svg' style={{height: '42px'}} alt="ESPECIFICOS Buenos Aires"></img>
          Excelencia, ciencia y lujo al cuidado de la piel

        </div>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li><a href="#">Legales</a></li>
          <li>
            <Link href="/contacto">
              <a>Contacto</a>
            </Link>
          </li>
          <li><a href="https://www.facebook.com/Especificos-Buenos-Aires-326062297573907/" target="_blank">Facebook</a></li>
          <li><a href="https://www.instagram.com/especificosba/" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
