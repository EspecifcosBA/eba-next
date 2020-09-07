import { useState, FunctionComponent, useRef, ReactElement, useCallback } from 'react';

type SliderProps = {
  slides?: string[],
  maxItemsPerSlide?: number,
  children: ReactElement[],
};

const Slider: FunctionComponent<SliderProps> = ({ children, maxItemsPerSlide = 1 }) => {
  const GAP = 16;
  const MIN_SIZE = 200;
  const slider = useRef<HTMLDivElement>(null);
  const [ itemWidth, setWidth ] = useState(0);
  const [ itemsPerSlide, setItemsAmount ] = useState(1);
  const [ slidesPosition, setSlidesPosition ] = useState<number[]>([]);
  const [ currentslide, setCurrentSlide ] = useState<number>(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      const containerWidth = node.getBoundingClientRect().width;
      const itemsAmount = calculateItemsPerSlide(containerWidth);
      const slidesWidth = ( containerWidth - (itemsAmount - 1) * GAP) / itemsAmount;
      setWidth(slidesWidth);
      setItemsAmount(itemsAmount);
      setSlidesPosition(children.map((_, i) => i * (slidesWidth + GAP)));
    }
  }, []);

  const calculateItemsPerSlide = (width: number) => {
    const _itemsPerSlide = Math.floor(width / MIN_SIZE) || 1;
    return _itemsPerSlide < maxItemsPerSlide ? _itemsPerSlide : maxItemsPerSlide
  }

  const calculateSliderPosition = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      if (currentslide + itemsPerSlide < slidesPosition.length) {
        return currentslide + itemsPerSlide;
      } else {
        return 0;
      }
    } else {
      if (currentslide - itemsPerSlide >= 0) {
        return currentslide - itemsPerSlide;
      } else {
        return slidesPosition.length - 1;
      }
    }
  }

  const moveSlider = (direction: 'next' | 'prev') => () => {
    const slidercontroler = slider.current;
    if (slidercontroler) {
      const nextSlide = calculateSliderPosition(direction);
      slidercontroler.scrollTo({
        left: slidesPosition[nextSlide],
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
            <div key={key} className='slide' style={{
              
            }}>
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
          gap: ${GAP}px;
          overflow-x: scroll;
          align-items: center;
          margin-bottom: -17px;
          padding-bottom: 20px;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .slide {
          flex-shrink: 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${itemWidth}px;
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