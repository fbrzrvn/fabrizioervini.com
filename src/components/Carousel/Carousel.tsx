import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useIsMobileDevice, useWindowSize } from 'hooks';
import { ChildrenProps } from 'models/props';
import React, { Children, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  ArrowIconLeft,
  ArrowIconRight,
  CarouselContainer,
  CarouselWrapper,
  Dots,
  DotsWrapper,
} from './styles';

const Carousel = ({ children }: ChildrenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselElement, setCarouselElement] = useState(0);
  const { isSmallMobileDevice } = useIsMobileDevice();
  const currentWidth = useWindowSize();

  const slides = Math.ceil(Children.count(children) / carouselElement);
  let slidesDots;
  if (slides !== Infinity) {
    slidesDots = Array.from(new Array(slides), (_, i) => i + 1);
  }
  const slideProps = {
    style: { transform: `translateX(${-100 * currentIndex}%)` },
  };

  useEffect(() => {
    currentWidth && currentWidth < 768
      ? setCarouselElement(1)
      : setCarouselElement(2);
    setCurrentIndex(0);
  }, [currentWidth]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const handleNext = () => {
    if (currentIndex < slides - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(slides - 1);
    }
  };

  return (
    <React.Fragment>
      <CarouselContainer {...handlers}>
        <ArrowIconLeft
          icon={faChevronLeft}
          onClick={handlePrev}
          issmallmobiledevice={isSmallMobileDevice.toString()}
        />
        <ArrowIconRight
          icon={faChevronRight}
          onClick={handleNext}
          issmallmobiledevice={isSmallMobileDevice.toString()}
        />
        <CarouselWrapper {...slideProps}>{children}</CarouselWrapper>
      </CarouselContainer>
      <DotsWrapper>
        {slidesDots?.map((_, i) => (
          <Dots
            key={i}
            onClick={() => setCurrentIndex(i)}
            isActive={currentIndex === i}
          />
        ))}
      </DotsWrapper>
    </React.Fragment>
  );
};

export default Carousel;
