import { FunctionComponent } from 'react';

type BallProps = {
  size?: [number, number];
  top?: string,
  left?: string,
  right?: string,
  bottom?: string,
  zIndex?: number,
  inert?: boolean,
}

const Ball: FunctionComponent<BallProps> = ({ size, top, left, bottom, right, zIndex = 0, inert}) => {
  let [ width, height ] = size || [ 200, 200 ];
  return (
    <div>
      <div className="ball__container">
        <div className="ball__circle" style={{
          width,
          height,
          top,
          left,
          right,
          bottom,
          zIndex,
          ...inert && { animation: 'none'}
        }}></div>
      </div>

      <style jsx>{`
        
        .ball__container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .ball__circle {
          width: 200px;
          height: 200px;
          background-color: #E3EFF6;
          border-radius: 50%;
          position: absolute;
          animation-name: orbite;
          animation-duration: 5s;
          transform-origin: center;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .ball__circle:hover {
        }

        @keyframes tremble {
          0% { transform: translate(12px, 10px) rotate(0deg); }
          100% { transform: translate(2px, 1px) rotate(0deg); }
        }

        @keyframes orbite {
          from  { transform: rotate(0deg) translateX(5px) rotate(0deg); }
          to    { transform: rotate(360deg) translateX(5px) rotate(-360deg); }
        }
      `}</style>
    </div>
  )
}

export default Ball;