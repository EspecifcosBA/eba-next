import { FunctionComponent } from 'react';
import cx from 'classnames';

import Button from 'components/button';

type CardProps = {
  title?: string,
  img?: string,
  suppText?: string,
  flexCard?: boolean,
  muted?: boolean,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
  actions?: {
    label: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void
  }[],
  className?: string,
  inert?: boolean,
}

const Card: FunctionComponent<CardProps> = ({ title, flexCard, img, suppText, onClick, actions, muted, children, className = '', inert }) => {
  const classnames = cx({
    'eba-card': true,
    'mdl-card': true,
    'mdl-card--flex': flexCard,
    'mdl-card--muted': muted,
    'mdl-card--extended': !!children,
    'mdl-card--inert': inert,
    [className]: true
  });

  return (
    <div className={classnames} onClick={onClick}>
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
          <div className="mdl-card__body">
            {
              children
            }
          </div>
        ) : null
      }
      {
        actions ? (
          <div className="mdl-card__actions">
            {
              actions.map((action, key) => (
                <Button key={key} onClick={action.onClick}>{action.label}</Button>
              ))
            }
          </div>
        ) : null
      }
      <style jsx>
      {`
        .eba-card.mdl-card {
          width: 100%;
          height: 400px;
          border: 1px solid #efefef;
        }
        
        .eba-card.mdl-card.mdl-card--flex {
          height: 100%;
          min-height: 400px;
        }

        .eba-card.mdl-card.mdl-card--muted {
          background-color: var(--secondaryXLightColor);
        }

        .eba-card.mdl-card:not(.mdl-card--inert):hover {
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

        .eba-card.mdl-card--extended > .mdl-card__title {
          border: 0;
        }

        .eba-card.mdl-card.mdl-card--flex > .mdl-card__title {
          flex: unset;
        }
        .eba-card > .mdl-card__title > .mdl-card__title-text {
          font-size: 1.2rem;
          align-self: baseline;
          font-family: var(--font);
          font-weight: 400;
        }

        .eba-card .mdl-card__title .mdl-card__supporting-text {
          padding: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: capitalize;
        }

        .eba-card .mdl-card__body {
          color: rgba(0,0,0,.54);
          font-size: 1rem;
          line-height: 18px;
          overflow: hidden;
          padding: 16px;
          flex: 1;
          border-top: 1px solid #efefef;
          border-bottom: 1px solid #efefef;
        }
      `}</style>
    </div>
  );
}

export default Card;