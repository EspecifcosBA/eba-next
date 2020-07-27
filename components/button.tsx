import React, { FunctionComponent, DOMAttributes } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
  active?: boolean,
  raised?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ active, raised, onClick, children }) => {
  const styles = classNames('eba-button mdl-button mdl-js-button', {
    'mdl-button--raised': raised,
    'mdl-button--accent': active,
  })
  return (
    <>
      <button onClick={onClick} className={styles}>
        { children }
      </button>
    <style jsx>{`
      .eba-button:not(:first-child) {
        margin-left: 1rem;
      }
    `}</style>
    </>
  )
}

export default Button;