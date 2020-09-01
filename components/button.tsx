import React, { FunctionComponent, DOMAttributes } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
  accent?: boolean,
  raised?: boolean,
  colored?: boolean,
  bordered?: boolean,
}

const Button: FunctionComponent<ButtonProps> = ({ accent, raised, colored, bordered, onClick, children }) => {
  const styles = classNames('eba-button mdl-button mdl-js-button', {
    'mdl-button--raised': raised,
    'mdl-button--accent': accent,
    'mdl-button--colored': colored,
    'mdl-button--bordered': bordered
  })
  return (
    <>
      <button onClick={onClick} className={styles}>
        { children }
      </button>
    <style jsx>{`
      .eba-button.mdl-button--raised.mdl-button--colored {
        background-color: var(--secondaryXLightColor);
        color: var(--primaryDarkColor);
      }
      .eba-button.mdl-button--raised.mdl-button--colored:hover {
        background-color: var(--secondaryLightColor);
      }
      .eba-button.mdl-button--bordered {
        border: 1px solid #efefef;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
      }
    `}</style>
    </>
  )
}

export default Button;