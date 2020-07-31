import { FunctionComponent } from 'react';

type Props = {
  color?: 'primary' | 'secondary' | 'muted';
}
const Label: FunctionComponent<Props> = ({ children, color = 'primary' }) => (
  <>
    <span className={`eba-label eba-label-${color}`}>{ children }</span>
    <style jsx>{`
      .eba-label {
        display: inline-block;
        padding: 0 10px;
        background: var(--primaryColor);
        line-height: 1.7;
        font-size: 12px;
        color: #fff;
        vertical-align: middle;
        white-space: nowrap;
        border-radius: 2px;
        text-transform: uppercase;
        margin-right: 5px;
        letter-spacing: 0.02rem;
      }
      .eba-label:last-child {
        margin-right: 0;
      }

      .eba-label-secondary {
        background: var(--primaryDarkColor);
      }

      .eba-label-muted {
        background: var(--secondaryDarkColor);
      }

    `}</style>
  </>
);

export default Label;