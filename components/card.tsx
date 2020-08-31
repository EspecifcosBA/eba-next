import { FunctionComponent } from 'react';

type CardProps = {
  title?: string,
  img?: string,
  suppText?: string,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const Card: FunctionComponent<CardProps> = ({ title, img, suppText, onClick, children }) => {

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
        {
          suppText ? (
            <div className="mdl-card__supporting-text">
              { suppText }
            </div>
          ) : null
        }
      </div>
      {
        children ? (
          <div className="mdl-card__supporting-text">
            {
              children
            }
          </div>
        ) : null
      }

      <style jsx>
      {`
        .eba-card.mdl-card {
          width: 100%;
          height: 400px;
          background-color: var(--secondaryXLightColor);
          border: 1px solid #efefef;
        }

        .eba-card.mdl-card:hover {
          cursor: pointer;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
        }

        .eba-card > .mdl-card__media {
          background-color: var(--secondaryXLightColor);
          display: flex;
          justify-content: center;
          padding: 1.5rem;
          height: 75%;
          flex: 4 auto;
        }

        .eba-card > .mdl-card__media > img {
          object-fit: contain;
          max-width: 100%;
        }

        .eba-card > .mdl-card__title {
          border-top: 1px solid #efefef;
          background-color: white;
          text-align: left;
          flex: 1 0 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: baseline;
        }

        .eba-card > .mdl-card__title > .mdl-card__title-text {
          font-size: 1.125rem;
          align-self: baseline;
        }

        .eba-card .mdl-card__title > .mdl-card__supporting-text {
          padding: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
}

export default Card;