import { FunctionComponent } from 'react';

type CardProps = {
  title?: string,
  img?: string,
  suppText?: string,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const Card: FunctionComponent<CardProps> = ({ title, img, suppText, onClick }) => {

  return (
    <div className="eba-card mdl-card" onClick={onClick}>
      {
        img && (
          <div className="mdl-card__media">
            <img src={`/products/${img}`}/>
          </div>
        )
      }
      <div className="mdl-card__title">
        <h4 className="mdl-card__title-text">{ title }</h4>
      </div>
      {
        suppText && (
          <div className="mdl-card__supporting-text">
            { suppText }
          </div>
        )
      }

      <style jsx>
      {`
        .eba-card.mdl-card {
          width: 100%;
          height: 400px;
          background-color: var(--secondaryXLightColor);
        }

        .eba-card.mdl-card:hover {
          cursor: pointer;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
        }

        .eba-card > .mdl-card__media {
          background-repeat: no-repeat;
          background-position: bottom center;
          background-size: contain;
          background-color: var(--secondaryXLightColor);
          height: 75%;
          display: flex;
          justify-content: center;
          padding: 2rem;
          padding-bottom: 0;
          flex: 1 auto;
        }
        .eba-card > .mdl-card__media > img {
          height: 100%;
          object-fit: contain;
        }
        .eba-card > .mdl-card__title {
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
        }

        .eba-card > .mdl-card__title > .mdl-card__title-text {
          align-self: center;
        }
      `}</style>
    </div>
  );
}

export default Card;