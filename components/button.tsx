import React, { FunctionComponent, DOMAttributes } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
  active?: boolean,
  raised?: boolean,
  colored?: boolean,

}

const Button: FunctionComponent<ButtonProps> = ({ active, raised, colored, onClick, children }) => {
  const styles = classNames('eba-button mdl-button mdl-js-button', {
    'mdl-button--raised': raised,
    'mdl-button--accent': active,
    'mdl-button--colored': colored
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
    `}</style>
    </>
  )
}

export default Button;