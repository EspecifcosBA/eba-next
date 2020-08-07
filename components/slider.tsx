import { useState, FunctionComponent, useRef, ReactElement, useCallback } from 'react';

type SliderProps = {
  slides?: string[],
  children: ReactElement[],
};

const Slider: FunctionComponent<SliderProps> = ({ children }) => {
  const [ width, setWidth ] = useState(0);
  const slider = useRef<HTMLDivElement>(null);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      const measuredWith = node.getBoundingClientRect().width;
      setWidth(measuredWith);
      setSlides(children.map((child, i) => i * measuredWith));
    }
  }, []);

  const [ slides, setSlides ] = useState<number[]>([]);
  const [ currentslide, setCurrentSlide ] = useState<number>(0);

  const calculateSliderPosition = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      if (currentslide + 1 < slides.length) {
        return currentslide + 1;
      } else {
        return 0;
      }
    } else {
      if (currentslide - 1 >= 0) {
        return currentslide - 1;
      } else {
        return slides.length - 1;
      }
    }
  }

  const moveSlider = (direction: 'next' | 'prev') => () => {
    const slidercontroler = slider.current;
    if (slidercontroler) {
      const nextSlide = calculateSliderPosition(direction);
      slidercontroler.scrollTo({
        left: slides[nextSlide],
        behavior: 'smooth'
      });
      setCurrentSlide(nextSlide);
    }
  }

  return (
    <div className="eba-slider" ref={measuredRef}>
      <div className="eba-slider-container" ref={slider}>
        {
          children && children.map((child, key) => (
            <div key={key} className='slide' style={{width}}>
              { child }
            </div>
          ))
        }
      </div>
      {
        children.length > 1 ? (
          <>
            <div role="button" className="slider-arrow slider-arrow-left" onClick={moveSlider('prev')}>
              <span className="material-icons">navigate_before</span>
            </div>
            <div role="button" className="slider-arrow slider-arrow-right" onClick={moveSlider('next')}>
              <span className="material-icons">navigate_next</span>
            </div>
          </>
        ) : null
      }
      <style jsx>{`
        .eba-slider {
          margin: auto;
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .eba-slider-container {
          display: flex;
          overflow-x: auto;
          align-items: center;
          margin-bottom: -17px;
          padding-bottom: 20px;
          scroll-snap-types: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .slide {
          flex-shrink: 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .slider-arrow {
          position: absolute;
          top: 50%;
          cursor: pointer;
          z-index: 3;
          padding: 32px 8px;
        }

        .slider-arrow.slider-arrow-right {
          right: 0;
        }

        .slider-arrow.slider-arrow-left {
          left: 0;
        }
      `}</style>
    </div>
  )
}

export default Slider;